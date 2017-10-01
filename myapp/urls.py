from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView

class MyView(TemplateView):
    template_name = 'index.html'

urlpatterns = [
    url(r'api/lib/', include('myapp.library.api.urls', namespace='lib_api')),
    url(r'lib/', include('myapp.library.urls', namespace='lib')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^app/$', csrf_exempt(MyView.as_view())),
]
