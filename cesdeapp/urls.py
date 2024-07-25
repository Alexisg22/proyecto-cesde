from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DepartamentoViewSet, CiudadViewSet, EstadoViewSet, AspiranteViewSet, TipoGestionViewSet, AsesorViewSet, GestionViewSet

router = DefaultRouter()
router.register(r'departamentos', DepartamentoViewSet)
router.register(r'ciudades', CiudadViewSet)
router.register(r'estados', EstadoViewSet)
router.register(r'aspirantes', AspiranteViewSet)
router.register(r'tipo-gestion', TipoGestionViewSet)
router.register(r'asesores', AsesorViewSet)
router.register(r'gestiones', GestionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
