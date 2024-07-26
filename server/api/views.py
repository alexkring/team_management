from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

@api_view(['GET'])
def list_page(request):
    return Response({'message': 'list page backend response.'})

@api_view(['GET'])
def add_page(request):
    return Response({'message': 'add page backend response.'})
