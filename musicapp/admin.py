from django.contrib import admin
from .models import Score

class ScoreAdmin(admin.ModelAdmin):
    list_display=('id','title','composer')

# Register your models here.
admin.site.register(Score,ScoreAdmin)