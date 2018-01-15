from userprofile.models import UserProfile
from django.db import models


class Membership(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, blank=True)
    chatroom = models.ForeignKey('roomchat.RoomChat', on_delete=models.CASCADE)
