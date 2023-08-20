from django.urls import path

from . import views

app_name = 'watch_store'

urlpatterns = [

    path('watchs/', views.WatchListView.as_view(), name='allwatchs'),
    path('watchs/<slug:slug>', views.WatchView.as_view(), name='watch_detail'),

    path('categories/', views.Categories.as_view(), name='categories'),
    path('categories/<slug:slug>', views.CategoryItemProductsListView.as_view(),
         name='categories_watchs_items'),
    path('category_single/<slug:slug>',
         views.CategorySingle.as_view(), name='category_single'),
         
    path('brands/',
         views.BrandsAllView.as_view(), name='brands_all'),
    path('brand_single/<slug:slug>',
         views.BrandSingleView.as_view(), name='brand_single'),
    path('brand/<slug:slug>',
         views.BrandItemProductListView.as_view(), name='brand_watch_item'),
]
