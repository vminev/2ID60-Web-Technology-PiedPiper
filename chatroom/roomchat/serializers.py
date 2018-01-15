from .models import RoomChat, Message
from rest_framework import serializers
from membership.serializers import MembershipSerializer
from userprofile.serializers import UserProfileMessageCreatorSerializer, AdminSerializer
from connection.serializers import ConnectionSerializer


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
    subscribed_participants = MembershipSerializer(many=True)
    connected_participants = ConnectionSerializer(many=True)

    class Meta:
        model = RoomChat
        fields = (
            'title',
            'subscribed_participants',
            'connected_participants',
            'id'
        )


class RoomChatSummarySerializer(serializers.ModelSerializer):
    admin = AdminSerializer(read_only=True)
    participants = serializers.SerializerMethodField()
    can_enter = serializers.SerializerMethodField()

    class Meta:
        model = RoomChat
        fields = (
            'title',
            'admin',
            'participants',
            'id',
            'can_enter'
        )

    def get_participants(self, obj):
        return obj.subscribed_participants.count()

    def get_can_enter(self, obj):
        user = self.context['request'].user

        if user.is_authenticated():
            return obj.subscribed_participants.filter(user__user__id=user.id).count() > 0
        else:
            return False



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
