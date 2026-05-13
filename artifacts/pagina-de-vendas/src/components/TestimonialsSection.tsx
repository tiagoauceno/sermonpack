import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sandra Alves, Women's Ministry Leader",
    quote: "I used to struggle preparing messages and felt nervous teaching. Now I feel more prepared and confident every time I share."
  },
  {
    name: "Pastor Carolina Mendez",
    quote: "I shared three outlines in my small group and the women were truly touched. The messages are clear, biblical and easy to follow."
  },
  {
    name: "Patricia Rojas, Ministry Leader",
    quote: "For the first time, I can prepare a message without feeling lost. The outlines are organized, simple and fully Bible-based."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-6 md:py-8 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4">
            Testimonials From Women Already Using the PACK
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover-elevate transition-all"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-foreground italic leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
                
                <p className="font-semibold text-foreground">
                  — {testimonial.name}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
