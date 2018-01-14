from django.shortcuts import render

# Create your views here.
from rest_framework.generics import CreateAPIView

from roomchat.models import RoomChat, Message
from rest_framework import generics
from .serializers import RoomChatDetailSerializer, RoomChatSummarySerializer, MessageListSerializer, RoomChatCreateSerializer, MessageCreateSerializer


class ChatRoomSummaryView(generics.ListAPIView):  # shows all the chat rooms on the main page
    serializer_class = RoomChatSummarySerializer

    def get_queryset(self):
        return RoomChat.objects.all()


class ChatRoomDetailView(generics.RetrieveAPIView):
    serializer_class = RoomChatDetailSerializer
    lookup_field = 'pk'
    queryset = RoomChat.objects.all()


class ChatRoomCreateView(CreateAPIView):
    queryset = RoomChat.objects.all()
    serializer_class = RoomChatCreateSerializer


class MessageView(generics.ListAPIView):
    serializer_class = MessageListSerializer

    def get_queryset(self):
        return Message.objects.filter(roomchat=self.kwargs['roomchat_id'])


class MessageCreateView(CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageCreateSerializer



