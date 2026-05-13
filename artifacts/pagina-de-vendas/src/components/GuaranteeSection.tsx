import { Card } from "@/components/ui/card";
import { Shield, Check } from "lucide-react";

const faqs = [
  {
    question: "Do I need previous experience?",
    answer: "No, it's perfect for beginners."
  },
  {
    question: "Is it a one-time payment?",
    answer: "Yes. No subscriptions."
  },
  {
    question: "How do I receive the material?",
    answer: "By email, in PDF format."
  },
  {
    question: "Can I access it from my phone?",
    answer: "Yes, from any device."
  },
  {
    question: "When will I get access?",
    answer: "Right after your purchase."
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
                  Try It Risk-Free — 7-Day Guarantee
                </h2>
                <p className="text-green-700 dark:text-green-400 leading-relaxed">
                  If you don't love the material, we'll refund 100% of your money. Simple and fair. No questions asked.
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center mb-4">
            <h3 className="font-serif text-2xl font-semibold text-primary">Quick FAQ</h3>
          </div>

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
