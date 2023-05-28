#serializers to convert to convert model instances to JSON
from rest_framework import serializers
from .models import Score

#define API representation
class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = ('id','title','composer')