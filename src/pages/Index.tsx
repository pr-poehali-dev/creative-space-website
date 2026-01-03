import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    {
      id: 1,
      title: "Современное искусство: новые голоса",
      date: "15 января 2026",
      time: "19:00 - 21:00",
      category: "Выставка",
      price: 500,
      image: "https://cdn.poehali.dev/projects/1c69c32a-4eac-46b1-802b-40af390cf4f3/files/6a72b074-d642-4531-9c0d-15801a595292.jpg",
      description: "Познакомьтесь с работами молодых современных художников. Выставка охватывает различные жанры от абстракционизма до фотореализма.",
      spots: 25
    },
    {
      id: 2,
      title: "Мастер-класс по акварели",
      date: "18 января 2026",
      time: "14:00 - 17:00",
      category: "Мастер-класс",
      price: 1200,
      image: "https://cdn.poehali.dev/projects/1c69c32a-4eac-46b1-802b-40af390cf4f3/files/1a712484-9b7d-46f8-8733-760ce392e4fe.jpg",
      description: "Трехчасовой мастер-класс для начинающих и продолжающих. Все материалы включены. Узнайте секреты работы с акварелью от профессионального художника.",
      spots: 12
    },
    {
      id: 3,
      title: "Театральная постановка: Метаморфозы",
      date: "22 января 2026",
      time: "20:00 - 22:30",
      category: "Спектакль",
      price: 800,
      image: "https://cdn.poehali.dev/projects/1c69c32a-4eac-46b1-802b-40af390cf4f3/files/4087946f-5bf2-480f-a5ed-7998c34b121c.jpg",
      description: "Экспериментальная театральная постановка, исследующая темы трансформации и самоидентификации через движение и звук.",
      spots: 40
    },
    {
      id: 4,
      title: "Открытая студия: лепка из глины",
      date: "25 января 2026",
      time: "11:00 - 13:00",
      category: "Мастер-класс",
      price: 900,
      image: "https://cdn.poehali.dev/projects/1c69c32a-4eac-46b1-802b-40af390cf4f3/files/1a712484-9b7d-46f8-8733-760ce392e4fe.jpg",
      description: "Познакомьтесь с керамикой и создайте свое первое изделие. Подходит для всех возрастов. Обжиг включен в стоимость.",
      spots: 10
    },
    {
      id: 5,
      title: "Вечер экспериментальной музыки",
      date: "28 января 2026",
      time: "19:30 - 22:00",
      category: "Концерт",
      price: 600,
      image: "https://cdn.poehali.dev/projects/1c69c32a-4eac-46b1-802b-40af390cf4f3/files/4087946f-5bf2-480f-a5ed-7998c34b121c.jpg",
      description: "Вечер импровизации с использованием синтезаторов, традиционных инструментов и полевых записей. Лайв-выступление трех коллективов.",
      spots: 50
    }
  ];

  const schedule = [
    {
      day: "Понедельник",
      classes: [
        { time: "10:00 - 12:00", name: "Йога для творческих", instructor: "Мария Светлова" },
        { time: "14:00 - 16:00", name: "Рисунок углем", instructor: "Петр Краснов" },
        { time: "18:00 - 20:00", name: "Современный танец", instructor: "Анна Белова" }
      ]
    },
    {
      day: "Вторник",
      classes: [
        { time: "11:00 - 13:00", name: "Керамика для начинающих", instructor: "Ольга Гончарова" },
        { time: "15:00 - 17:00", name: "Акварельная живопись", instructor: "Иван Водянов" },
        { time: "19:00 - 21:00", name: "Театральная импровизация", instructor: "Дмитрий Сценов" }
      ]
    },
    {
      day: "Среда",
      classes: [
        { time: "10:00 - 12:00", name: "Масляная живопись", instructor: "Петр Краснов" },
        { time: "14:00 - 16:00", name: "Скульптура", instructor: "Ольга Гончарова" },
        { time: "18:00 - 20:00", name: "Вокал и актерское мастерство", instructor: "Елена Голосова" }
      ]
    },
    {
      day: "Четверг",
      classes: [
        { time: "11:00 - 13:00", name: "Графика и иллюстрация", instructor: "Иван Водянов" },
        { time: "15:00 - 17:00", name: "Движение и перформанс", instructor: "Анна Белова" },
        { time: "19:00 - 21:00", name: "Фотография", instructor: "Сергей Кадров" }
      ]
    },
    {
      day: "Пятница",
      classes: [
        { time: "10:00 - 12:00", name: "Йога для творческих", instructor: "Мария Светлова" },
        { time: "14:00 - 16:00", name: "Свободная студия", instructor: "Все преподаватели" },
        { time: "18:00 - 22:00", name: "Открытый микрофон", instructor: "-" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Palette" className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Арт-Пространство</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#events" className="text-sm font-medium transition-colors hover:text-primary">
              События
            </a>
            <a href="#tickets" className="text-sm font-medium transition-colors hover:text-primary">
              Билеты
            </a>
            <a href="#schedule" className="text-sm font-medium transition-colors hover:text-primary">
              Расписание
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              О нас
            </a>
            <a href="#contacts" className="text-sm font-medium transition-colors hover:text-primary">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/1c69c32a-4eac-46b1-802b-40af390cf4f3/files/6a72b074-d642-4531-9c0d-15801a595292.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Место для творчества
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Открывайте новые горизонты искусства в нашем пространстве
          </p>
          <Button size="lg" className="animate-fade-in">
            <a href="#tickets">Купить билет</a>
          </Button>
        </div>
      </section>

      <section id="events" className="py-20 container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Предстоящие события</h2>
          <p className="text-muted-foreground text-lg">
            Погрузитесь в мир искусства вместе с нами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event) => (
            <Card key={event.id} className="overflow-hidden hover-scale transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-primary">
                  {event.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <Icon name="Calendar" size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Icon name="Clock" size={16} />
                    <span>{event.time}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">{event.price} ₽</span>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button onClick={() => setSelectedEvent(event.id)}>Подробнее</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{event.title}</DialogTitle>
                      <DialogDescription>
                        <Badge className="mt-2">{event.category}</Badge>
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" className="text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" className="text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Users" className="text-primary" />
                          <span>Мест: {event.spots}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Ticket" className="text-primary" />
                          <span className="font-bold text-lg">{event.price} ₽</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                      <Button className="w-full" size="lg">
                        Купить билет
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="tickets" className="py-20 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Билеты на мероприятия</h2>
            <p className="text-muted-foreground text-lg">
              Все предстоящие события в одном месте
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="exhibitions">Выставки</TabsTrigger>
              <TabsTrigger value="workshops">Мастер-классы</TabsTrigger>
              <TabsTrigger value="shows">Спектакли</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="flex flex-col md:flex-row overflow-hidden hover-scale">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full md:w-48 h-48 object-cover"
                    />
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-xl">{event.title}</h3>
                        <Badge>{event.category}</Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={14} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={14} />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-bold text-primary">{event.price} ₽</span>
                        <Button>Купить</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="exhibitions" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.filter(e => e.category === "Выставка").map((event) => (
                  <Card key={event.id} className="flex flex-col md:flex-row overflow-hidden hover-scale">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full md:w-48 h-48 object-cover"
                    />
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-xl">{event.title}</h3>
                        <Badge>{event.category}</Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={14} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={14} />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-bold text-primary">{event.price} ₽</span>
                        <Button>Купить</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="workshops" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.filter(e => e.category === "Мастер-класс").map((event) => (
                  <Card key={event.id} className="flex flex-col md:flex-row overflow-hidden hover-scale">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full md:w-48 h-48 object-cover"
                    />
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-xl">{event.title}</h3>
                        <Badge>{event.category}</Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={14} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={14} />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-bold text-primary">{event.price} ₽</span>
                        <Button>Купить</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="shows" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.filter(e => e.category === "Спектакль" || e.category === "Концерт").map((event) => (
                  <Card key={event.id} className="flex flex-col md:flex-row overflow-hidden hover-scale">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full md:w-48 h-48 object-cover"
                    />
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-xl">{event.title}</h3>
                        <Badge>{event.category}</Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={14} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={14} />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-bold text-primary">{event.price} ₽</span>
                        <Button>Купить</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="schedule" className="py-20 container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Расписание занятий</h2>
          <p className="text-muted-foreground text-lg">
            Регулярные мастер-классы и творческие мастерские
          </p>
        </div>

        <div className="space-y-6">
          {schedule.map((day, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-secondary/50">
                <CardTitle className="text-2xl">{day.day}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {day.classes.map((classItem, idx) => (
                    <div
                      key={idx}
                      className="p-6 hover:bg-secondary/20 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex items-center gap-2 text-primary font-semibold min-w-[140px]">
                          <Icon name="Clock" size={18} />
                          <span>{classItem.time}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{classItem.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <Icon name="User" size={14} />
                            {classItem.instructor}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Записаться
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О нашем пространстве</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы создали место, где искусство оживает. Наше творческое пространство — это дом для художников,
                музыкантов, актеров и всех, кто хочет открыть в себе творческое начало.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                С 2020 года мы проводим выставки, мастер-классы, концерты и театральные постановки. Наша миссия —
                делать искусство доступным и вдохновляющим для каждого.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Мероприятий</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1200+</div>
                  <div className="text-sm text-muted-foreground">Участников</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Преподавателей</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://cdn.poehali.dev/projects/1c69c32a-4eac-46b1-802b-40af390cf4f3/files/6a72b074-d642-4531-9c0d-15801a595292.jpg"
                alt="Галерея"
                className="rounded-lg h-64 object-cover"
              />
              <img
                src="https://cdn.poehali.dev/projects/1c69c32a-4eac-46b1-802b-40af390cf4f3/files/1a712484-9b7d-46f8-8733-760ce392e4fe.jpg"
                alt="Мастерская"
                className="rounded-lg h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-muted-foreground text-lg">
            Мы всегда рады видеть вас в нашем пространстве
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Творческая, д. 15, корп. 2
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@art-space.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 10:00 - 22:00<br />
                    Сб-Вс: 11:00 - 23:00
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ваше сообщение"
                />
              </div>
              <Button className="w-full" size="lg">
                Отправить
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary/20 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Palette" className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-lg">Арт-Пространство</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Место для творчества и вдохновения
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <div className="space-y-2 text-sm">
                <a href="#events" className="block text-muted-foreground hover:text-primary transition-colors">
                  События
                </a>
                <a href="#tickets" className="block text-muted-foreground hover:text-primary transition-colors">
                  Билеты
                </a>
                <a href="#schedule" className="block text-muted-foreground hover:text-primary transition-colors">
                  Расписание
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </a>
                <a href="#contacts" className="block text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            © 2026 Арт-Пространство. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
