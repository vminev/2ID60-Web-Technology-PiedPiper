from .models import RoomChat, Message
from membership.serializers import *


class MessageListSerializer(serializers.ModelSerializer):
    creator = UserProfileMessageCreatorSerializer

    class Meta:
        model = Message
        fields = (
            'content',
            'creator',
            'date_posted'
        )


class RoomChatDetailSerializer(serializers.ModelSerializer):
    subscribed_participants = MembershipSerializer

    class Meta:
        model = RoomChat
        fields = (
            'title',
            'subscribed_participants'
        )


class RoomChatSummarySerializer(serializers.ModelSerializer):
    admin = AdminSerializer

    class Meta:
        model = RoomChat
        fields = (
            'title',
            'admin',
        )


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



