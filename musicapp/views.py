from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ScoreSerializer
from .models import Score
from django.views import View

# Create your views here.
class ScoreView(viewsets.ModelViewSet):
    serializer_class = ScoreSerializer
    queryset = Score.objects.all()




