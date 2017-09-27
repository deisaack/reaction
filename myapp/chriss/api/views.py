from rest_framework import generics

from myapp.chriss.models import Question, Choice
from .serializers import QuestionSerializer, ChoiceSerializer

class QuestionList(generics.ListCreateAPIView):
    # Get / Create questions
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class QuestionDetail(generics.RetrieveDestroyAPIView):
    # Get / Delete questions
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class ChoiceDetail(generics.RetrieveUpdateAPIView):
    # Get / Update a Choice
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer