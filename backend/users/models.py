from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    pfp = models.CharField(max_length=999, default="https://i.imgur.com/2tJYhQF.png")
    
    def __str__(self):
        return self.user.username

    