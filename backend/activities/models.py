from django.db import models

class Activity(models.Model):
    name = models.CharField(max_length=200)
    time_logged = models.IntegerField(default=0)
    user = models.ForeignKey('users.Profile', on_delete=models.CASCADE, related_name="activities")

    def __str__(self):
        return self.name
