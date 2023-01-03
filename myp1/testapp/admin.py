from django.contrib import admin
from .models import ProfileImage,Likecheck,Comment,Chat,Thread,Message

class ProfileImageAdmin(admin.ModelAdmin):
    list_display=['id','user','image']

admin.site.register(ProfileImage,ProfileImageAdmin)

admin.site.register(Likecheck)
admin.site.register(Comment)
admin.site.register(Chat)
class ThreadAdmin(admin.ModelAdmin):
    list_display=['name','thread_type']
admin.site.register(Thread,ThreadAdmin)
admin.site.register(Message)
