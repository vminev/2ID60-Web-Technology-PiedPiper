from django.contrib.auth.models import User
from django.db import models
from connection.models import Connection
from membership.models import Membership
from django.conf import settings
from django.core.exceptions import ValidationError

# Create your models here.
class RoomChat(models.Model):
    title = models.CharField(max_length=100)
    admin = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='owned_rooms')

    @property
    def connected_participants(self):
        return Connection.objects.filter(chatroom=self)

    @property
    def subscribed_participants(self):
        return Membership.objects.filter(chatroom=self)

    @property
    def messages(self):
        return Message.objects.filter(chatroom=self)

    def __str__(self):
        return self.title


class Message(models.Model):
    roomchat = models.ForeignKey(RoomChat, models.CASCADE)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(max_length=10000)
    date_posted = models.DateTimeField(auto_now_add=True)
