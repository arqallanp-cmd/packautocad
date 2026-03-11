import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-16 pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-primary font-display text-xs font-bold tracking-widest uppercase">
              ✦ Lara Render — Pack AutoCAD Pro
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-5">
            Pare de perder horas<br />
            desenhando do zero.{" "}
            <span className="text-gradient-gold">Use blocos prontos.</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            +18.000 blocos DWG organizados, testados e prontos para arrastar no seu projeto. <strong className="text-foreground">Por menos que um café.</strong>
          </p>

          {/* Price anchor */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-muted-foreground line-through text-lg">R$ 59,90</span>
            <span className="bg-danger/20 text-danger text-xs font-bold px-2 py-0.5 rounded">-87% OFF</span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-display text-6xl sm:text-7xl font-extrabold text-gradient-gold">R$7,90</span>
          </div>
          <p className="text-muted-foreground text-sm mb-8">Pagamento único · Acesso vitalício · Sem mensalidade</p>

          <motion.a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold text-lg px-12 py-4 rounded-lg shadow-gold animate-pulse-gold transition-transform hover:scale-105"
            whileTap={{ scale: 0.97 }}
          >
            → QUERO ACESSO AGORA
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
            { value: "18k+", label: "Blocos DWG" },
            { value: "100%", label: "Compatível" },
            { value: "14 dias", label: "Garantia" },
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
