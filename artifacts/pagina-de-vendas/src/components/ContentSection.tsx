import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock, Mail, Shield, Infinity, Sparkles } from "lucide-react";

const items = [
  {
    title: "Apostilla en PDF con 50 Clases de Canto",
    value: "$39.90",
    icon: CheckCircle2
  },
  {
    title: "Bono: Apostilla de Ejercicios Vocales",
    value: "$9.90",
    icon: CheckCircle2
  },
  {
    title: "Bono: Manual de Calentamiento Vocal",
    value: "$7.90",
    icon: CheckCircle2
  },
  {
    title: "Bono: Guía de Organización Semanal",
    value: "$5.90",
    icon: CheckCircle2
  },
  {
    title: "Bono: Ficha de Progreso del Alumno",
    value: "$6.90",
    icon: CheckCircle2
  },
  {
    title: "Bono: Guía para Grabar con Celular",
    value: "$8.90",
    icon: CheckCircle2
  },
  {
    title: "Garantía de 7 Días",
    value: null,
    icon: Shield
  },
  {
    title: "Acceso Vitalicio",
    value: null,
    icon: Infinity
  },
  {
    title: "Actualizaciones Gratuitas",
    value: null,
    icon: Sparkles
  }
];

export default function ContentSection() {
  return (
    <section className="py-8 md:py-12 bg-background" id="content">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Recapitulando todo lo que vas a recibir además de la <span className="text-accent">Apostilla en PDF con 50 Clases de Canto Estructuradas</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 md:p-8 border-2 border-blue-900 dark:border-blue-800">
            <div className="flex justify-center mb-6">
              <img 
                src="https://i.imgur.com/pshYprB.png" 
                alt="Apostilla en PDF con 50 Clases de Canto" 
                className="max-w-full h-auto rounded-md"
                data-testid="img-product-preview"
              />
            </div>

            <div className="space-y-4 mb-8">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="text-left"
                  data-testid={`item-deliverable-${index}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-base md:text-lg text-foreground font-semibold">
                      {item.title}
                    </p>
                  </div>
                  {item.value && (
                    <p className="text-sm font-bold text-red-600 dark:text-red-500 line-through mt-1 ml-7">
                      VALORADO EN {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 mb-6">
              <p className="text-center text-lg md:text-xl text-red-600 dark:text-red-500 line-through mb-2">
                DE $79.40
              </p>
              <p className="text-center text-xl md:text-2xl font-semibold text-foreground mb-1">
                Hoy tendrás acceso completo a TODO esto por solo
              </p>
              <p className="text-center text-3xl md:text-4xl font-bold text-green-600 dark:text-green-500 mb-3">
                $9.90 USD
              </p>
              <p className="text-center text-sm text-muted-foreground mb-6">
                (Puedes pagar en tu moneda local)
              </p>
            </div>

            <Button 
              className="w-full h-12 text-base md:text-lg font-bold mb-3"
              size="lg"
              data-testid="button-get-access"
            >
              QUIERO MI ACCESO AHORA
            </Button>

            <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                <span>Pago 100% Seguro</span>
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>Acceso inmediato por email</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
