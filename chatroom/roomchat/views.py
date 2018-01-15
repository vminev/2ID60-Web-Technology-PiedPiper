from rest_framework.generics import CreateAPIView

from roomchat.models import RoomChat, Message
from rest_framework import generics
from .serializers import RoomChatDetailSerializer, RoomChatSummarySerializer, MessageListSerializer, RoomChatCreateSerializer, MessageCreateSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny


class ChatRoomSummaryView(generics.ListAPIView):
    serializer_class = RoomChatSummarySerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return RoomChat.objects.all()


class ChatRoomDetailView(generics.RetrieveAPIView):
    serializer_class = RoomChatDetailSerializer
    lookup_field = 'pk'
    queryset = RoomChat.objects.all()
    permission_classes = (AllowAny,)


class ChatRoomCreateView(CreateAPIView):
    queryset = RoomChat.objects.all()
    serializer_class = RoomChatCreateSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(admin=self.request.user.profile)


class MessageView(generics.ListAPIView):
    serializer_class = MessageListSerializer

    def get_queryset(self):
        return Message.objects.filter(roomchat=self.kwargs['roomchat_id'])


class MessageCreateView(CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageCreateSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user.profile)



