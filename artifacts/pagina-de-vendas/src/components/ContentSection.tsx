import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lock, Mail, Shield, Infinity, Sparkles } from "lucide-react";
import productImage from "@assets/MKP_1778697922694.webp";

const items = [
  {
    title: "PDF with 500 Sermon Outlines for Women",
    value: "$47.00",
    icon: CheckCircle2
  },
  {
    title: "50 Sermon Outlines on the Power of a Praying Woman",
    value: "$12.90",
    icon: CheckCircle2
  },
  {
    title: "50 Sermon Outlines on Women of the Bible",
    value: "$12.90",
    icon: CheckCircle2
  },
  {
    title: "Complete Bible Overview in 50 Simple Outlines",
    value: "$9.90",
    icon: CheckCircle2
  },
  {
    title: "50 Sermon Outlines on the Parables of Jesus",
    value: "$9.90",
    icon: CheckCircle2
  },
  {
    title: "Practical Guide to Fasting and Prayer",
    value: "$7.90",
    icon: CheckCircle2
  },
  {
    title: "7-Day Money-Back Guarantee",
    value: null,
    icon: Shield
  },
  {
    title: "Lifetime Access",
    value: null,
    icon: Infinity
  },
  {
    title: "Free Updates",
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
            Here's Everything You're Getting Today:
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 md:p-8 border-2 border-blue-900 dark:border-blue-800">
            <div className="flex justify-center mb-6">
              <img
                src={productImage}
                alt="500 Sermon Outlines for Women"
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
                      VALUED AT {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 mb-6">
              <p className="text-center text-lg md:text-xl text-red-600 dark:text-red-500 line-through mb-2">
                REGULAR VALUE: $100.50
              </p>
              <p className="text-center text-xl md:text-2xl font-semibold text-foreground mb-1">
                Today you get full access to EVERYTHING for only
              </p>
              <p className="text-center text-3xl md:text-4xl font-bold text-green-600 dark:text-green-500 mb-3">
                $9.90 USD
              </p>
              <p className="text-center text-sm text-muted-foreground mb-6">
                (You can pay in your local currency)
              </p>
            </div>

            <Button
              className="w-full h-12 text-base md:text-lg font-bold mb-3"
              size="lg"
              data-testid="button-get-access"
            >
              GET INSTANT ACCESS NOW
            </Button>

            <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                <span>100% Secure Payment</span>
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>Instant Email Delivery</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
