# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-28 07:34
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0003_disbursment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='disbursment',
            name='disbursment_date',
            field=models.DateField(blank=True, default=datetime.datetime.now),
        ),
    ]