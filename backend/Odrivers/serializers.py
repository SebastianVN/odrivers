from Odrivers.models import *
from django.contrib.auth.models import User
from rest_framework import serializers


class UsuarioSerializer(serializers.ModelSerializer):
    username = serializers.CharField(write_only=True, source="user.username")     
    password = serializers.CharField(write_only=True, source="user.password")     
    nombre = serializers.CharField(required=False)
    cedula = serializers.CharField(required = False)     
    apellido = serializers.CharField(required=False)     
    telefono = serializers.CharField(required=False)
    rol = serializers.CharField(required = False)
    direccion = serializers.CharField(required = False)
    email = serializers.CharField(required = False)    
    fecha_nacimiento = serializers.DateField(required=False)     

    class Meta:
        model = User         
        fields = ('id', 'username', 'password', 'nombre', 'apellido','cedula', 'telefono','email', 'fecha_nacimiento','rol','direccion')
    def create(self, validated_data, instance=None):         
        user_data = validated_data.pop('user')         
        user = User.objects.create(**user_data)         
        user.set_password(user_data['password'])
        user.save()         
        Usuario.objects.update_or_create(user=user, **validated_data)         
        usuario = Usuario.objects.get(user=user) 
        return usuario
class HistorialMedicoSerializer(serializers.ModelSerializer):
    class Meta:
        Model = HistorialMedico
        fields = ('condicion','alergias','cirugias','rh','usuario')

class ItinerarioSerializer(serializers.ModelSerializer):
    class Meta:
        Model = Itinerario
        fields = ('nombre','fecha','tipo_cita','usuario')

class EpsSerializer(serializers.ModelSerializer):
    class Meta:
        Model = Eps
        fields = ('nombre','descripcion','nombre_servicio')

class PuntoAtencionSerializer(serializers.ModelSerializer):
    class Meta:
        Model = PuntoAtencion
        fields = ('nombre','direccion','horario','eps')

class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        Model = Servicio
        fields = ('duracion','herramientas','hora_fin','hora_inicio','tipo_servicio','usuario','eps')

