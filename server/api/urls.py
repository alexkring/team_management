from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('list-page/', views.list_page, name='list_page'),
    path('add-page/', views.add_page, name='add_page'),
    path('edit-page/', views.edit_page, name='edit_page'),
    path('user/', views.user, name='user'),
]
