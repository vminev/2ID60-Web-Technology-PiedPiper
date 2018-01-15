from django.contrib.auth.models import User
from django.db import models
from userprofile.models import UserProfile


class Connection(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    chatroom = models.ForeignKey('roomchat.RoomChat', on_delete=models.CASCADE)
