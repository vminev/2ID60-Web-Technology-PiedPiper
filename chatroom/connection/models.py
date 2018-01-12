from django.db import models

# Create your models here.
from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Connection(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    chatroom = models.ForeignKey('roomchat.RoomChat', on_delete=models.CASCADE)
