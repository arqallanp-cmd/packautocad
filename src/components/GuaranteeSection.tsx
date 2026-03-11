import { motion } from "framer-motion";

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          className="text-center border border-border rounded-xl p-8 bg-gradient-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-4xl mb-4 block">🛡️</span>
          <h3 className="font-display text-2xl font-bold mb-4">14 dias de garantia total</h3>
          <p className="text-muted-foreground leading-relaxed">
            Acesse o material, teste cada bloco e cada hachura. Se por qualquer motivo não ficar satisfeita, manda uma mensagem em até 14 dias e devolvemos 100% do seu dinheiro — sem perguntas, sem burocracia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
