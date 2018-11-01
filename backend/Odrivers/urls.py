from django.conf.urls import url
from Odrivers import views

urlpatterns = [
    url(r'^usuarios/$', views.UsuarioList.as_view()),
    url(r'^usuarios/(?P<pk>[0-9]+)/$', views.UsuarioDetail.as_view()),

    url(r'^eps/$', views.EpsList.as_view()),
    url(r'^eps/(?P<pk>[0-9]+)/$', views.EpsDetail.as_view()),

    url(r'^historialmedico/$', views.HistorialMedicoList.as_view()),
    url(r'^historialmedico/(?P<pk>[0-9]+)/$', views.HistorialMedicoDetail.as_view()),

    url(r'^servicio/$', views.ServicioList.as_view()),
    url(r'^servicio/(?P<pk>[0-9]+)/$', views.ServicioDetail.as_view()),
]