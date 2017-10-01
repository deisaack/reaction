from myapp.library.models import Product, Member
from .serializers import ProductListSerializer, ProductDetailSerializer
from . import serializers
from rest_framework import generics
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.permissions import (AllowAny, IsAdminUser, IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from django.db.models import Q


class MemberDetailAPIView(generics.RetrieveAPIView):
    queryset = Member.objects.all()
    serializer_class = serializers.MemberDetailSerializer
    permission_classes = [AllowAny]


class MemberListAPIView(generics.ListAPIView):
    serializer_class = serializers.MemberListSerializer
    filter_backends= [SearchFilter, OrderingFilter]
    permission_classes = [AllowAny]
    search_fields = ['f_name', 'id_no']

    def get_queryset(self, *args, **kwargs):
        queryset_list = Member.objects.all()
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                    Q(m_name__icontains=query)|
                    Q(id_no__icontains=query)|
                    Q(f_name__icontains=query) |
                    Q(l_name__icontains=query)
                    ).distinct()
        return queryset_list

class ProductListAPIView(generics.ListAPIView):
    serializer_class = ProductListSerializer
    filter_backends= [SearchFilter, OrderingFilter]
    permission_classes = [AllowAny]
    search_fields = ['name', 'code', 'member__f_name']

    def get_queryset(self, *args, **kwargs):
        queryset_list = Product.objects.all()
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                    Q(name__icontains=query)|
                    Q(code__icontains=query)|
                    Q(member__f_name__icontains=query) |
                    Q(member__l_name__icontains=query)
                    ).distinct()
        return queryset_list


class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    permission_classes = [AllowAny]


class ProductCreateAPIView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductCreateUpdateSerializer
    permission_classes = [AllowAny]

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)
