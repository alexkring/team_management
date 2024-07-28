from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .viewsets import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet) 

urlpatterns = [
    path('user/', views.user, name='user'),
    path('', include(router.urls)),
]
