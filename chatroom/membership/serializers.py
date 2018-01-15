from rest_framework.exceptions import ValidationError
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

    def create(self, validated_data):
        if Membership.objects.filter(chatroom_id=validated_data['chatroom']).count() > 10:
            raise ValidationError('The rooms is full.');

        chatroom = validated_data['chatroom']
        user = validated_data['user']

        membership = Membership(chatroom=chatroom, user=user)
        membership.save()

        return validated_data


class MembershipDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Membership
        fields = (
            'chatroom',
            'user'
        )