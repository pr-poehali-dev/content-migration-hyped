import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'about', 'reviews', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'about', label: 'О нас' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contacts', label: 'Контакты' }
  ];

  const services = [
    {
      title: 'Свадебная фотобудка',
      description: 'Создадим незабываемую атмосферу на вашей свадьбе с элегантной фотобудкой',
      icon: 'Heart',
      features: ['Безлимитная печать', 'Реквизит в подарок', 'Дизайн под стиль свадьбы']
    },
    {
      title: 'Корпоративные мероприятия',
      description: 'Профессиональная фотозона для бизнес-событий и корпоративов',
      icon: 'Briefcase',
      features: ['Брендирование', 'Моментальная печать', 'Онлайн галерея']
    },
    {
      title: 'Детские праздники',
      description: 'Яркая фотобудка с анимацией и весёлым реквизитом для детей',
      icon: 'Cake',
      features: ['Детские шаблоны', 'Безопасный реквизит', 'Игровая зона']
    },
    {
      title: 'Вечеринки и ивенты',
      description: 'Неоновая фотозона с LED-подсветкой для вечеринок и клубных событий',
      icon: 'Sparkles',
      features: ['RGB подсветка', 'Видео бумеранги', 'Instant share']
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/7a0cc956-8689-4795-b20c-ff6f55505654/files/fe5067fe-3549-4d16-a793-9f4d82c9f531.jpg',
      title: 'Свадьба Анны и Дмитрия',
      category: 'Свадьбы'
    },
    {
      image: 'https://cdn.poehali.dev/projects/7a0cc956-8689-4795-b20c-ff6f55505654/files/54e57454-325b-4b2c-93ce-fe72c1b14780.jpg',
      title: 'Корпоратив IT-компании',
      category: 'Корпоративы'
    },
    {
      image: 'https://cdn.poehali.dev/projects/7a0cc956-8689-4795-b20c-ff6f55505654/files/432eb143-e65f-447a-be8d-be21e2e88a64.jpg',
      title: 'День рождения в стиле диско',
      category: 'Вечеринки'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Фотобудка на нашей свадьбе была хитом вечера! Гости в восторге, фотографии получились потрясающие!',
      rating: 5,
      event: 'Свадьба'
    },
    {
      name: 'Сергей Иванов',
      text: 'Заказывали для корпоратива. Все прошло на высшем уровне, команда профессиональная, оборудование современное.',
      rating: 5,
      event: 'Корпоратив'
    },
    {
      name: 'Мария Соколова',
      text: 'День рождения дочки превратился в настоящий праздник благодаря фотобудке! Дети и взрослые были в восторге!',
      rating: 5,
      event: 'День рождения'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary via-accent to-secondary flex items-center justify-center">
                <Icon name="Camera" className="text-background" size={24} />
              </div>
              <span className="text-2xl font-bold gradient-text">INSTABUDKA</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Заказать
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent">
                Заказать
              </Button>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-glow-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 gradient-text">
              ФОТОБУДКА НА ВАШ ПРАЗДНИК
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Яркие эмоции и незабываемые моменты вашего события
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
                onClick={() => scrollToSection('services')}
              >
                Выбрать услугу
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-lg px-8 hover:bg-primary/10"
                onClick={() => scrollToSection('portfolio')}
              >
                Портфолио
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black gradient-text">500+</div>
                <div className="text-sm text-muted-foreground mt-2">Событий</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black gradient-text">10K+</div>
                <div className="text-sm text-muted-foreground mt-2">Фотографий</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black gradient-text">100%</div>
                <div className="text-sm text-muted-foreground mt-2">Восторга</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 gradient-text">
            НАШИ УСЛУГИ
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Подберём идеальную фотобудку для любого мероприятия
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 bg-background border-2 border-border hover:border-primary transition-all hover:card-glow group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 gradient-text">
            ПОРТФОЛИО
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Посмотрите, как мы создаём яркие моменты на мероприятиях
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-sm text-primary mb-2">{item.category}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4 gradient-text">
              О НАС
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Мы делаем события незабываемыми
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">7+ лет опыта</h3>
                    <p className="text-muted-foreground text-sm">
                      Работаем с 2017 года, провели более 500 мероприятий по всей Москве
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Современное оборудование</h3>
                    <p className="text-muted-foreground text-sm">
                      Профессиональные камеры, мгновенная печать, LED-подсветка
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Индивидуальный подход</h3>
                    <p className="text-muted-foreground text-sm">
                      Создаём уникальный дизайн под стиль вашего мероприятия
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Любовь к деталям</h3>
                    <p className="text-muted-foreground text-sm">
                      Продумываем каждую мелочь для создания идеальной атмосферы
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 gradient-text">
            ОТЗЫВЫ
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Что говорят наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-2 border-border hover:border-primary transition-all hover:card-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.event}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 gradient-text">
            КОНТАКТЫ
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Свяжитесь с нами любым удобным способом
          </p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-background border-2 border-border">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <a href="tel:+74951234567" className="font-medium hover:text-primary">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a href="mailto:info@instabudka.ru" className="font-medium hover:text-primary">
                      info@instabudka.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Адрес</div>
                    <div className="font-medium">Москва, ул. Примерная, д. 1</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Режим работы</div>
                    <div className="font-medium">Ежедневно с 10:00 до 22:00</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" size="icon" className="rounded-full border-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-background border-2 border-border">
              <h3 className="text-2xl font-bold mb-6">Быстрая заявка</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Расскажите о вашем мероприятии"
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary via-accent to-secondary flex items-center justify-center">
                <Icon name="Camera" className="text-background" size={16} />
              </div>
              <span className="font-bold gradient-text">INSTABUDKA</span>
            </div>
            <div className="text-sm text-muted-foreground text-center">
              © 2024 Instabudka. Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
