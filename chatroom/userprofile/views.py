from rest_framework.response import Response

# Create your views here.
from rest_framework import generics
from .serializers import *
from rest_framework.permissions import IsAuthenticated


class UserProfileDetailView(generics.RetrieveAPIView):
    serializer_class = UserProfileDetailSerializer
    lookup_field = "id"
    queryset = UserProfile.objects.all()


class UserProfileCreateAPIView(generics.CreateAPIView):
    serializer_class = UserProfileCreateSerializer
    queryset = UserProfile.objects.all()


class UserIdentityAPIView(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        serializer = UserIdentitySerializer(request.user)
        return Response(serializer.data)


class UserProfileUpdateAPIView(generics.UpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileUpdateSerializer
    lookup_field = 'id'
    permission_classes = (IsAuthenticated,)
