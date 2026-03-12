import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center bg-gradient-hero overflow-hidden pt-4 sm:pt-16 pb-6 sm:pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          {/* Headline */}
          <h1 className="font-display font-extrabold uppercase tracking-tight leading-[0.9] mb-3 sm:mb-1">
            <span className="text-gradient-gold text-[52px] sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap">
              +4500 BLOCOS
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="font-display font-extrabold uppercase tracking-tight text-foreground text-[28px] sm:text-4xl md:text-5xl">
              PRONTOS
            </span>
            <span className="bg-danger text-white font-display font-extrabold uppercase px-3 py-1 rounded text-[24px] sm:text-3xl md:text-4xl -rotate-1 inline-block">
              AUTOCAD
            </span>
          </div>

          {/* Subheadline — 1 line on mobile */}
          <p className="text-muted-foreground text-sm sm:text-lg max-w-md mx-auto mb-4 sm:mb-8 leading-relaxed">
            <span className="hidden sm:inline">Chega de perder horas desenhando do zero.<br />Tenha acesso ao maior pack profissional de blocos DWG do mercado.</span>
            <span className="sm:hidden">O maior pack profissional de blocos DWG do mercado.</span>
          </p>

          {/* Price anchor */}
          <p className="text-muted-foreground text-sm sm:text-base mb-1 uppercase tracking-wide font-display">
            DE <span className="line-through">R$49,90</span> POR APENAS
          </p>
          <div className="flex items-center justify-center mb-1 sm:mb-2">
            <span className="font-display text-5xl sm:text-6xl font-extrabold text-gradient-gold">R$9,90</span>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-8">Pagamento único · Acesso imediato · Sem mensalidade</p>

          {/* CTA button */}
          <motion.a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-success text-white font-display font-bold text-sm sm:text-lg px-6 sm:px-12 py-[18px] sm:py-4 rounded-xl shadow-lg transition-transform hover:scale-105 uppercase w-full sm:w-auto justify-center max-w-sm mx-auto animate-pulse-btn"
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            🚀 Quero Acesso Imediato
          </motion.a>

          <p className="text-muted-foreground/60 text-xs mt-3 sm:mt-4">🔒 Compra 100% segura · Acesso imediato após pagamento</p>

          {/* Product mockup — below CTA on mobile */}
          <img
            src="https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_900/HERO_03_rh5nww.png"
            alt="Mockup do produto +4.500 Blocos AutoCAD"
            loading="eager"
            width="900"
            height="600"
            className="mx-auto mt-6 sm:mt-10 mb-0 w-full max-w-[900px] max-h-[280px] sm:max-h-none object-contain"
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-12 max-w-sm sm:max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {[
            { value: "4.500+", label: "Blocos DWG" },
            { value: "100%", label: "Organizados" },
            { value: "R$9,90", label: "Acesso total" },
          ].map((s) => (
            <div key={s.label} className="text-center bg-card/50 border border-border rounded-lg py-3 px-2">
              <p className="font-display text-xl sm:text-2xl font-bold text-primary">{s.value}</p>
              <p className="text-muted-foreground text-[10px] sm:text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
