from django.urls import path,include
from my_api import views
from rest_framework.routers import DefaultRouter
router=DefaultRouter()
router.register('users',views.UserSerializerView,basename='sub1')
router.register('comments',views.CommentSerializerView,basename='comm')
router.register('profile',views.UserSerializerView1,basename='pro')

router.register('create',views.CreateUserSerializerView,basename='create')
#router.register('image',views.ProfileImageSerializerView,basename='sub1')

from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView,TokenVerifyView
urlpatterns=[
    
    path('api/',include(router.urls),name='api'),
    path('',include('rest_framework.urls')),
    path('gettoken/',TokenObtainPairView.as_view(),name='get'),
    path('verify/',TokenVerifyView.as_view(),name='verify'),
    path('refresh/',TokenRefreshView.as_view(),name='refresh')
]















