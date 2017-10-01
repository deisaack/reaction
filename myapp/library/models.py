from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
from datetime import datetime
from django.urls import reverse
from django.utils.timezone import now

class Person(models.Model):
    no = models.CharField(null=True, blank=True, max_length=50)
    f_name = models.CharField("First Name", max_length=50)
    m_name = models.CharField("Middle Name", max_length=50, null=True, blank=True)
    l_name = models.CharField("Last Name", max_length=50)
    id_no = models.IntegerField("ID", null=True, blank=True, unique=True)

    def __str__(self):
        return self.f_name + ' ' + self.l_name

    class Meta:
        abstract=True
        ordering= ['l_name', 'f_name']


class Agent(Person):
    def get_absolute_url(self):
        return reverse('lib:agent_detail', kwargs={'pk': self.pk})

    def get_edit_url(self):
        return reverse('lib:agent_update', kwargs={'pk': self.pk})


    def get_delete_url(self):
        return reverse('lib:agent_delete', kwargs={'pk': self.pk})

class Branch(models.Model):
    name = models.CharField(unique=True, max_length=128)
    code = models.CharField(max_length=100, null=True, blank=True)

    class Meta:
        verbose_name = 'Branch'
        verbose_name_plural = 'Branches'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('lib:branch_detail', kwargs={'pk': self.pk})

    def get_edit_url(self):
        return reverse('lib:branch_update', kwargs={'pk': self.pk})

    def get_delete_url(self):
        return reverse('lib:branch_delete', kwargs={'pk': self.pk})


class Employer(models.Model):
    name = models.CharField(max_length=256, unique=True)
    code = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('lib:employer_detail', kwargs={'pk': self.pk})

    def get_edit_url(self):
        return reverse('lib:employer_update', kwargs={'pk': self.pk})

    def get_delete_url(self):
        return reverse('lib:employer_delete', kwargs={'pk': self.pk})

class Member(Person):
    branch = models.ForeignKey('Branch', null=True, blank=True)
    agent = models.ForeignKey('Agent', null=True, blank=True)
    employer = models.ForeignKey('Employer', null=True, blank=True)
    account_no = models.CharField(null=True, blank=True, unique=True, max_length=50)

    def get_absolute_url(self):
        return reverse('lib:member_detail', kwargs={'pk': self.pk})

    def get_edit_url(self):
        return reverse('lib:member_update', kwargs={'pk': self.pk})

    def get_delete_url(self):
        return reverse('lib:member_delete', kwargs={'pk': self.pk})


class Product(models.Model):
    name = models.CharField(max_length=250, unique=True)
    code = models.CharField(max_length=100, null=True, blank=True)
    member = models.ForeignKey(Member, null=True, blank=True)
    disbursement_date = models.DateField(default=now)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('lib:product_detail', kwargs={'pk': self.pk})

    def get_edit_url(self):
        return reverse('lib:product_update', kwargs={'pk': self.pk})

    def get_delete_url(self):
        return reverse('lib:product_delete', kwargs={'pk': self.pk})

