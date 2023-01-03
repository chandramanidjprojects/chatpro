from django.shortcuts import render,redirect
from .forms import UserForm,ProfileImageForm
from django.contrib.auth.models import User
from django.http import HttpResponse,JsonResponse
from .models import ProfileImage,Like,Likecheck,Comment,Chat
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
def welcome_page(request):
    user_form=UserForm
    id=request.session.get('_auth_user_id',None)
    if id is not None:
      users=User.objects.exclude(id=id)
      return render(request,'testapp/users.html',{'users':users})
    if request.method=='POST':
      user_form=user_form(request.POST)
      if user_form.is_valid():
         user=user_form.save()
         user.set_password(user.password)
         user.save()
         return redirect('/accounts/login')
    return render(request,'testapp/welcome.html',{'user_form':user_form})



def update_profile(request):
  if request.method=='POST':
    uProfileForm=ProfileImageForm(request.POST,request.FILES,instance=request.user.profileimage)
    if uProfileForm.is_valid():
      uProfileForm.save()
    return redirect('/')
  else:
    uProfileForm=ProfileImageForm(instance=request.user.profileimage)
    return render(request,'testapp/update_profile.html',{'uProfileForm':uProfileForm})  

def likes(request):
  main_user=request.user.id
  person_id=request.GET.get('like_id')
  person=User.objects.get(id=person_id)
  
  exist=person.likecheck_set.filter(like_by=main_user).exists()
  if exist:
    Likecheck.objects.get(like_by=main_user,like_to=person).delete()
  else:
    person.likecheck_set.create(like_by=main_user)
  count=person.likecheck_set.all().count()  
  return JsonResponse({'count':count})

def comments(request,id=None):
  if id is None:
    if request.method=='POST':
      user=request.user
      #user.comment_set.create(comment_to=request.COOKIES.get('id'),comment=request.POST.get('text'))
      text=request.POST.get('text')
      image=request.user.profileimage.image.url
      return JsonResponse({'text':text,'image':image,'user':user.username})
  else:   
    user=User.objects.get(id=id)
    #add_comment=user.comments_set.create(comment_by=request.user.id)
    tot_comments=Comment.objects.filter(comment_to=user.id)
    print(tot_comments)
    response= render(request,'testapp/comments.html',{'user':user,'tot_comments':tot_comments})
    response.set_cookie('id',id)
    return response
    
def chat(request,id):
    chat_with=User.objects.get(id=id)
    tot_chats=Chat.objects.filter(chat_by__in=[request.user,chat_with],chat_to__in=[chat_with.id,request.user.id]).order_by('date_time')
    resp= render(request,'testapp/chat.html',{'chat_with':chat_with,'tot_chats':tot_chats})
    return resp
    




