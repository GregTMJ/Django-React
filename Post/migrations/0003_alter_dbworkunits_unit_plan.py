# Generated by Django 3.2.9 on 2022-04-01 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Post', '0002_alter_dbtempdowntime_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dbworkunits',
            name='unit_plan',
            field=models.IntegerField(blank=True, default=300),
        ),
    ]
