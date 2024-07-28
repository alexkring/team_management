from django.shortcuts import render
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import *

# Create your views here.

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

@api_view(['GET'])
def list_page(request):
    users = [{
        'id': '1',
        'first_name': 'Alex',
        'last_name': 'Kring',
        'email': 'awkring@gmail.com',
        'phone_number': '415-215-2135',
        'role': 'admin'
    }, {
        'id': '2',
        'first_name': 'Jeff',
        'last_name': 'Jones',
        'email': 'jeff@gmail.com',
        'phone_number': '605-305-6115',
        'role': 'team_member'
    }]
    return Response({'users': users})

@api_view(['GET'])
def add_page(request):
    return Response({'message': 'add page backend response.'})

@api_view(['GET'])
def edit_page(request):
    return Response({'message': 'edit page backend response.'})

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
