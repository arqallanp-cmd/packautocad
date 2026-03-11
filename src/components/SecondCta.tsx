import { motion } from "framer-motion";

const SecondCta = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
            Tudo isso por menos que um café.
          </h2>
          <div className="my-8">
            <span className="font-display text-6xl sm:text-8xl font-extrabold text-gradient-gold">R$7,90</span>
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
