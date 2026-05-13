import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@assets/apostila_50_clases_canto_sem_bordas_1777682549827.jpg";
import slide2 from "@assets/Apostilla_en_PDF_con_50_Clases_de_Canto_page-0019_1777681688451.jpg";
import slide3 from "@assets/Apostilla_en_PDF_con_50_Clases_de_Canto_page-0025_1777681688451.jpg";
import slide4 from "@assets/Apostilla_en_PDF_con_50_Clases_de_Canto_page-0030_1777681688452.jpg";
import slide5 from "@assets/Apostilla_en_PDF_con_50_Clases_de_Canto_page-0032_1777681688452.jpg";
import slide6 from "@assets/Apostilla_en_PDF_con_50_Clases_de_Canto_page-0050_1777681688453.jpg";

const slides = [
  { src: slide1, alt: "Apostila en PDF con 50 Clases de Canto - Portada" },
  { src: slide2, alt: "Clase 13: Ritmo y Pulso Vocal" },
  { src: slide3, alt: "Clase 18: Resonancia Vocal" },
  { src: slide4, alt: "Clase 23: Articulación Clara" },
  { src: slide5, alt: "Clase 25: Control de la Intensidad Vocal" },
  { src: slide6, alt: "Clase 41: Harmonización Básica" },
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
        Descuento Aplicado. ¡Solo por Hoy!
      </div>
      <section className="bg-white py-8 md:py-12 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-5">

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary leading-tight font-semibold">
              ¡PACK de{" "}
              <span className="text-accent">CLASES LISTAS</span>{" "}
              para Profesores de CANTO!
            </h1>

            <div className="flex justify-center">
              <div className="relative" style={{ width: "185px" }}>
                <div className="overflow-hidden rounded-2xl shadow-[0_20px_40px_-8px_rgba(0,0,0,0.35)]">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                    {slides.map((slide, i) => (
                      <div key={i} className="min-w-full">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-auto block"
                          data-testid={`img-hero-slide-${i}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={prev}
                  className="absolute -left-12 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shadow transition"
                  data-testid="button-carousel-prev"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={next}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shadow transition"
                  data-testid="button-carousel-next"
                  aria-label="Siguiente"
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
              Aprovecha un programa completo en PDF con más de 50 clases estructuradas, listas para imprimir y aplicar HOY MISMO.
            </p>

            <Button
              size="lg"
              onClick={handleCTA}
              data-testid="button-cta"
              className="font-bold text-base md:text-lg px-10"
            >
              QUIERO GARANTIZAR AHORA
            </Button>

          </div>
        </div>
      </section>
    </>
  );
}
