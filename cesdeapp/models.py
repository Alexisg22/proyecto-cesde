from django.db import models

# Create your models here.
class Departamento(models.Model): 
    nombre = models.CharField(max_length=35)

class Ciudad(models.Model):
    nombre = models.CharField(max_length=35)
    departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE)


class Estados(models.Model):
    nombre = models.CharField(max_length=15)

class Aspirantes(models.Model):
    celular = models.CharField(max_length=15, primary_key=True)
    nombre = models.CharField(max_length=40)
    apellidos = models.CharField(max_length=40)
    documento = models.CharField(max_length=15)
    correo = models.CharField(max_length=50)
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)
    cel_opcional = models.CharField(max_length=15, null=True)
    teefono = models.CharField(max_length=15, null=True)
    estado = models.ForeignKey(Estados, on_delete=models.CASCADE)

class Tipo_gestion(models.Model): 
    nombre = models.CharField(max_length=12)

class Asesores(models.Model): 
    documento = models.CharField(max_length=15, primary_key=True)

class Gestiones(models.Model): 
    cel_aspirante = models.ForeignKey(Aspirantes, on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    tipo_gestion = models.ForeignKey(Tipo_gestion, on_delete=models.CASCADE)
    observaciones = models.TextField(max_length=300, null=True)
    asesor = models.ForeignKey(Asesores, on_delete=models.CASCADE)



