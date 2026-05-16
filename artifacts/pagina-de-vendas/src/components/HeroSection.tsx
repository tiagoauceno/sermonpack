import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@assets/Design_sem_nome_(8)_1778697160181.webp";
import slide2 from "@assets/5_1778703886436.webp";
import slide3 from "@assets/1_1778703931409.webp";
import slide4 from "@assets/2_1778704000882.webp";
import slide5 from "@assets/3_1778704035047.webp";
import slide6 from "@assets/4_1778704065774.webp";

const slides = [
  { src: slide1, alt: "500 Ready-to-Preach Sermon Outlines - Cover" },
  { src: slide2, alt: "Sermon Outline Sample Page 1" },
  { src: slide3, alt: "Sermon Outline Sample Page 2" },
  { src: slide4, alt: "Sermon Outline Sample Page 3" },
  { src: slide5, alt: "Sermon Outline Sample Page 4" },
  { src: slide6, alt: "Sermon Outline Sample Page 5" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const handleCTA = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full bg-red-600 text-white text-center py-2 text-sm font-bold tracking-wide sticky top-0 z-50">
        Special Offer Applied — Today Only!
      </div>
      <section className="bg-white py-8 md:py-12 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-5">

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary leading-tight font-semibold">
              500 Ready-to-Preach{" "}
              <span className="text-accent">Sermon Outlines</span>{" "}
              for Women Who Teach God's Word
            </h1>

            <div className="flex justify-center">
              <div className="relative" style={{ width: "185px" }}>
                <div
                  className="overflow-hidden rounded-2xl shadow-[0_20px_40px_-8px_rgba(0,0,0,0.35)]"
                  style={{ height: "277px" }}
                >
                  <div
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                    {slides.map((slide, i) => (
                      <div key={i} className="min-w-full h-full flex items-center justify-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          width={i === 0 ? 1318 : 1240}
                          height={i === 0 ? 1976 : 1755}
                          className="w-full h-full object-contain block"
                          data-testid={`img-hero-slide-${i}`}
                          loading={i === 0 ? "eager" : "lazy"}
                          fetchPriority={i === 0 ? "high" : "low"}
                          decoding={i === 0 ? "sync" : "async"}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={prev}
                  className="absolute -left-12 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shadow transition"
                  data-testid="button-carousel-prev"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={next}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shadow transition"
                  data-testid="button-carousel-next"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  data-testid={`button-dot-${i}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

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
