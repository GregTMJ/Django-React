# Generated by Django 3.2.9 on 2022-04-04 09:21

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Post', '0005_alter_dbshift_time_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dbshift',
            name='time_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
