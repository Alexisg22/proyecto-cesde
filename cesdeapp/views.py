from rest_framework import viewsets
from .models import Departamento, Ciudad, Estado, Aspirante, TipoGestion, Asesor, Gestion
from .serializer import DepartamentoSerializer, CiudadSerializer, EstadoSerializer, AspiranteSerializer, TipoGestionSerializer, AsesorSerializer, GestionSerializer

class DepartamentoViewSet(viewsets.ModelViewSet):
    queryset = Departamento.objects.all()
    serializer_class = DepartamentoSerializer

class CiudadViewSet(viewsets.ModelViewSet):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer

class EstadoViewSet(viewsets.ModelViewSet):
    queryset = Estado.objects.all()
    serializer_class = EstadoSerializer

class AspiranteViewSet(viewsets.ModelViewSet):
    queryset = Aspirante.objects.all()
    serializer_class = AspiranteSerializer

class TipoGestionViewSet(viewsets.ModelViewSet):
    queryset = TipoGestion.objects.all()
    serializer_class = TipoGestionSerializer

class AsesorViewSet(viewsets.ModelViewSet):
    queryset = Asesor.objects.all()
    serializer_class = AsesorSerializer

class GestionViewSet(viewsets.ModelViewSet):
    queryset = Gestion.objects.all()
    serializer_class = GestionSerializer
