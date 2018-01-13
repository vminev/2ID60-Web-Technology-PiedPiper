from rest_framework import serializers
from .models import Membership
from userprofile.serializers import *


class MessageListSerializer(serializers.ModelSerializer):
    user = UserProfileChatroomMembersSerializer

    class Meta:
        model = Membership
        fields = (
            'user'
        )
