import { motion } from "framer-motion";

const SecondCta = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-bold tracking-widest uppercase mb-4">Decisão fácil</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
            Tudo isso por menos que um café.
          </h2>
          <p className="text-muted-foreground mb-6">Sério. Enquanto você pensa, alguém já baixou e está usando.</p>
          <div className="my-6">
            <span className="font-display text-7xl sm:text-8xl font-extrabold text-gradient-gold">R$9,90</span>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold text-lg px-10 py-4 rounded-lg shadow-gold hover:scale-105 transition-transform"
          >
            → Quero acesso agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondCta;
