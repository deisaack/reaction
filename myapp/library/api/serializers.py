from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
    )
from myapp.library.models import Book
from django.contrib.auth import get_user_model
User = get_user_model()

class UserDetailSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
        ]

class BookCreateUpdateSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = [
            'title',
            'price',
            'author',
            'user',
        ]


# book_detail_url = HyperlinkedIdentityField(
#         view_name='book-api:detail',
#         )

class BookListSerializer(ModelSerializer):
    # url = book_detail_url
    user = UserDetailSerializer(read_only=True)
    class Meta:
        model = Book
        fields = [
            # 'url',
            'title',
            'price',
            'author',
            'user',
        ]
