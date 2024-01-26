from django.db import models

class Day(models.Model):
    MONTH_CHOICES = [(i, i) for i in range(12)]
    DAY_CHOICES = [(i, i) for i in range(32)]

    month = models.IntegerField(choices=MONTH_CHOICES)
    day = models.IntegerField(choices=DAY_CHOICES)
    year = models.IntegerField(default=2024)
    activity = models.ForeignKey('Activity', on_delete=models.CASCADE, related_name="days")
    actions = models.IntegerField(default=0)

class Activity(models.Model):
    name = models.CharField(max_length=200)
    time_logged = models.IntegerField(default=0)
    user = models.ForeignKey('users.Profile', on_delete=models.CASCADE, related_name="activities")

    def __str__(self):
        return self.name
