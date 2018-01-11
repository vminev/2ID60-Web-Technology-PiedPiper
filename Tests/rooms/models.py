from django.db import models
from django.conf import settings
from django.contrib.auth.models import User


class Room(models.Model):
    name = models.CharField(max_length=120)
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='own_rooms')
    members = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='rooms')


    class Meta:
        ordering = ['-created', '-updated']

    def __str__(self):
        return self.name