from django.db import models

class Activity(models.Model):
    name = models.CharField(max_length=200)
    time_logged = models.IntegerField(default=0)

    def __str__(self):
        return self.name
