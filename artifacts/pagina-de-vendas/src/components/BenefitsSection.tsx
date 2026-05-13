import { GraduationCap, FileCheck, Users } from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Clases del Nivel Básico al Avanzado",
    description: "Todas las clases organizadas paso a paso para enseñar desde principiantes hasta cantantes avanzados"
  },
  {
    icon: FileCheck,
    title: "Método Claro, Sin Complicaciones",
    description: "No necesitas pasar horas planificando: abre el PDF y enseña con seguridad"
  },
  {
    icon: Users,
    title: "Adaptable a Todas las Edades",
    description: "Diseñado para niños, adolescentes y adultos. Úsalo en clases individuales o grupales"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-6 md:py-8 bg-muted/30" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            El Secreto Está en la Estructura
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center space-y-4"
              data-testid={`benefit-${index}`}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
