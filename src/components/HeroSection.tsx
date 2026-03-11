import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [seconds, setSeconds] = useState(18 * 60 + 59);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <>
      {/* Countdown bar */}
      <div className="bg-background border-b border-border py-2.5 text-center">
        <span className="text-muted-foreground text-sm font-display tracking-wide">
          ⏱ Essa oferta acaba em:{" "}
          <span className="text-foreground font-bold">{mm}:{ss}</span>
        </span>
      </div>

      <section className="relative flex flex-col items-center justify-center bg-background overflow-hidden py-16 sm:py-24 px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <h1
            className="font-display font-extrabold uppercase leading-[0.95] mb-6"
            style={{ fontSize: "clamp(3.5rem, 10vw, 6.25rem)" }}
          >
            +18.700 BLOCOS
            <br />
            PRONTOS{" "}
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded inline-block -rotate-1">
              AUTOCAD
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            Pare de desenhar cada bloco do zero. Tenha um acervo completo e use a hora que quiser.
          </p>

          {/* Mockup placeholder */}
          <div className="border-2 border-dashed border-primary/30 rounded-2xl max-w-lg mx-auto aspect-[4/3] flex items-center justify-center bg-card/50 mb-12">
            <span className="text-primary font-display font-semibold text-sm tracking-wide">
              [ Mockup: notebook + caixa do produto ]
            </span>
          </div>

          {/* Price block */}
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-display mb-1">
            De <span className="line-through">R$59,90</span> por apenas
          </p>
          <p className="font-display text-5xl sm:text-6xl font-extrabold text-gradient-gold mb-6">
            R$7,90
          </p>

          {/* CTA */}
          <motion.a
            href="#pricing"
            className="inline-block bg-gradient-gold text-primary-foreground font-display font-bold text-lg uppercase px-14 py-4 rounded-lg shadow-gold transition-transform hover:scale-105"
            whileTap={{ scale: 0.97 }}
          >
            Quero ter acesso!
          </motion.a>

          <p className="text-muted-foreground/60 text-xs mt-4">
            🔒 Compra 100% segura · Acesso imediato
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
