import { motion } from "framer-motion";

const useCountUp = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const HeroSection = () => {
  const { count, ref: counterRef } = useCountUp(4500, 1000);

  return (
    <section className="relative flex items-center justify-center bg-gradient-hero overflow-hidden pt-3 sm:pt-16 pb-6 sm:pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          {/* Headline */}
          <h1 className="font-display font-extrabold uppercase tracking-tight leading-[0.95] mb-2 sm:mb-3">
            <span className="text-gradient-gold text-[36px] sm:text-5xl md:text-6xl block">
              +4500 BLOCOS
            </span>
            <span className="text-foreground text-[28px] sm:text-4xl md:text-5xl flex items-center justify-center gap-2 sm:gap-3 mt-1">
              PRONTOS
              <span className="bg-destructive text-destructive-foreground text-[20px] sm:text-2xl md:text-3xl font-extrabold px-2.5 py-0.5 rounded-md">
                AUTOCAD
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto mb-4 sm:mb-6">
            O maior pack profissional de blocos DWG do mercado.
          </p>

          {/* Animated Counter */}
          <div ref={counterRef} className="flex flex-col items-center mb-4 sm:mb-6">
            <span className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-gold">
              {count.toLocaleString("pt-BR")}+
            </span>
            <span className="text-muted-foreground text-sm sm:text-base mt-1 font-display">
              blocos prontos na biblioteca
            </span>
          </div>

          {/* Mockup */}
          <img
            src="https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_900/HERO_04_jgsp83.png"
            alt="Mockup do produto +4500 Blocos AutoCAD"
            loading="eager"
            width="900"
            height="600"
            className="mx-auto mb-4 sm:mb-8 w-auto max-w-full max-h-[220px] sm:max-h-none sm:w-full sm:max-w-[900px] object-contain"
          />

          {/* Price */}
          <p className="text-muted-foreground text-sm sm:text-base mb-1 uppercase tracking-wide font-display">
            DE <span className="line-through">R$49,90</span> POR APENAS
          </p>
          <div className="flex items-center justify-center mb-1 sm:mb-2">
            <span className="font-display text-5xl sm:text-6xl font-extrabold text-gradient-gold drop-shadow-[0_0_20px_hsl(45_100%_55%/0.35)]">
              R$9,90
            </span>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm mb-6 sm:mb-8">
            Pagamento único · Acesso imediato · Sem mensalidade
          </p>

          {/* CTA Button */}
          <motion.a
            href="#pricing"
            className="flex items-center justify-center gap-2 bg-success text-white font-display rounded-2xl shadow-[0_4px_24px_-4px_hsl(145_60%_45%/0.4)] w-full max-w-sm mx-auto px-6 py-4 sm:py-5 transition-all hover:shadow-[0_4px_32px_-2px_hsl(145_60%_50%/0.5)] animate-pulse-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="text-lg">🚀</span>
            <span className="font-extrabold text-base sm:text-lg uppercase tracking-wide">
              QUERO ACESSO IMEDIATO
            </span>
          </motion.a>

          {/* Trust */}
          <p className="text-muted-foreground/60 text-[10px] sm:text-xs mt-3 flex items-center gap-1">
            <span>🔒</span> Compra 100% segura · Acesso imediato após pagamento
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6 sm:mt-8 w-full max-w-sm">
            {[
              { value: "4.500+", label: "Blocos DWG" },
              { value: "100%", label: "Organizados" },
              { value: "R$9,90", label: "Acesso total" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-border rounded-xl py-3 px-2 flex flex-col items-center bg-card"
              >
                <span className="font-display font-extrabold text-lg sm:text-xl text-gradient-gold">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-[10px] sm:text-xs mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
