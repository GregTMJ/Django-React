# Generated by Django 3.2.9 on 2022-04-22 07:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Post', '0002_auto_20220422_1020'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dbshift',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
