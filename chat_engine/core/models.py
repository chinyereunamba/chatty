from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()


class Chat(models.Model):
    sender = models.ForeignKey(
        User, related_name="chat_initiator", on_delete=models.CASCADE
    )
    receiver = models.ForeignKey(
        User, related_name="chat_receiver", on_delete=models.CASCADE
    )
    timestamp = models.DateField(auto_now_add=True)


class Message(models.Model):
    sender = models.ForeignKey(User, related_name="sender", on_delete=models.CASCADE)
    text = models.TextField(blank=True)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-timestamp"]
