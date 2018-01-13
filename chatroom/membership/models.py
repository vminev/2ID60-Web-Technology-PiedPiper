from django.db import models

# Create your models here.
from django.db import models


# Create your models here.
class Membership(models.Model):
    chatroom = models.ForeignKey('roomchat.RoomChat', on_delete=models.CASCADE)
