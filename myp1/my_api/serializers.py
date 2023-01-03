from django.contrib.auth.models import User
from rest_framework import serializers
from testapp.models import ProfileImage,Comment,Chat

from rest_framework import serializers
from django.contrib.auth.models import User
from  testapp.models import ProfileImage

class ProfileImageSerializer(serializers.ModelSerializer):        
    class Meta:
        model=ProfileImage
        fields=['id','user','image']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comment
        fields=['id','comment_by','comment_to','comment']

class UserSerializer(serializers.ModelSerializer):
        
    profileimage=ProfileImageSerializer()    
    comment_set=CommentSerializer(many=True,read_only=True)
    class Meta:
        model=User
        fields=['id','username','profileimage','comment_set']

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','password']
    def create(self,validated_data):
        password=validated_data.pop('password',None)
        instance=self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


