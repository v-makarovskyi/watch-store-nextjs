# Generated by Django 4.2.3 on 2023-07-28 14:00

from django.db import migrations, models
import django.db.models.deletion
import mptt.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Brand",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(
                        max_length=50, unique=True, verbose_name="название"
                    ),
                ),
            ],
            options={
                "verbose_name": "бренд",
                "verbose_name_plural": "бренды",
            },
        ),
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        help_text="* обязательно уникальное название",
                        max_length=100,
                        unique=True,
                        verbose_name="название",
                    ),
                ),
                ("slug", models.SlugField(max_length=150, unique=True)),
                ("is_active", models.BooleanField(default=True)),
                ("lft", models.PositiveIntegerField(editable=False)),
                ("rght", models.PositiveIntegerField(editable=False)),
                ("tree_id", models.PositiveIntegerField(db_index=True, editable=False)),
                ("level", models.PositiveIntegerField(editable=False)),
                (
                    "parent",
                    mptt.fields.TreeForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="children",
                        to="watch_store.category",
                    ),
                ),
            ],
            options={
                "verbose_name": "категория",
                "verbose_name_plural": "категории",
            },
        ),
        migrations.CreateModel(
            name="Country_Production",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "country",
                    models.CharField(
                        help_text="* страна производства часов",
                        max_length=100,
                        verbose_name="страна производства",
                    ),
                ),
            ],
            options={
                "verbose_name": "страна производства",
            },
        ),
        migrations.CreateModel(
            name="Watch",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(
                        help_text="* название модели часов",
                        max_length=100,
                        verbose_name="название",
                    ),
                ),
                (
                    "model",
                    models.CharField(
                        help_text="* модель часов",
                        max_length=100,
                        verbose_name="модель",
                    ),
                ),
                (
                    "watch_type",
                    models.CharField(
                        choices=[
                            ("m", "мужские"),
                            ("w", "женские"),
                            ("i", "интерьерные"),
                        ],
                        help_text="* мужские/женские/интерьерные",
                        max_length=40,
                        verbose_name="тип часов",
                    ),
                ),
                (
                    "appearance_type",
                    models.CharField(
                        choices=[
                            ("classic", "классические"),
                            ("sport", "спортивные"),
                            ("fash", "fashion"),
                        ],
                        help_text="* спортивные/классические/fashion",
                        max_length=40,
                        verbose_name="внешний вид",
                    ),
                ),
                (
                    "glass",
                    models.CharField(
                        choices=[("sapf", "сапфировое"), ("min", "минеральное")],
                        help_text="* тип стекла",
                        max_length=40,
                        verbose_name="тип стекла",
                    ),
                ),
                (
                    "wristband",
                    models.CharField(
                        choices=[
                            ("steel", "нержавеющая сталь"),
                            ("leather", "кожаный"),
                            ("rubber", "каучуковый"),
                        ],
                        help_text="* тип браслета",
                        max_length=100,
                        verbose_name="браслет",
                    ),
                ),
                (
                    "description",
                    models.TextField(
                        blank=True, help_text="необязательно", verbose_name="описание"
                    ),
                ),
                ("slug", models.SlugField(max_length=255)),
                ("price", models.IntegerField()),
                ("discount", models.IntegerField()),
                (
                    "is_active",
                    models.BooleanField(
                        default=True,
                        help_text="выберите доступность продукта",
                        verbose_name="доступность продукта",
                    ),
                ),
                ("new", models.BooleanField(default=False)),
                ("hit", models.BooleanField(default=False)),
                (
                    "created_at",
                    models.DateTimeField(auto_now_add=True, verbose_name="создан"),
                ),
                (
                    "update_at",
                    models.DateTimeField(auto_now=True, verbose_name="обновлен"),
                ),
                (
                    "brand",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.RESTRICT,
                        to="watch_store.brand",
                        verbose_name="бренд",
                    ),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.RESTRICT,
                        to="watch_store.category",
                        verbose_name="категория",
                    ),
                ),
                (
                    "country_production",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.RESTRICT,
                        to="watch_store.country_production",
                        verbose_name="страна производства",
                    ),
                ),
            ],
            options={
                "verbose_name": "часы",
                "verbose_name_plural": "каталог часов",
                "ordering": ["-created_at"],
            },
        ),
        migrations.CreateModel(
            name="WatchImage",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(
                        help_text="введите название",
                        max_length=100,
                        verbose_name="название",
                    ),
                ),
                (
                    "image",
                    models.ImageField(
                        help_text="добавьте изображение товара",
                        upload_to="images/",
                        verbose_name="изображение",
                    ),
                ),
                (
                    "alt_text",
                    models.CharField(
                        blank=True,
                        help_text="введите альтернативный текст",
                        max_length=150,
                        null=True,
                        verbose_name="альтернативный текст",
                    ),
                ),
                (
                    "isMain",
                    models.BooleanField(default=False, help_text="* сделать главным"),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("update_at", models.DateTimeField(auto_now=True)),
                (
                    "watch",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="watch_image",
                        to="watch_store.watch",
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "изображения товара",
            },
        ),
    ]
