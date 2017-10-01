from django.conf.urls import url
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^product/$', views.ProductListAPIView.as_view(), name='product_list'),
    url(r'^product/create/$', views.ProductCreateAPIView.as_view(), name='product_create'),
    url(r'^product/(?P<pk>\d+)/$', views.ProductDetailAPIView.as_view(), name='product_detail'),
    url(r'^member/$', views.MemberListAPIView.as_view(), name='member_list'),
    url(r'^member/(?P<pk>\d+)/$', views.MemberDetailAPIView.as_view(), name='member_detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json'])
