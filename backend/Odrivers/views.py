from django.shortcuts import render
from rest_framework.decorators import permission_classes
from Odrivers.models import *

from Odrivers.serializers import *
from Odrivers.permissions import IsPostOrIsAuthenticated
from rest_framework import generics

# Create your views here.

@permission_classes((IsPostOrIsAuthenticated, ))
class UsuarioList(generics.ListCreateAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class HistorialMedicoList(generics.ListCreateAPIView):
    serializer_class = HistorialMedicoSerializer
    queryset = HistorialMedico.objects.all()

class HistorialMedicoDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = HistorialMedico
    queryset = HistorialMedico.objects.all()

class ItinerarioList(generics.ListCreateAPIView):
    serializer_class = Itinerario
    queryset = Itinerario.objects.all()

class ItinerarioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class =Itinerario
    queryset = Itinerario.objects.all()

class EpsList(generics.ListCreateAPIView):
    serializer_class = Eps
    queryset = Eps.objects.all()

class EpsDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = Eps
    queryset = Eps.objects.all()

class PuntoAtencionList(generics.ListCreateAPIView):
    serializer_class = PuntoAtencion
    queryset = PuntoAtencion.objects.all()

class PuntoAtencionDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PuntoAtencion
    queryset = PuntoAtencion.objects.all()

class ServicioList(generics.ListCreateAPIView):
    serializer_class = Servicio
    queryset = Servicio.objects.all()

class ServicioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = Servicio
    queryset = Servicio.objects.all()
