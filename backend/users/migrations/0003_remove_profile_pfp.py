# Generated by Django 4.2.4 on 2024-01-26 04:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_profile_pfp'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='pfp',
        ),
    ]
