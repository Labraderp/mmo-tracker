# Generated by Django 4.2 on 2023-04-17 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mmo_tracker_app', '0002_alter_app_user_options_alter_app_user_managers_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='app_user',
            name='email',
            field=models.CharField(default='', max_length=50),
        ),
    ]