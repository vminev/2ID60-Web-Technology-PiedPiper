from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import UserProfile

UserModel = get_user_model()


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('username',)


class UserProfileDetailSerializer(serializers.ModelSerializer):
    user = UserDetailSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = (
            'user',
            'first_name',
            'family_name',
            'profile_photo',
            'age',
            'gender',
            'description',
        )


class AdminSerializer(serializers.ModelSerializer):  # to show creators of a chatroom
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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = (
            'first_name',
            'last_name',
            'username',
            'password',
        )
        extra_kwargs = {"password": {"write_only": True}}


class UserProfileCreateSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()

    class Meta:
        model = UserProfile
        fields = (
            'first_name',
            'family_name',
            'profile_photo',
            'username',
            'password',
            'description',
            'gender',
            'age'
        )

    def validate(self, data):
        user_obj = {
            'username': data['username'],
            'password': data['password'],
            'first_name': data['first_name'],
            'last_name': data['family_name']
        }
        serialized_user = UserSerializer(data=user_obj, many=False)

        serialized_user.is_valid(True)

        return data

    def create(self, validated_data):
        username = validated_data['username']
        password = validated_data['password']
        first_name = validated_data['first_name']
        family_name = validated_data['family_name']
        gender = validated_data['gender']
        age = validated_data['age']
        profile_photo = ''
        description = ''

        if 'profile_photo' in validated_data:
            profile_photo = validated_data['profile_photo']
        if 'description' in validated_data:
            description = validated_data['description']

        user_obj = UserModel(username=username, first_name=first_name, last_name=family_name)
        user_obj.set_password(password)
        user_obj.save()

        userprofile = UserProfile(
            first_name=first_name,
            family_name=family_name,
            description=description,
            gender=gender,
            profile_photo=profile_photo,
            age=age,
            user=user_obj
        )

        userprofile.save()

        return validated_data
