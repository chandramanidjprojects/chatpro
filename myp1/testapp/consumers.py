from channels.generic.websocket import WebsocketConsumer
from django.contrib.auth.models import User
import json
from asgiref.sync import async_to_sync
from .models import Thread
from django.contrib.auth.models import User

#test consumer for private chat room
class TestConsumer(WebsocketConsumer):
    
    def connect(self):
       
       me=self.scope['user']
       other_id=self.scope['url_route']['kwargs']['room_name']
       other_user=User.objects.get(id=other_id)
       thread_obj=Thread.objects.get_or_create_personal_thread(me,other_user)
       
       self.room_name=f'personal_thread_{thread_obj.id}'                  #self.scope['url_route']['kwargs']['room_name']
       self.group_name='{}_group'.format(self.room_name)
       print('name group...',self.room_name,self.group_name)

       async_to_sync(self.channel_layer.group_add)(self.group_name,self.channel_name)
       self.accept()
    def disconnect(self,close_code):
        async_to_sync(self.channel_layer.group_discard)(self.group_name,self.channel_name)
    def receive(self,text_data):
        p_data=json.loads(text_data)
        me=self.scope['user']
        other_id=self.scope['url_route']['kwargs']['room_name']
        #other_user=User.objects.get(id=other_id)
        #me.chat_set.create(chat_to=other_id,chat_text=p_data['message'])        
        #user=self.scope['user']
        async_to_sync(self.channel_layer.group_send)(
            self.group_name,
            {
                'type':'chat_message',
                'message':p_data['message'],
                'user':me.username,
                'image':me.profileimage.image.url
            }
        )
    def chat_message(self,event):
        
        self.send(text_data=json.dumps({
                                        'message':event['message'],
                                        'user':event['user'],
                                        'image':event['image']
                                      }))
    
    

class CommentsConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name=self.scope['url_route']['kwargs']['user_id']
        self.group_name=f'comment_group_{self.room_name}'
        async_to_sync(self.channel_layer.group_add)(self.group_name,self.channel_name)
        self.accept()    
    def disconnect(self,close_code):
        async_to_sync(self.channel_layer.group_discard)(self.group_name,self.channel_name)        
    def receive(self,text_data):
        p_data=json.loads(text_data)
        me=self.scope['user']
        other_id=self.scope['url_route']['kwargs']['user_id']
        other_user=User.objects.get(id=other_id)
        me.comment_set.create(comment_to=other_id,comment=p_data['message'])

        async_to_sync(self.channel_layer.group_send)(self.group_name,
                {
                    'type':'comment_message',
                    'message':p_data['message'],
                    'user':me.username,
                    'image':me.profileimage.image.url
                })
    def comment_message(self,event):
        print('from def///',event)
        self.send(text_data=json.dumps({
            'message':event['message'],
            'user':event['user'],
            'image':event['image']
        }))


















