from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from mptt.models import MPTTModel, TreeForeignKey
from ckeditor_uploader.fields import RichTextUploadingField


class Category(MPTTModel):
    class Meta:
        verbose_name = _('категория')
        verbose_name_plural = _('категории')

    name = models.CharField('название', max_length=100, unique=True,
                            help_text='* обязательно уникальное название')
    slug = models.SlugField(max_length=150, unique=True)
    description = RichTextUploadingField(
        _('описание'), null=True, blank=True, help_text='описание категории')
    description_image = models.ImageField(
        _('изображение бренда для описания'), null=True, blank=True, help_text='* изображение, которое используется в описании категории', upload_to='images/desc_img')
    brand_image = models.ImageField(_('логотип бренда'), null=True, blank=True,
                                    help_text='* изображение логотипа бренда', upload_to='images/brand_img')
    parent = TreeForeignKey('self', on_delete=models.SET_NULL,
                            null=True, blank=True, related_name='children')
    is_active = models.BooleanField(default=True)

    class MPTTMeta:
        order_insertion_by = ['name']

    def get_absolute_url(self):
        return reverse('watch_store:category_list', args=[self.slug])

    def __str__(self):
        return self.name


class Brand(models.Model):
    class Meta:
        verbose_name = _('бренд')
        verbose_name_plural = _('бренды')

    title = models.CharField('название', max_length=50)
    slug = models.SlugField(max_length=150, default='')
    description = RichTextUploadingField(
        _('описание'), null=True, blank=True, help_text='описание категории')
    description_image = models.ImageField(
        _('изображение бренда для описания'), null=True, blank=True, help_text='* изображение, которое используется в описании категории', upload_to='images/desc_img')
    brand_image = models.ImageField(_('логотип бренда'), null=True, blank=True,
                                    help_text='* изображение логотипа бренда', upload_to='images/brand_img')
    is_active = models.BooleanField(default=True)
    

    def __str__(self) -> str:
        return self.title


class Country_Production(models.Model):
    class Meta:
        verbose_name = _('страна производства')

    country = models.CharField(
        _('страна производства'), max_length=100, help_text='* страна производства часов')
    slug = models.SlugField(max_length=50, default='')

    def __str__(self) -> str:
        return self.country


class Watch(models.Model):

    WATCH_TYPE = [
        ('мужские', 'мужские'),
        ('женские', 'женские'),
        ('интерьерные', 'интерьерные'),
    ]

    GLASS_TYPE = [
        ('сапфировое', 'сапфировое'),
        ('минеральное', 'минеральное'),
    ]

    WRISTBAND_TYPE = [
        ('сталь', 'нержавеющая сталь'),
        ('кожаный', 'кожаный'),
        ('каучуковый', 'каучуковый'),
    ]

    APPEARANCE_TYPE = [
        ('классические', 'классические'),
        ('спортивные', 'спортивные'),
        ('fashion', 'fashion'),
    ]

    COLOR_TYPE = [
      ("black", "Черный",),
      ("yellow","Желтый",),
      ("green", "Зеленый",),
      ("blue", "Синий",),
      ("red", "Красный",),
      ("pink", "Розовый",),
      ("lightgrey", "Светлосерый",),
      ("darkgrey", "Темносерый",),
      ("turquoise", "Бирюзовый",),
      ("violet", "Фиолетовый",),
      ("lightblue", "Голубой", ),
    ]

    class Meta:
        verbose_name = _('часы')
        verbose_name_plural = _('каталог часов')
        ordering = ['-created_at']

    category = models.ForeignKey(Category, verbose_name=_(
        'категория'), on_delete=models.RESTRICT)
    title = models.CharField(
        _('название'), max_length=100, help_text='* название модели часов')
    brand = models.ForeignKey(Brand, verbose_name=_(
        'бренд'), on_delete=models.RESTRICT)
    model = models.CharField(_('модель'), max_length=100,
                             help_text='* модель часов')
    country_production = models.ForeignKey(Country_Production, verbose_name=_(
        'страна производства'), on_delete=models.RESTRICT)
    watch_type = models.CharField(_('тип часов'), max_length=40,
                                  help_text='* мужские/женские/интерьерные', choices=WATCH_TYPE)
    appearance_type = models.CharField(_('внешний вид'), max_length=40,
                                       help_text='* спортивные/классические/fashion', choices=APPEARANCE_TYPE)
    glass = models.CharField(
        _('тип стекла'), max_length=40, help_text='* тип стекла', choices=GLASS_TYPE)
    wristband = models.CharField(
        _('браслет'), max_length=100, help_text='* тип браслета', choices=WRISTBAND_TYPE)
    color = models.CharField(_('Цвет'), max_length=40, help_text='* цвет изделия', choices=COLOR_TYPE, null=True)
    description = RichTextUploadingField(
        'описание', help_text='необязательно', blank=True)
    slug = models.SlugField(max_length=255)
    price = models.IntegerField()
    discount = models.IntegerField()
    is_active = models.BooleanField(
        'доступность продукта', help_text='выберите доступность продукта', default=True)
    new = models.BooleanField(default=False)
    hit = models.BooleanField(default=False)
    created_at = models.DateTimeField(
        'создан', auto_now_add=True, editable=False)
    update_at = models.DateTimeField('обновлен', auto_now=True)

    def get_absolute_url(self):
        return reverse('watch_store:watch_detail', args=[self.slug])

    def __str__(self):
        return f'{self.title} - {self.model}'


class WatchImage(models.Model):
    watch = models.ForeignKey(
        Watch, on_delete=models.CASCADE, related_name='watch_image')
    title = models.CharField(
        'название', help_text='введите название', max_length=100)
    image = models.ImageField(
        'изображение', help_text='добавьте изображение товара', upload_to='images/')
    alt_text = models.CharField('альтернативный текст', max_length=150,
                                help_text='введите альтернативный текст', null=True, blank=True)
    isMain = models.BooleanField(default=False, help_text='* сделать главным')
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    update_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'изображения товара'

    def __str__(self) -> str:
        return self.title
