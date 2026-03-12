import { motion } from "framer-motion";

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          className="text-center border border-border rounded-xl p-8 bg-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl mb-4 block">🛡️</span>
          <h3 className="font-display text-2xl font-bold mb-3">
            Garantia incondicional de 7 dias
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Teste todos os arquivos. Se não gostar, devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>.
          </p>
          <p className="text-primary font-display font-semibold text-sm">
            Sem perguntas. Sem burocracia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
