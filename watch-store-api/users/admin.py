from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import MyUser

class MyUserAdminManager(UserAdmin):
    model = MyUser
    
    list_display = ('id', 'username', 'lastName', 'email', 'is_active', 'is_staff')
    ordering = ("id",)
    fieldsets = (
        (None, {'fields' : ('email', 'username', 'lastName', 'password', 'start_date')}),
        ('Разрешения', {'fields': ('is_staff', 'is_active',)}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'lastName', 'email',  'password1', 'password2', 'is_active', 'is_staff')
        }),
    )


admin.site.register(MyUser, MyUserAdminManager)
