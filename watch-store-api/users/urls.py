from django.urls import path
from .views import MyUserCreate, MyUserUpdate, MyUserDetail, MyUserDelete, MyUserList


app_name = 'users'

urlpatterns = [
   path('', MyUserList.as_view(), name='list_users'),
   path('register/', MyUserCreate.as_view(), name='create_user'),
   path('<int:pk>', MyUserDetail.as_view(), name='user_detail'),
   path('<int:pk>/update', MyUserUpdate.as_view(), name='update_user'),
   path('<int:pk>/delete', MyUserDelete.as_view(), name='delete_user'),
]