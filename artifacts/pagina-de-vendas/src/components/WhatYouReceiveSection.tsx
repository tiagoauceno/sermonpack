import { Card } from "@/components/ui/card";
import { BookOpen, BookHeart, BookMarked, Globe, BookText, Flame } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Complete PDF with 500 Sermon Outlines for Women",
    description: "Every outline includes the theme, Bible text, introduction, main points and a ready-to-share conclusion",
    oldPrice: "$47.00"
  },
  {
    icon: BookHeart,
    title: "BONUS #1: 50 Sermon Outlines on the Power of a Praying Woman",
    description: "Deep, Bible-based messages on the spiritual strength of women who stand firm in prayer",
    oldPrice: "$12.90",
    newPrice: "FREE TODAY"
  },
  {
    icon: BookMarked,
    title: "BONUS #2: 50 Sermon Outlines on Women of the Bible",
    description: "Inspiring messages based on real stories of women who shaped God's Kingdom",
    oldPrice: "$12.90",
    newPrice: "FREE TODAY"
  },
  {
    icon: Globe,
    title: "BONUS #3: Complete Bible Overview in 50 Simple Outlines",
    description: "Study the whole Bible in a simple way and teach with more confidence and depth",
    oldPrice: "$9.90",
    newPrice: "FREE TODAY"
  },
  {
    icon: BookText,
    title: "BONUS #4: 50 Sermon Outlines on the Parables of Jesus",
    description: "Each parable explained step by step so you can preach with clarity and meaning",
    oldPrice: "$9.90",
    newPrice: "FREE TODAY"
  },
  {
    icon: Flame,
    title: "BONUS #5: Practical Guide to Fasting and Prayer",
    description: "A complete guide created to support your spiritual life and ministry preparation",
    oldPrice: "$7.90",
    newPrice: "FREE TODAY"
  }
];

export default function WhatYouReceiveSection() {
  return (
    <section className="py-6 md:py-8 bg-muted/30" id="what-you-receive">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            What You'll Receive
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
                        <div className="text-sm text-red-600 line-through font-semibold">VALUED AT {item.oldPrice}</div>
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
