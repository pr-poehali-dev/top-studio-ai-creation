import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (currentScrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
      
      setShowScrollTop(currentScrollY > 500);
      
      if (currentScrollY > 600 && !statsVisible) {
        setStatsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [statsVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStartFree = () => {
    toast({
      title: "Добро пожаловать!",
      description: "Регистрация откроется совсем скоро. Мы уведомим вас!",
    });
  };

  const handleDemo = () => {
    toast({
      title: "Демонстрация",
      description: "Видео-демо загружается...",
    });
  };

  const handleContact = () => {
    toast({
      title: "Свяжитесь с нами",
      description: "Email: hello@topstudio.ai | Telegram: @topstudio",
    });
  };

  const handleSelectPlan = (planName: string) => {
    toast({
      title: `План ${planName}`,
      description: "Переходим к оформлению подписки...",
    });
  };

  const features = [
    {
      icon: "Sparkles",
      title: "Генерация видео",
      description: "Создавайте профессиональные видео из текста за минуты",
      image: "https://cdn.poehali.dev/projects/0f1ce758-6992-4c72-a99a-454fd491534d/files/2d46a136-38e3-4a8b-82d4-db8b9812dfac.jpg"
    },
    {
      icon: "ImagePlus",
      title: "Генерация изображений",
      description: "Превращайте идеи в потрясающие визуалы",
      image: "https://cdn.poehali.dev/projects/0f1ce758-6992-4c72-a99a-454fd491534d/files/0024d11a-0bc6-4c19-a937-d16e8544b75c.jpg"
    },
    {
      icon: "Bot",
      title: "AI-ассистенты",
      description: "Умные помощники для любых задач",
      image: "https://cdn.poehali.dev/projects/0f1ce758-6992-4c72-a99a-454fd491534d/files/1ca513d9-cf53-4aa8-89f3-96e66444d336.jpg"
    }
  ];

  const capabilities = [
    { icon: "Video", title: "Видео за секунды", desc: "От концепции до результата мгновенно" },
    { icon: "Wand2", title: "Магия AI", desc: "Нейросети последнего поколения" },
    { icon: "Zap", title: "Быстро", desc: "Молниеносная обработка" },
    { icon: "Shield", title: "Безопасно", desc: "Защита данных на уровне enterprise" }
  ];

  const plans = [
    {
      name: "Starter",
      priceMonthly: "990 ₽",
      priceYearly: "9 900 ₽",
      period: "мес",
      features: ["100 генераций в месяц", "Базовые AI-модели", "Email поддержка", "HD качество"],
      popular: false
    },
    {
      name: "Pro",
      priceMonthly: "2990 ₽",
      priceYearly: "29 900 ₽",
      period: "мес",
      features: ["500 генераций в месяц", "Все AI-модели", "Приоритетная поддержка", "4K качество", "API доступ"],
      popular: true
    },
    {
      name: "Enterprise",
      priceMonthly: "Индивидуально",
      priceYearly: "Индивидуально",
      period: "",
      features: ["Безлимитные генерации", "Кастомные модели", "Dedicated менеджер", "8K качество", "Full API", "SLA 99.9%"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Анна Смирнова",
      role: "Creative Director, MediaPro",
      avatar: "AS",
      text: "TOP STUDIO перевернул наш подход к контенту. То, на что раньше уходили недели, теперь делается за часы. Качество генерации просто впечатляет!",
      rating: 5
    },
    {
      name: "Михаил Петров",
      role: "CEO, StartupHub",
      avatar: "МП",
      text: "AI-ассистенты освободили команду от рутины. Экономим 30+ часов в неделю. Это не просто инструмент, это настоящий прорыв!",
      rating: 5
    },
    {
      name: "Елена Волкова",
      role: "Marketing Lead, TechCorp",
      avatar: "ЕВ",
      text: "Генерация визуалов стала безумно простой. Клиенты в восторге от скорости и качества. Обязательно рекомендую!",
      rating: 5
    }
  ];

  const partners = [
    "OpenAI", "Google Cloud", "Microsoft Azure", "AWS", "Nvidia", "Meta"
  ];

  const faqs = [
    {
      question: "Как работает генерация через ИИ?",
      answer: "Наши нейросети обучены на миллионах примеров. Вы просто описываете, что хотите получить, а ИИ создаёт контент за секунды. Технология использует передовые модели от OpenAI, Stable Diffusion и собственные разработки."
    },
    {
      question: "Можно ли использовать контент коммерчески?",
      answer: "Да! Все тарифы включают коммерческую лицензию. Вы владеете правами на созданный контент и можете использовать его без ограничений в своих проектах."
    },
    {
      question: "Какие форматы поддерживаются?",
      answer: "Видео: MP4, WebM, MOV до 8K. Изображения: PNG, JPG, WebP, SVG. Ассистенты работают с текстом, документами PDF, таблицами Excel и более 50 форматами файлов."
    },
    {
      question: "Есть ли API для интеграции?",
      answer: "Да! Планы Pro и Enterprise включают полный доступ к REST API. Документация, SDK для Python/JavaScript/TypeScript, webhooks и техническая поддержка интеграции."
    },
    {
      question: "Как быстро генерируется контент?",
      answer: "Изображения: 3-10 секунд. Видео до 30 сек: 1-2 минуты. Видео до 5 минут: 5-15 минут. AI-ассистенты отвечают мгновенно. Скорость зависит от сложности запроса и вашего тарифа."
    },
    {
      question: "Можно ли отменить подписку?",
      answer: "Конечно! Отмена в любой момент без объяснений. Доступ сохраняется до конца оплаченного периода. Возврат средств возможен в течение 14 дней после покупки."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-[60] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" size={28} className="text-primary" />
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TOP STUDIO
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection("capabilities")} className="text-sm font-medium hover:text-primary transition-colors">
                Возможности
              </button>
              <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-primary transition-colors">
                Сервисы
              </button>
              <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>

            <Button className="hidden md:inline-flex" onClick={handleStartFree}>
              Начать бесплатно
            </Button>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 animate-fade-in">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("capabilities")}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Возможности
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Сервисы
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Тарифы
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
              >
                Контакты
              </button>
              <Button className="w-full mt-2" onClick={handleStartFree}>
                Начать бесплатно
              </Button>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm font-medium">Все на ИИ</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
              Создавайте с <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">искусственным интеллектом</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Генерация видео, изображений и умные ассистенты — всё от TOP STUDIO. 
              Превратите идеи в реальность за секунды.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-lg px-8 h-14 group" onClick={handleStartFree}>
                Попробовать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14" onClick={handleDemo}>
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-20 px-6 bg-muted/30 relative">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Возможности платформы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Передовые AI-технологии для креативных профессионалов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in border-2 hover:border-primary/50 cursor-pointer group bg-background/80 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                  <Icon name={capability.icon} size={24} className="text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.desc}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Пользователей</div>
            </div>
            <div className={`text-center transition-all duration-700 delay-100 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Генераций</div>
            </div>
            <div className={`text-center transition-all duration-700 delay-200 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className={`text-center transition-all duration-700 delay-300 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Наши AI-сервисы
            </h2>
            <p className="text-lg text-muted-foreground">
              Три мощных инструмента для вашего творчества
            </p>
          </div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-in`}
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary/10 rounded-full">
                    <Icon name={feature.icon} size={20} className="text-secondary" />
                    <span className="font-medium">{feature.title}</span>
                  </div>
                  
                  <h3 className="font-heading text-3xl md:text-4xl font-bold">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex gap-4 pt-4">
                    <Button onClick={handleStartFree}>
                      Начать работу
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                    <Button variant="ghost" onClick={() => scrollToSection("pricing")}>
                      Узнать больше
                    </Button>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="relative rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Тарифные планы
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Выберите подходящий план для ваших задач
            </p>
            
            <div className="inline-flex items-center gap-3 p-1 bg-muted rounded-full">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  !isYearly ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Месяц
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                  isYearly ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Год
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-0.5 rounded-full">
                  -17%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 relative ${plan.popular ? 'border-2 border-primary shadow-xl scale-105' : ''} hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-heading text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 min-h-[60px]">
                    <span className="text-4xl font-bold transition-all duration-300">
                      {isYearly ? plan.priceYearly : plan.priceMonthly}
                    </span>
                    {plan.period && !plan.priceMonthly.includes("Индивидуально") && (
                      <span className="text-muted-foreground">/ {isYearly ? 'год' : plan.period}</span>
                    )}
                  </div>
                  {isYearly && !plan.priceMonthly.includes("Индивидуально") && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Экономия {parseInt(plan.priceMonthly) * 12 - parseInt(plan.priceYearly.replace(/\s/g, ''))} ₽
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full group-hover:scale-105 transition-transform" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => plan.priceMonthly === "Индивидуально" ? handleContact() : handleSelectPlan(plan.name)}
                >
                  {plan.priceMonthly === "Индивидуально" ? "Связаться" : "Выбрать план"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-lg text-muted-foreground">
              Более 10 000 довольных пользователей по всему миру
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in relative overflow-hidden group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    "{testimonial.text}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              Нам доверяют лидеры индустрии
            </h3>
            <p className="text-muted-foreground">Работаем на базе лучших технологий</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 rounded-lg bg-background/50 backdrop-blur hover:bg-background transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Примеры работ
            </h2>
            <p className="text-lg text-muted-foreground">
              Посмотрите, что создают наши пользователи
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={feature.icon} size={20} className="text-white" />
                      <h3 className="font-heading text-lg font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-white/80">{feature.description}</p>
                    <Button size="sm" className="mt-4" onClick={handleDemo}>
                      <Icon name="Play" size={16} className="mr-2" />
                      Смотреть
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Частые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Всё, что нужно знать о TOP STUDIO
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border-2 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Не нашли ответ на свой вопрос?</p>
            <Button onClick={handleContact} size="lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в поддержку
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border-2">
            <div className="max-w-2xl mx-auto space-y-6">
              <Icon name="Mail" size={48} className="text-primary mx-auto" />
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Готовы начать?
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами для демонстрации возможностей или получения консультации
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8" onClick={handleContact}>
                  <Icon name="Send" size={20} className="mr-2" />
                  Связаться
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={handleContact}>
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в чат
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-8">
                <button onClick={handleContact} className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Mail" size={24} />
                </button>
                <button onClick={handleContact} className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </button>
                <button onClick={handleContact} className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Phone" size={24} />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" size={24} className="text-primary" />
              <span className="font-heading text-xl font-bold">TOP STUDIO</span>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              © 2024 TOP STUDIO. Все возможности на ИИ.
            </p>

            <div className="flex gap-6">
              <button onClick={handleContact} className="text-sm hover:text-primary transition-colors">Условия</button>
              <button onClick={handleContact} className="text-sm hover:text-primary transition-colors">Конфиденциальность</button>
              <button onClick={handleContact} className="text-sm hover:text-primary transition-colors">Поддержка</button>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-primary text-primary-foreground rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-fade-in group"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default Index;