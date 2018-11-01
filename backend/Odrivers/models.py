from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Usuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    cedula = models.IntegerField()
    nombre = models.CharField(max_length = 100)
    apellido = models.CharField(max_length = 100)
    email = models.CharField(max_length = 120)
    rol = models.CharField(max_length = 100)
    telefono = models.IntegerField()
    fecha_nacimiento = models.DateField()
    direccion = models.CharField(max_length = 70)

class HistorialMedico(models.Model):
    condicion = models.TextField()
    alergias = models.CharField(max_length = 140)
    cirugias = models.CharField(max_length = 140)
    rh = models.CharField(max_length = 10)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class Itinerario(models.Model):
    nombre = models.CharField(max_length = 100)
    fecha = models.DateField()
    tipo_cita = models.CharField(max_length = 100)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)


class Eps(models.Model):
    nombre = models.CharField(max_length = 100)
    descripcion = models.CharField(max_length = 100)
    nombre_servicio = models.CharField(max_length = 100)

class PuntoAtencion(models.Model):
    nombre = models.CharField(max_length = 100)
    direccion = models.CharField(max_length = 100)
    horario = models.CharField(max_length = 100)
    eps = models.ForeignKey(Eps, on_delete=models.CASCADE)

class Servicio(models.Model):
    duracion = models.DateTimeField()
    herramientas = models.CharField(max_length = 100)
    hora_fin = models.DateTimeField()
    hora_inicio = models.DateTimeField()
    tipo_servicio = models.CharField(max_length = 100)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    eps = models.ForeignKey(Eps, on_delete=models.CASCADE)


