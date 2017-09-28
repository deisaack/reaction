from django.conf.urls import url
from django.contrib import admin

from .views import (
    BookCreateAPIView,
    BookDetailAPIView,
    BookListAPIView,
    DisbursmentListAPIView,
    DisbursmentDetailAPIView,
    )

urlpatterns = [
    url(r'^$', BookListAPIView.as_view(), name='list'),
    url(r'^disbursment/$', DisbursmentListAPIView.as_view(), name='disbursment_list'),
    url(r'^create/$', BookCreateAPIView.as_view(), name='create'),
    url(r'^book/(?P<pk>[\w-]+)/$', BookDetailAPIView.as_view(), name='detail'),
    url(r'^disbursment/(?P<pk>[\w-]+)/$', DisbursmentDetailAPIView.as_view(), name='disbursment_detail'),
    # url(r'^(?P<slug>[\w-]+)/edit/$', BookUpdateAPIView.as_view(), name='update'),
    # url(r'^(?P<slug>[\w-]+)/delete/$', BookDeleteAPIView.as_view(), name='delete'),
]