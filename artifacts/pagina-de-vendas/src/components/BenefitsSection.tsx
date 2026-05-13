import { BookMarked, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: BookMarked,
    title: "500 Sermon Outlines Rooted in God's Word",
    description: "Every outline is carefully structured to help you prepare faster and share God's Word with more clarity, no matter how much experience you have"
  },
  {
    icon: Clock,
    title: "A Ready-to-Preach System That Saves You Hours",
    description: "No more spending the whole week trying to organize your thoughts. Open the PDF, choose a topic, and prepare your message with confidence"
  },
  {
    icon: Users,
    title: "Made for Every Woman Who Teaches God's Word",
    description: "Perfect for women's ministry leaders, small group leaders, Sunday school teachers, Bible teachers, and Christian women starting their preaching journey"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-6 md:py-8 bg-muted/30" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            The Power Is in a Prepared Message
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
