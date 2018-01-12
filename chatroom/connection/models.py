from django.db import models

# Create your models here.
from userprofile.models import UserProfile
from django.db import models


# Create your models here.
class Connection(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    chatroom = models.ForeignKey('roomchat.RoomChat', on_delete=models.CASCADE)
