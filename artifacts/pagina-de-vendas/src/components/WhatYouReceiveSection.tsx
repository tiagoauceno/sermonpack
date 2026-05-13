import { Card } from "@/components/ui/card";
import { FileText, Mic, Wind, Calendar, Users, Camera } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "Apostila en PDF con 50 Clases de Canto",
    description: "Cada clase está cuidadosamente diseñada para desarrollar habilidades vocales de forma clara y progresiva",
    oldPrice: "$39.90"
  },
  {
    icon: Mic,
    title: "BONO #1: Apostilla de Ejercicios Vocales Básicos",
    description: "Para comenzar cada clase con seguridad y técnica",
    oldPrice: "$9.90",
    newPrice: "HOY GRATIS"
  },
  {
    icon: Wind,
    title: "BONO #2: Manual de Calentamiento Vocal para Profesores",
    description: "Evita tensiones y mejora la calidad vocal con rutinas efectivas",
    oldPrice: "$7.90",
    newPrice: "HOY GRATIS"
  },
  {
    icon: Calendar,
    title: "BONO #3: Guía de Organización de Clases Semanales",
    description: "Planifica toda tu semana de clases en minutos",
    oldPrice: "$5.90",
    newPrice: "HOY GRATIS"
  },
  {
    icon: Users,
    title: "BONO #4: Ficha de Seguimiento de Progreso del Alumno",
    description: "Controla el avance de cada estudiante con facilidad",
    oldPrice: "$6.90",
    newPrice: "HOY GRATIS"
  },
  {
    icon: Camera,
    title: "BONO #5: Mini Guía para Grabar Ejercicios con tu Celular",
    description: "Graba tu voz o ejercicios con calidad sin equipos caros",
    oldPrice: "$8.90",
    newPrice: "HOY GRATIS"
  }
];

export default function WhatYouReceiveSection() {
  return (
    <section className="py-6 md:py-8 bg-muted/30" id="what-you-receive">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            ¿Qué Vas a Recibir?
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover-elevate active-elevate-2 transition-all"
                data-testid={`card-item-${index}`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.description}
                      </p>
                    )}
                    {item.oldPrice && (
                      <div className="space-y-1">
                        <div className="text-sm text-red-600 line-through font-semibold">VALORADO EN {item.oldPrice}</div>
                        {item.newPrice && (
                          <div className="text-sm font-bold text-green-600">{item.newPrice}</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
