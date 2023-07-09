# Generated by Django 4.2.2 on 2023-07-09 00:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('musicapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='score',
            name='instrument',
            field=models.CharField(default='Piano', max_length=120),
        ),
        migrations.AddField(
            model_name='score',
            name='musickey',
            field=models.CharField(default='CM / Am', max_length=120),
        ),
        migrations.AddField(
            model_name='score',
            name='time_signature',
            field=models.CharField(default='4/4', max_length=120),
        ),
    ]