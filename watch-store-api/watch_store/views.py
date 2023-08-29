from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, permissions, authentication
from rest_framework.generics import GenericAPIView
from .models import Watch, Category, Brand
from .serializers import WatchSerializer, CategorySerializer, BrandSerializer
from .filters import WatchFilter
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

from django.shortcuts import render, get_object_or_404


class WatchListView(generics.ListAPIView):
    queryset = Watch.objects.filter(
        is_active=True).prefetch_related('watch_image')
    serializer_class = WatchSerializer
    filterset_class = WatchFilter
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['^model', '^watch_type', '^glass',
                     '^title', '^appearance_type', '^wristband', '^brand__title']


class WatchView(generics.RetrieveAPIView):
    lookup_field = 'slug'
    queryset = Watch.objects.filter(is_active=True)
    serializer_class = WatchSerializer


class Categories(GenericAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.filter(is_active=True)

    def get(self, request, *args, **kwargs):
        root_nodes = self.get_queryset().get_cached_trees()
        data = [self.recursive_node_to_dict(n) for n in root_nodes]
        return Response(data)

    def recursive_node_to_dict(self, node):
        result = self.get_serializer(instance=node).data
        children = [self.recursive_node_to_dict(
            c) for c in node.get_children()]
        if children:
            result['children'] = children
        return result


class CategorySingle(generics.RetrieveAPIView):
    lookup_field = 'slug'
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer


class CategoryItemProductsListView(generics.ListAPIView):
    serializer_class = WatchSerializer
    filterset_class = WatchFilter

    def get_queryset(self):
        self.category = get_object_or_404(Category, slug=self.kwargs['slug'])
        return Watch.objects.filter(category=self.category)


class BrandsAllView(generics.ListAPIView):
    serializer_class = BrandSerializer
    queryset = Brand.objects.filter(is_active=True)


class BrandSingleView(generics.RetrieveAPIView):
    lookup_field = 'slug'
    queryset = Brand.objects.filter(is_active=True)
    serializer_class = BrandSerializer


class BrandItemProductListView(generics.ListAPIView):
    serializer_class = WatchSerializer
    filterset_class = WatchFilter

    def get_queryset(self):
        self.brand = get_object_or_404(Brand, slug=self.kwargs['slug'])
        return Watch.objects.filter(brand=self.brand)
