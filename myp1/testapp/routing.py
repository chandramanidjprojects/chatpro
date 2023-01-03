from django.urls import path

from . import consumers

ws_patterns=[
    path('ws/chat/<int:room_name>/',consumers.TestConsumer.as_asgi()),
    #path('ws/comments/<int:user_id>/',consumers.CommentsConsumer.as_asgi()),
    
]


