import { motion } from "framer-motion";

const ProductPreview = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          className="border-2 border-dashed border-primary/30 rounded-2xl aspect-video flex items-center justify-center bg-card mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-display font-semibold text-sm sm:text-base tracking-wide">
            [ Imagem: grid de blocos organizados ]
          </span>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-gradient-gold mb-4">
            +3.700 blocos organizados por pastas
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
            Cada bloco foi nomeado, categorizado e testado. É só arrastar pro seu projeto e pronto.
          </p>
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

export default ProductPreview;
