from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import MyUser
from rest_framework import serializers

class MyUserSerializer(serializers.ModelSerializer):
    watchs = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = MyUser
        fields = ['username', 'lastName', 'email', 'password', 'is_active', 'is_staff', 'start_date', 'watchs']
        extra_kwargs = { 'password': {'write_only': True}, }
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            instance.save()
            return instance
    
    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.lastName = validated_data.get('lastName', instance.lastName)
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance
    
 




class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        token['username'] = user.username

        return token
    