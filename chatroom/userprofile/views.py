from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import *


class UserProfileDetailView(generics.RetrieveAPIView):
    serializer_class = UserProfileDetailSerializer
    lookup_field = "pk"
    queryset = UserProfile.objects.all()


class UserProfileCreateAPIView(generics.CreateAPIView):
    serializer_class = UserProfileCreateSerializer
    queryset = UserProfile.objects.all()
