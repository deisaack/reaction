from django.db import models

class Question(models.Model):
    title = models.CharField(max_length=256)
    choises = models.ForeignKey('Choice', null=True, blank=True)

class Choice(models.Model):
    name = models.CharField(max_length=128)
