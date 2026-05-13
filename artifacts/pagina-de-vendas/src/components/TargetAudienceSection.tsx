import { HelpCircle, Clock, Heart, Sprout, Mic2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: HelpCircle,
    title: "You feel unsure when preparing a message"
  },
  {
    icon: Clock,
    title: "You don't have time to study from scratch"
  },
  {
    icon: Heart,
    title: "You worry your message won't truly reach the hearts of those listening"
  },
  {
    icon: Sprout,
    title: "You're just starting and need a clear structure"
  },
  {
    icon: Mic2,
    title: "You already minister and want stronger messages"
  },
  {
    icon: BookOpen,
    title: "You want to share God's Word with more clarity"
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
            This PACK Is for You If:
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            GET MY SERMON PACK NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
