from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


# Create your views here.
class RegisterView(generics.CreateAPIView):
  authentication_classes = [JWTAuthentication]
  permission_classes = [IsAuthenticated]
  
  
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes=[AllowAny]