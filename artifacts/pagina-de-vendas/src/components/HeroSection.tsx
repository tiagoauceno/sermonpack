import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function HeroSection() {
  const handleCTA = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full bg-red-600 text-white text-center py-2 text-sm font-bold tracking-wide sticky top-0 z-50">
        Special Offer Applied — Today Only!
      </div>
      <section className="bg-white py-10 md:py-16 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">

            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-primary" />
              </div>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary leading-tight font-semibold">
              500 Ready-to-Preach{" "}
              <span className="text-accent">Sermon Outlines</span>{" "}
              for Women Who Teach God's Word
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Get a complete PDF library with 500 Bible-based sermon outlines designed to help you minister with clarity, confidence and structure.
            </p>

            <Button
              size="lg"
              onClick={handleCTA}
              data-testid="button-cta"
              className="font-bold text-base md:text-lg px-10"
            >
              GET MY SERMON PACK NOW
            </Button>

          </div>
        </div>
      </section>
    </>
  );
}
