from django.db.models import Q


from rest_framework.filters import (
        SearchFilter,
        OrderingFilter,
    )
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView
    )



from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,

    )

from myapp.library.models import Book, Disbursment

from .serializers import (
    BookCreateUpdateSerializer,
    BookListSerializer,
    DisbursmentListSerializer,
    )


class BookCreateAPIView(CreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookCreateUpdateSerializer
    #permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class BookDetailAPIView(RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookListSerializer
    permission_classes = [AllowAny]
    #lookup_url_kwarg = "abc"

class BookListAPIView(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookListSerializer
    permission_classes = [AllowAny]

class DisbursmentListAPIView(ListAPIView):
    queryset = Disbursment.objects.all()
    serializer_class = DisbursmentListSerializer
    permission_classes = [AllowAny]

class DisbursmentDetailAPIView(RetrieveAPIView):
    queryset = Disbursment.objects.all()
    serializer_class = DisbursmentListSerializer
    permission_classes = [AllowAny]

