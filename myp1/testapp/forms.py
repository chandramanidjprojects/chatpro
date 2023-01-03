from django import forms
from django.contrib.auth.models import User
from .models import ProfileImage
class UserForm(forms.ModelForm):
    class Meta:
        model=User
        fields=['username','password']

class ProfileImageForm(forms.ModelForm):
    class Meta:
        model=ProfileImage
        fields=['image']