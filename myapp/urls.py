from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'api/bks/', include('myapp.library.api.urls', namespace='book_api')),
    url(r'^admin/', include(admin.site.urls)),
]
