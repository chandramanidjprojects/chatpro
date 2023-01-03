from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.response import Response
from .serializers import UserSerializer,CommentSerializer,CreateUserSerializer
from rest_framework import viewsets
from .serializers import UserSerializer
from testapp.models import Comment
#from rest_framework.authentication import SessionAuthentication,BasicAuthentication
from rest_framework.permissions import IsAuthenticated,AllowAny

class UserSerializerView(viewsets.ModelViewSet):
  queryset=User.objects.all()   
  serializer_class=UserSerializer
  permission_classes=[IsAuthenticated] 
  
  def get_queryset(self):
    print(self.request.user)
    return super().get_queryset().all()







class CommentSerializerView(viewsets.ModelViewSet):
  queryset=Comment.objects.all()
  serializer_class=CommentSerializer

class CreateUserSerializerView(viewsets.ModelViewSet):
  queryset=User.objects.all()
  serializer_class=CreateUserSerializer


class UserSerializerView1(viewsets.ModelViewSet):

  queryset=User.objects.all()   
  serializer_class=UserSerializer
  permission_classes=[IsAuthenticated]
  def get_queryset(self):
    req=self.request.user
    #user=User.objects.get(id=req.id)
    return super().get_queryset().filter(id=req.id)

