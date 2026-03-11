import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-16 pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] mb-3 uppercase tracking-tight">
            <span className="text-gradient-gold">+4.500 Blocos</span>
            <br />
            <span className="text-foreground">Prontos</span>{" "}
            <span className="bg-danger text-white px-3 py-1 rounded inline-block text-4xl sm:text-5xl md:text-6xl -rotate-1">AutoCAD</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-lg mx-auto mb-10 leading-relaxed mt-5">
            Pare de desenhar cada bloco do zero. Tenha um acervo completo e use a hora que quiser.
          </p>

          {/* Product mockup placeholder */}
          <div className="border-2 border-dashed border-primary/30 rounded-xl max-w-md mx-auto aspect-[4/3] flex items-center justify-center bg-card/50 mb-10">
            <span className="text-primary font-display font-semibold text-sm tracking-wide">
              [ Mockup: notebook + caixa do produto ]
            </span>
          </div>

          {/* Price anchor */}
          <p className="text-muted-foreground text-base mb-1 uppercase tracking-wide font-display">
            De <span className="line-through">R$ 59,90</span> por apenas
          </p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-display text-5xl sm:text-6xl font-extrabold text-gradient-gold">R$5,99</span>
          </div>
          <p className="text-muted-foreground text-sm mb-8">Pagamento único · Acesso imediato · Sem mensalidade</p>

          <motion.a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-success text-white font-display font-bold text-lg px-12 py-4 rounded-lg shadow-lg transition-transform hover:scale-105 uppercase"
            whileTap={{ scale: 0.97 }}
          >
            Quero ter acesso!
          </motion.a>

          <p className="text-muted-foreground/60 text-xs mt-4">🔒 Compra 100% segura · Acesso imediato após pagamento</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-14 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {[
            { value: "4.500+", label: "Blocos DWG" },
            { value: "100%", label: "Organizados" },
            { value: "R$5,99", label: "Acesso total" },
          ].map((s) => (
            <div key={s.label} className="text-center bg-card/50 border border-border rounded-lg py-3 px-2">
              <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
              <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
