import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
