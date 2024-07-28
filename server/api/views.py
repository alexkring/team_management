from django.shortcuts import render
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *

# Create your views here.

@api_view(['POST'])
def user(request):
    user_object = request.data['user_object']
    print("create user request: ", user_object)
    serializer = UserSerializer(data=user_object)
    if serializer.is_valid():
        serializer.save()
        print("valid serialization of user creation")
        response_object = {
            'message': 'successfully created new user',
            'status': status.HTTP_201_CREATED,
            #'data': serializer.data
        }
        return Response(response_object, status=status.HTTP_201_CREATED)

    response_object = {
        'message': 'failed to create new user.',
        'status': status.HTTP_400_BAD_REQUEST,
        #'data': serializer.errors
    }
    return Response(response_object, status=status.HTTP_400_BAD_REQUEST)
