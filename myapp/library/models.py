from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

class Author(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=128)
    price = models.PositiveIntegerField(default=0)
    author = models.ForeignKey(Author)
    user = models.ForeignKey(User, null=True, blank=True)

    def __str__(self):
        return self.title
