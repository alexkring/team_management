from django.db import models

class User(models.Model):
	first_name = models.CharField("First name", max_length=255)
	last_name = models.CharField("Last name", max_length=255)
	email = models.EmailField()
	phone_number = models.CharField(max_length=20)
	role = models.CharField(max_length=20)
	created_at = models.DateTimeField("Created At", auto_now_add=True)
	
	def __str__(self):
		return self.first_name