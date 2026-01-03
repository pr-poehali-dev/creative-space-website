import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import AboutContactsFooter from "@/components/AboutContactsFooter";

const Index = () => {
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
      <Header />
      <HeroSection />
      <EventsSection events={events} schedule={schedule} />
      <AboutContactsFooter />
    </div>
  );
};

export default Index;
