import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Package" size={32} className="text-accent" />
            <span className="text-2xl font-bold">УПА-ПАК</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-accent transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-accent transition-colors">
              Каталог
            </button>
            <button onClick={() => scrollToSection('delivery')} className="text-sm font-medium hover:text-accent transition-colors">
              Доставка
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-accent transition-colors">
              Контакты
            </button>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <main>
        <section id="hero" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Профессиональная упаковка для вашего бизнеса
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Надёжные решения для промышленной упаковки. Широкий ассортимент, быстрая доставка, оптовые цены.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => scrollToSection('catalog')}>
                    <Icon name="Package" size={20} className="mr-2" />
                    Смотреть каталог
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                    <Icon name="Mail" size={20} className="mr-2" />
                    Получить консультацию
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/f4ea0580-9dcf-43d6-9294-382c6114d7bd/files/4a1697e9-9883-4fb5-a0eb-e9216f73d066.jpg" 
                    alt="Склад упаковочных материалов"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <Icon name="Award" size={48} />
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-sm opacity-90">лет на рынке</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Icon name="Package" size={48} />
                <h3 className="text-3xl font-bold">5000+</h3>
                <p className="text-sm opacity-90">видов упаковки</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Icon name="Users" size={48} />
                <h3 className="text-3xl font-bold">2000+</h3>
                <p className="text-sm opacity-90">постоянных клиентов</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Icon name="Truck" size={48} />
                <h3 className="text-3xl font-bold">24ч</h3>
                <p className="text-sm opacity-90">доставка по городу</p>
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Каталог продукции</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный спектр упаковочных решений для любых задач вашего бизнеса
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'Box', title: 'Гофрокартон', desc: 'Коробки и листы любых размеров', items: '500+ позиций' },
                { icon: 'Layers', title: 'Стретч-пленка', desc: 'Ручная и машинная намотка', items: '120+ позиций' },
                { icon: 'Shield', title: 'Пузырчатая пленка', desc: 'Защита хрупких товаров', items: '80+ позиций' },
                { icon: 'Package', title: 'Скотч и лента', desc: 'Клейкие материалы', items: '200+ позиций' },
                { icon: 'Box', title: 'Мешки и пакеты', desc: 'Полиэтилен, бумага, биопакеты', items: '350+ позиций' },
                { icon: 'Ruler', title: 'Уголки и профили', desc: 'Защита углов и кромок', items: '150+ позиций' }
              ].map((category, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon name={category.icon as any} size={24} className="text-accent" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{category.items}</span>
                      <Icon name="ArrowRight" size={20} className="text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Доставка</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Быстрая и надёжная доставка упаковки по всей России
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name="Truck" size={24} className="text-accent" />
                  </div>
                  <CardTitle>По городу</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Доставка за 24 часа</p>
                      <p className="text-sm text-muted-foreground">При заказе до 14:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="DollarSign" size={20} className="text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Бесплатно от 50 000 ₽</p>
                      <p className="text-sm text-muted-foreground">По городу и пригороду</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Зона покрытия 50 км</p>
                      <p className="text-sm text-muted-foreground">От склада</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name="Globe" size={24} className="text-accent" />
                  </div>
                  <CardTitle>По России</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Package" size={20} className="text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Транспортные компании</p>
                      <p className="text-sm text-muted-foreground">СДЭК, Деловые Линии, ПЭК</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Calendar" size={20} className="text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Сроки от 2 дней</p>
                      <p className="text-sm text-muted-foreground">В зависимости от региона</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" size={20} className="text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Страхование груза</p>
                      <p className="text-sm text-muted-foreground">Полная сохранность товара</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Телефон</p>
                        <a href="tel:+79841413946" className="text-lg hover:text-accent transition-colors">
                          +7 (984) 141-39-46
                        </a>
                        <p className="text-sm text-muted-foreground">Пн-Пт 9:00-18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a href="mailto:info@upa-pak.ru" className="text-lg hover:text-accent transition-colors">
                          info@upa-pak.ru
                        </a>
                        <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Адрес</p>
                        <p className="text-lg">г. Владивосток, ул. Снеговая, 19Г</p>
                        <p className="text-sm text-muted-foreground">Склад и офис продаж</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Заявка на консультацию</CardTitle>
                  <CardDescription>Оставьте заявку и мы перезвоним в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); }}>
                    <div>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" required />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Комментарий к заказу" rows={4} />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/79841413946"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
        aria-label="Написать в WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Package" size={28} className="text-accent" />
                <span className="text-xl font-bold">УПА-ПАК</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Надёжные упаковочные решения для вашего бизнеса с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Гофрокартон</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Стретч-пленка</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Пузырчатая пленка</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Скотч</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (800) 123-45-67</li>
                <li>info@upa-pak.ru</li>
                <li>г. Москва, ул. Складская, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 УПА-ПАК. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}