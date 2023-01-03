from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from django.db.models import Count
from django.utils import timezone
class ThreadManager(models.Manager):
    def get_or_create_personal_thread(self,user1,user2):

        threads=self.get_queryset().filter(thread_type='personal')

        threads=threads.filter(users__in=[user1,user2]).distinct()

        threads=threads.annotate(u_count=Count('users')).filter(u_count=2)

        if threads.exists():

            return threads.first()
        else:

            thread=self.create(thread_type='personal')
            thread.users.add(user1)
            thread.users.add(user2)
            return thread
    def by_user(self,user):
        return self.get_queryset().filter(users__in=[user])


class Thread(models.Model):
    THREAD_TYPE=(('personal','Personal'),('group','Group'))
    name=models.CharField(max_length=32,null=True,blank=True)
    thread_type=models.CharField(max_length=15,choices=THREAD_TYPE,default='group')
    users=models.ManyToManyField(('auth.user'))
    objects=ThreadManager()
    def __str__(self):
        if self.thread_type=='personal' and self.users.count()==2:
            return f'{self.users.first()} and {self.users.last()}'
        return f'{self.name}'

class Message(models.Model):
    thread=models.ForeignKey(Thread,on_delete=models.CASCADE)
    sender=models.ForeignKey('auth.user',on_delete=models.CASCADE)
    text=models.TextField(blank=False,null=False)
    def __str__(self):
        return f'{self.thread}'



class ProfileImage(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    image=models.ImageField(default='mani.jpg',upload_to='profile')
    def __str__(self):
        return f'{self.user.username} profile picture'

class Like(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    likes=models.IntegerField()
    def __str__(self):
        return f'{self.user.username} likes'
class Likecheck(models.Model):
    like_to=models.ForeignKey(User,on_delete=models.CASCADE)
    like_by=models.IntegerField()

class Comment(models.Model):
    comment_by=models.ForeignKey(User,on_delete=models.CASCADE)
    comment_to=models.IntegerField()
    comment=models.TextField()


class Chat(models.Model):
    chat_by=models.ForeignKey(User,on_delete=models.CASCADE)
    chat_to=models.IntegerField()
    chat_text=models.TextField()
    date_time=models.DateTimeField(default=timezone.now)

class PostVideo(models.Model):
  user=models.ForeignKey(User,on_delete=models.CASCADE)
  video=models.FileField(upload_to='video_posts')



