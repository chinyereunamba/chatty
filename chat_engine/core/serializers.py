from rest_framework import serializers
from .models import Message, Chat
from base.serializers import UserSerializer


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        exclude = ("chat",)


class ChatListSerializer(serializers.ModelSerializer):
    sender = UserSerializer()
    receiver = UserSerializer()
    last_message = serializers.SerializerMethodField()

    class Meta:
        model = Chat
        fields = ["sender", "receiver", "last_message"]

    def get_last_message(self, instance):
        message = instance.message_set.first()
        return MessageSerializer(instance=message)


class ChatSerializer(serializers.ModelSerializer):
    sender = UserSerializer()
    receiver = UserSerializer()
    messages = MessageSerializer(many=True)

    class Meta:
        model = Chat
        fields = ["sender", "receiver", "messages"]
