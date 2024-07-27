from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

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
    # serializer = MyModelSerializer(data=request.data)
    # if serializer.is_valid():
    #    serializer.save()
    #    return Response(serializer.data, status=status.HTTP_201_CREATED)
    # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    response_object = {
        'message': 'called endpoint to create new user.',
        'user': request.data
    }
    return Response(response_object, status=status.HTTP_201_CREATED)

