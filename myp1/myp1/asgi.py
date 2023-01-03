


"""
import os

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import testapp.routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myp1.settings")

application = ProtocolTypeRouter({
  "http": get_asgi_application(),
  "websocket": AuthMiddlewareStack(
        URLRouter(
            testapp.routing.websocket_urlpatterns
        )
    ),
})
"""

"""
import os
from channels.routing import ProtocolTypeRouter
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myp1.settings')

application=ProtocolTypeRouter({
    "http":get_asgi_application()
})

from channels.security.websocket import AllowedHostsOriginValidator
from channels.routing import ProtocolTypeRouter,URLRouter
from channels.auth import AuthMiddlewareStack
from django.core.asgi import get_asgi_application
import os
import testapp.routing
os.environ.setdefault('DJANGO_SETTINGS_MODULE','myp1.settings')


application=ProtocolTypeRouter({
    #"http":get_asgi_application(),
    "websocket":AuthMiddlewareStack(
        URLRouter(
             testapp.routing.websocket_urlpatterns
        )
    )
})
"""
from channels.routing import ProtocolTypeRouter,URLRouter
from channels.auth import AuthMiddlewareStack
from django.core.asgi import get_asgi_application
import os
#from django.urls import path
#from testapp.consumers import TestConsumer
import testapp.routing
os.environ.setdefault('DJANGO_SETTINGS_MODULE','myp1.settings')


application=get_asgi_application()

# ws_patterns=[
#     path('ws/chat/<int:room_name>/',TestConsumer.as_asgi()),
    
# ]
application=ProtocolTypeRouter({

    "websocket":AuthMiddlewareStack(
          URLRouter(testapp.routing.ws_patterns)
    )
    
    
})





















