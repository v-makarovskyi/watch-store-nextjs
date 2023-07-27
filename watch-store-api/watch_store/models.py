from django.db import models
from django.conf import settings
from django.urls import reverse
from mptt.models import TreeForeignKey, MPTTModel

class Category(MPTTModel):
    class Meta:
        verbose_name = 'категория'
        verbose_name_plural = 'категории'
    
    parent = TreeForeignKey('self', on_delete=models.SET_NULL, blank=True, null=True, related_name='children')
    name = models.CharField('название', max_length=255, help_text='* уникальное название', unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    isActive = models.BooleanField(default=True)

    class MPTTMeta:
        order_insertion_by=['name']
    
    def get_absolute_url(self):
        return reverse('watch_store:category_list', args=[self.slug])

    def str(self):
        return self.name


