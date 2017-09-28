from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
import datetime

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


class Disbursment(models.Model):
    member_no = models.CharField(max_length=25)
    account_ref_no = models.CharField(max_length=50)
    disbursment_date = models.DateField(default=datetime.datetime.now, blank=True)
    branch = models.CharField(max_length=256, null=True, blank=True)
    agent_name = models.CharField(max_length=256, null=True, blank=True)
    member_name = models.CharField(max_length=256, null=True, blank=True)
    employer_no = models.CharField(max_length=500, null=True, blank=True)
    employer_name = models.CharField(max_length=500, null=True, blank=True)
    member_id_no = models.CharField(max_length=500, null=True, blank=True)
    product_type = models.CharField(max_length=500, null=True, blank=True)
    principal_amount = models.CharField(max_length=500, null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.member_name


