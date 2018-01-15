from rest_framework import serializers
from .models import Connection
from userprofile.serializers import *


class ConnectionSerializer(serializers.ModelSerializer):
    user = UserProfileChatroomMembersSerializer()

    class Meta:
        model = Connection
        fields = (
            'user',
        )
