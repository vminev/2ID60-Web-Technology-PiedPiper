from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    family_name = models.CharField(max_length=50)
    description = models.CharField(max_length=200, default='No description.')
    profile_photo = models.URLField(default='https://www.turkishsocks.com/wp-content/uploads/2017/10/eleman2.png')
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    age = models.PositiveIntegerField()


    #users can have their online status shown

    def __str__(self):
        return self.first_name + self.family_name
