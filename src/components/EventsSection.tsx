import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  category: string;
  price: number;
  image: string;
  description: string;
  spots: number;
}

interface Schedule {
  day: string;
  classes: Array<{
    time: string;
    name: string;
    instructor: string;
  }>;
}

interface EventsSectionProps {
  events: Event[];
  schedule: Schedule[];
}

const EventsSection = ({ events, schedule }: EventsSectionProps) => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <>
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
                <div className="space-y-1 mt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{event.time}</span>
                  </div>
                </div>
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
    </>
  );
};

export default EventsSection;
