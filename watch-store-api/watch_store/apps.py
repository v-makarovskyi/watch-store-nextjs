from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class WatchStoreConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "watch_store"
    verbose_name = _('каталог часов')
