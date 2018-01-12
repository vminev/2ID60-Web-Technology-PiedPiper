from rest_framework import serializers
from .models import UserProfile


class UserProfileDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = (
            'user_name',
            'first_name',
            'family_name',
            'profile_photo',
            'age',
            'gender',
            'description',
        )


class AdminSerializer(serializers.ModelSerializer):     # to show creators of a chatroom
    class Meta:
        model = UserProfile
        fields = (
            'first_name',
            'family_name',
        )


class UserProfileChatroomMembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = (
            'first_name',
            'family_name',
            'profile_photo'
        )


class UserProfileMessageCreatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = (
            'first_name',
            'profile_photo'
        )

