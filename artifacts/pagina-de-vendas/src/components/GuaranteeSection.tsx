import { Card } from "@/components/ui/card";
import { Shield, Check } from "lucide-react";

const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer: "No, es ideal para principiantes."
  },
  {
    question: "¿Es un pago único?",
    answer: "Sí. Sin mensualidades ni suscripciones."
  },
  {
    question: "¿Cómo recibo el material?",
    answer: "Por email, al instante."
  },
  {
    question: "¿Puedo imprimir las clases?",
    answer: "Claro, el PDF está diseñado para eso."
  }
];

export default function GuaranteeSection() {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 mb-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              
              <div className="flex-1">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-green-800 dark:text-green-300 mb-2">
                  Garantía Incondicional de 7 Días
                </h2>
                <p className="text-green-700 dark:text-green-400 leading-relaxed">
                  Si por algún motivo no quedas satisfecho con el material, te devolvemos el 100% de tu inversión sin preguntas. Sin burocracia, sin justificaciones.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="p-4"
                data-testid={`faq-${index}`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{faq.question}</p>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
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
