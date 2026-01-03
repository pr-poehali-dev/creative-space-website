import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutContactsFooter = () => {
  return (
    <>
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
    </>
  );
};

export default AboutContactsFooter;
