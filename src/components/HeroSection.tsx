import { motion } from "framer-motion";
import PrimaryCta from "@/components/PrimaryCta";

const benefits = [
  "Blocos organizados por categorias",
  "Compatível com qualquer AutoCAD",
  "Biblioteca pronta para usar",
];

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center bg-gradient-hero overflow-hidden pt-3 sm:pt-16 pb-6 sm:pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          {/* Headline */}
          <h1 className="font-display font-extrabold uppercase tracking-tight leading-[0.95] mb-3 sm:mb-4">
            <span className="text-foreground text-[28px] sm:text-4xl md:text-5xl block mb-1">
              Pare de perder horas
            </span>
            <span className="text-gradient-gold text-[28px] sm:text-4xl md:text-5xl">
              procurando blocos no AutoCAD
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-muted-foreground text-sm sm:text-lg max-w-lg mx-auto mb-4 sm:mb-6 leading-relaxed">
            Baixe +4.500 blocos profissionais organizados e comece a usar em minutos.
          </p>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 mb-4 sm:mb-8">
            {benefits.map((b) => (
              <span key={b} className="text-sm text-foreground/80 font-medium flex items-center gap-1.5">
                <span className="text-success text-xs">✔</span> {b}
              </span>
            ))}
          </div>

          {/* Mockup */}
          <img
            src="https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_900/HERO_04_jgsp83.png"
            alt="Mockup do produto +4.500 Blocos AutoCAD"
            loading="eager"
            width="900"
            height="600"
            className="mx-auto mb-4 sm:mb-10 w-auto max-w-full max-h-[220px] sm:max-h-none sm:w-full sm:max-w-[900px] object-contain"
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

          {/* CTA */}
          <PrimaryCta showUrgency />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
