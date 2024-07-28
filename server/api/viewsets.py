from django.shortcuts import render
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .serializers import *
from .models import User

# Create your viewsets here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all() # Get all items from the model
    serializer_class = UserSerializer