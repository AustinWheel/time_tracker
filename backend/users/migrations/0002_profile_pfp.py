# Generated by Django 4.2.4 on 2024-01-24 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='pfp',
            field=models.CharField(default='https://i.imgur.com/2tJYhQF.png', max_length=999),
        ),
    ]