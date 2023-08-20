from django_filters import rest_framework as filters
from .models import Watch

class WatchFilter(filters.FilterSet):
    class Meta:
        model = Watch
        fields = ['watch_type', 'glass', 'wristband']
            
    brand = filters.CharFilter(field_name='brand__title', lookup_expr='iexact')
    
    """ watch_type = filters.CharFilter(field_name='watch_type',)
    glass = filters.CharFilter(field_name='glass')
    wristband = filters.CharFilter(field_name='wristband') """