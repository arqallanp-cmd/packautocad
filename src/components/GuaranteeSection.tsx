import { motion } from "framer-motion";
import AutodeskBadge from "./AutodeskBadge";

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container max-w-2xl lg:max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center border border-border rounded-xl p-8 bg-gradient-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl mb-4 block">🛡️</span>
          <h3 className="font-display text-2xl font-bold mb-2">Risco zero. Garantia de 14 dias.</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Teste cada bloco, cada hachura, cada template. Se não gostar, manda uma mensagem e devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>, sem perguntas.
          </p>
          <p className="text-primary font-display font-semibold text-sm">
            Quem garante sou eu, Lara. Pessoalmente.
          </p>
        </motion.div>
        <AutodeskBadge variant="default" className="mt-6" />
      </div>
    </section>
  );
};

export default GuaranteeSection;
