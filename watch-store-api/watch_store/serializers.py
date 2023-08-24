from rest_framework import serializers
from django.utils.html import strip_tags

from .models import Watch, WatchImage, Brand, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'parent', 'description', 'description_image', 'brand_image', 'is_active']

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['title', 'slug', 'description', 'description_image', 'brand_image', 'is_active']

class WatchImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchImage
        fields = ['image', 'alt_text', 'isMain']


class WatchSerializer(serializers.ModelSerializer):
    watch_image = WatchImageSerializer(read_only=True, many=True)
    brand = serializers.StringRelatedField()
    country_production = serializers.StringRelatedField()
    glass = serializers.CharField(source='get_glass_display')
    wristband = serializers.CharField(source='get_wristband_display')
    watch_type = serializers.CharField(source='get_watch_type_display')
    slug = serializers.ReadOnlyField()

    class Meta:
        model = Watch
        fields = ['id', 'category', 'title', 'model', 'brand',
                  'country_production', 'watch_type', 'appearance_type',
                  'glass', 'wristband', 'color', 'slug', 'description', 'discount', 'price', 'watch_image',
                  'slug', 'is_active', 'new', 'hit', 'created_at', 'update_at']
    

        
    
    