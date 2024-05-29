from django.db import models

# Create your models here.


class Entry(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length=30)
    zivotopis = models.FileField()
    motivacni_dopis = models.FileField() 

    def __str__(self):
        return self.name

