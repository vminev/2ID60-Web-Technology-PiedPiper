from rest_framework import serializers
from .models import RoomChat, Message
from userprofile.serializers import *


class MessageListSerializer(serializers.ModelSerializer):
    creator = UserProfileMessageCreatorSerializer

    class Meta:
        model = Message
        fields = (
            'creator',
            'content',
            'date_posted'
        )


class RoomChatDetailSerializer(serializers.ModelSerializer):
    participants = UserProfileChatroomMembersSerializer
    messages = MessageListSerializer

    class Meta:
        model = RoomChat
        fields = (
            'title',
            'participants',
            'messages'
        )


class RoomChatSummarySerializer(serializers.ModelSerializer):
    admin = AdminSerializer

    class Meta:
        model = RoomChat
        fields = (
            'title',
            'admin',
        )


