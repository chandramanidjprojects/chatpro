from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns=[
    path('',views.welcome_page,name='welcom'),
    path('accounts/',include('django.contrib.auth.urls')),
    path('update/',views.update_profile,name='update'),
    path('likes/',views.likes,name='likes'),
    path('comments/<int:id>/',views.comments,name="comments_id"),
    path('comments/',views.comments,name="comments"),
    path('chat/<int:id>/',views.chat,name='chat_id'),
    path('get_api/',include('my_api.urls'))
]
if settings.DEBUG:  
    urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)


















