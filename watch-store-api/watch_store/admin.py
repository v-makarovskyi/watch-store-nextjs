from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from .models import *

@admin.register(Category)
class CategoryAdmin(MPTTModelAdmin):
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    pass

@admin.register(Country_Production)
class CountryProductionAdmin(admin.ModelAdmin):
    pass

class WatchImageInline(admin.TabularInline):
    model = WatchImage

@admin.register(Watch)
class WatchAdmin(admin.ModelAdmin):
    inlines = [WatchImageInline]
    list_display = ('id', 'title', 'model', 'country_production', 'watch_type', 'appearance_type', 'price', 'hit', 'new')
    prepopulated_fields = {'slug': ('title', 'model')}
    ordering = ('-created_at',)

