from rest_framework import serializers
from .models import Membership
from userprofile.serializers import *


class MembershipSerializer(serializers.ModelSerializer):
    is_online = serializers.SerializerMethodField()
    user = UserProfileChatroomMembersSerializer()

    class Meta:
        model = Membership
        fields = (
            'is_online',
            'user',
        )

    def get_is_online(self, obj):
        return obj.chatroom.connected_participants.filter(user__id=obj.user.id).count() > 0


class MembershipCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Membership
        fields = (
            'chatroom',
            'user'
        )
