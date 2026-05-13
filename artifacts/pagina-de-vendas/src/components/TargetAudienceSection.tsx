import { GraduationCap, Award, UserCheck, School, Users, Baby, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: GraduationCap,
    title: "Profesores Principiantes"
  },
  {
    icon: Award,
    title: "Profesores Experimentados"
  },
  {
    icon: UserCheck,
    title: "Profesores Autónomos"
  },
  {
    icon: School,
    title: "Escuelas de Música Nuevas"
  },
  {
    icon: Users,
    title: "Profesores Particulares"
  },
  {
    icon: Baby,
    title: "Profesores que Enseñan a Niños y Adultos"
  },
  {
    icon: Clock,
    title: "Profesionales con Poco Tiempo para Planificar"
  },
  {
    icon: BookOpen,
    title: "Profesores que Quieren Mejorar su Didáctica"
  }
];

export default function TargetAudienceSection() {
  const handleCTA = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-6 md:py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Este PACK es para ti:
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="text-center space-y-4"
                data-testid={`audience-${index}`}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <audience.icon className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {audience.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button 
            size="lg"
            onClick={handleCTA}
            data-testid="button-cta"
            className="bg-primary hover:bg-primary text-primary-foreground border-2 border-primary-border font-bold text-lg px-8"
          >
            QUIERO GARANTIZAR AHORA
          </Button>
        </div>
      </div>
    </section>
  );
}
