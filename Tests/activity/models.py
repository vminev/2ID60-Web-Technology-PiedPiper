from django.db import models
from django.conf import settings

from rooms.models import Room

# Create your models here.
class ActiveUser(models.Model):
    name = models.CharField(max_length=120)
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='own_rooms')
    room = models.ForeignKey(Room, related_name='active_users')


    class Meta:
        ordering = ['-created', '-updated']

    def __str__(self):
        return self.name