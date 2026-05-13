import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Crown, Trophy, Users, Star } from "lucide-react";

const topics = [
  {
    icon: Heart,
    title: "Messages for Women Walking Through Struggles"
  },
  {
    icon: Sparkles,
    title: "Sermons on Healing and Restoration"
  },
  {
    icon: Crown,
    title: "Outlines on Identity in Christ"
  },
  {
    icon: Trophy,
    title: "Messages on Freedom and Victory"
  },
  {
    icon: Users,
    title: "Sermon Outlines for Small Groups"
  },
  {
    icon: Star,
    title: "Messages for Women's Ministry Events"
  }
];

export default function ShowcaseSection() {
  const handleCTA = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
            Topics You'll Find Inside
          </h2>
          
          <Card className="p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-md hover-elevate transition-all"
                  data-testid={`topic-${index}`}
                >
                  <topic.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-semibold">{topic.title}</span>
                </div>
              ))}
            </div>
          </Card>
          
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
