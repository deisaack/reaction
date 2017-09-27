from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^api/questions/$', views.QuestionList.as_view()),
    url(r'^api/questions/(?P<pk>[0-9]+)/$', views.QuestionDetail.as_view()),
    url(r'^api/choices/(?P<pk>[0-9]+)/$', views.ChoiceDetail.as_view()),
]