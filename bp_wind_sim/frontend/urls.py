from django.urls import path,include
from .views import index
urlpatterns = [
     path('',index),
     path('dashboard',index),
     path('historical', index),
     path('control', index)
]
