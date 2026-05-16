import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Infinity, Sparkles } from "lucide-react";

const features = [
  {
    title: "PDF with 500 Sermon Outlines for Women",
    oldPrice: "$47.00"
  },
  {
    title: "50 Sermon Outlines on the Power of a Praying Woman",
    oldPrice: "$12.90"
  },
  {
    title: "50 Sermon Outlines on Women of the Bible",
    oldPrice: "$12.90"
  },
  {
    title: "Complete Bible Overview in 50 Simple Outlines",
    oldPrice: "$9.90"
  },
  {
    title: "50 Sermon Outlines on the Parables of Jesus",
    oldPrice: "$9.90"
  },
  {
    title: "Practical Guide to Fasting and Prayer",
    oldPrice: "$7.90"
  }
];

export default function PricingSection() {
  return (
    <section className="py-6 md:py-8 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Here's Everything You're Getting Today
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-6">
          <div className="flex justify-center mb-6">
            <img
              src="https://i.imgur.com/pshYprB.png"
              alt="500 Sermon Outlines Pack"
              width={320}
              height={320}
              className="w-full max-w-xs h-auto rounded-md shadow-lg"
              style={{ aspectRatio: "1 / 1" }}
              data-testid="img-pricing-preview"
              loading="lazy"
              decoding="async"
            />
          </div>

          <Card className="p-6">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start justify-between gap-4 pb-3 border-b last:border-b-0">
                  <div className="flex items-start gap-3 flex-1">
                    <span className="text-foreground font-semibold text-sm">{feature.title}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-red-600 dark:text-red-500 line-through">VALUED AT {feature.oldPrice}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-start justify-between gap-4 pb-3 border-b">
                <div className="flex items-start gap-3 flex-1">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-semibold text-sm">7-Day Money-Back Guarantee</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 pb-3 border-b">
                <div className="flex items-start gap-3 flex-1">
                  <Infinity className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-semibold text-sm">Lifetime Access</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 pb-6">
                <div className="flex items-start gap-3 flex-1">
                  <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-semibold text-sm">Free Updates</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto mt-8">
          <Card className="p-8 shadow-2xl border-2 border-blue-900 dark:border-blue-800">
            <div className="text-center space-y-6">
              <div>
                <p className="text-xl text-red-600 dark:text-red-500 line-through mb-2">REGULAR VALUE: $100.50</p>
                <p className="text-lg text-foreground mb-4">Today you get full access to EVERYTHING for only</p>
                <p className="text-5xl font-bold text-green-600 dark:text-green-500 mb-2">$9.90 USD</p>
                <p className="text-sm text-muted-foreground">(You can pay in your local currency)</p>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary text-primary-foreground border-2 border-primary-border text-xl py-8 font-bold shadow-lg"
                data-testid="button-pricing-cta"
              >
                GET MY SERMON PACK NOW
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>100% Secure Payment | Instant Email Delivery | 7-Day Guarantee</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
