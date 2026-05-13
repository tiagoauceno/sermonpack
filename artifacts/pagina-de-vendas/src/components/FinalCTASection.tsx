import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  const handleCTA = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 md:py-10 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            START TODAY!
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            In minutes, you can start preparing messages with more structure, confidence and clarity. Click below and get your sermon pack today:
          </p>
          
          <Button 
            size="lg" 
            className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-semibold shadow-xl"
            onClick={handleCTA}
            data-testid="button-final-cta"
          >
            GET MY SERMON PACK NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
