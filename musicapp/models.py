from django.db import models

# Create your models here.
# Score model
class Score(models.Model):
    #primary key, id
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=120)
    composer = models.CharField(max_length=120)

    def __str__(self):
        return str(self.id)