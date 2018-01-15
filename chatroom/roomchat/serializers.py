from .models import RoomChat, Message
from rest_framework import serializers
from membership.serializers import MembershipSerializer
from userprofile.serializers import UserProfileMessageCreatorSerializer, AdminSerializer


class MessageListSerializer(serializers.ModelSerializer):
    creator = UserProfileMessageCreatorSerializer(read_only=True)

    class Meta:
        model = Message
        fields = (
            'content',
            'creator',
            'date_posted'
        )


class RoomChatDetailSerializer(serializers.ModelSerializer):
    subscribed_participants = MembershipSerializer()

    class Meta:
        model = RoomChat
        fields = (
            'title',
            'subscribed_participants'
        )


class RoomChatSummarySerializer(serializers.ModelSerializer):
    admin = AdminSerializer(read_only=True)
    participants = serializers.SerializerMethodField()

    class Meta:
        model = RoomChat
        fields = (
            'title',
            'admin',
            'participants'
        )

    def get_participants(self, obj):
        return obj.subscribed_participants.count()


class RoomChatCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = RoomChat
        fields = (
            'title',
            'admin',
        )


class MessageCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = (
            'creator',
            'content',
            'roomchat'
        )



