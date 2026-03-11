import { motion } from "framer-motion";

const stats = [
  { value: "18k+", label: "Blocos DWG" },
  { value: "100%", label: "Compatível" },
  { value: "14 dias", label: "Garantia" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20 pb-16">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-4">
            ✦ Lara Render — Pack AutoCAD Pro
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Mais de 18.000 blocos{" "}
            <span className="text-gradient-gold">prontos para usar.</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            Chega de perder horas desenhando do zero. Plote projetos profissionais em minutos com o maior pack de blocos DWG do mercado.
          </p>

          {/* Price */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-muted-foreground line-through text-lg">R$ 59,90</span>
            <span className="font-display text-5xl font-bold text-primary">R$ 7,90</span>
          </div>
          <p className="text-muted-foreground text-sm mb-8">Pagamento único • Acesso imediato</p>

          <motion.a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold text-lg px-10 py-4 rounded-lg shadow-gold animate-pulse-gold transition-transform hover:scale-105"
            whileTap={{ scale: 0.97 }}
          >
            → Quero acesso agora
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-16 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
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
