import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
