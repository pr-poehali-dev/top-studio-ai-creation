import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
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
      price: "990 ₽",
      period: "мес",
      features: ["100 генераций в месяц", "Базовые AI-модели", "Email поддержка", "HD качество"],
      popular: false
    },
    {
      name: "Pro",
      price: "2990 ₽",
      period: "мес",
      features: ["500 генераций в месяц", "Все AI-модели", "Приоритетная поддержка", "4K качество", "API доступ"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Индивидуально",
      period: "",
      features: ["Безлимитные генерации", "Кастомные модели", "Dedicated менеджер", "8K качество", "Full API", "SLA 99.9%"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
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

            <Button className="hidden md:inline-flex">
              Начать бесплатно
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm font-medium">Все на ИИ</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
              Создавайте с <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">искусственным интеллектом</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Генерация видео, изображений и умные ассистенты — всё от TOP STUDIO. 
              Превратите идеи в реальность за секунды.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-lg px-8 h-14 group">
                Попробовать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
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
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={capability.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.desc}</p>
              </Card>
            ))}
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
                    <Button>
                      Начать работу
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                    <Button variant="ghost">
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
            <p className="text-lg text-muted-foreground">
              Выберите подходящий план для ваших задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 relative ${plan.popular ? 'border-2 border-primary shadow-xl scale-105' : ''} hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">/ {plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.price === "Индивидуально" ? "Связаться" : "Выбрать план"}
                </Button>
              </Card>
            ))}
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
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Send" size={20} className="mr-2" />
                  Связаться
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в чат
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-8">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Mail" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Phone" size={24} />
                </a>
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
              <a href="#" className="text-sm hover:text-primary transition-colors">Условия</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Конфиденциальность</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Поддержка</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
