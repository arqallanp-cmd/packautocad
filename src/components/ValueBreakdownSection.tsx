import { motion } from "framer-motion";

const ValueBreakdownSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          className="border-2 border-primary/30 rounded-2xl p-8 sm:p-10 bg-background text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-6">
            Resumo do valor
          </p>

          <div className="space-y-3 mb-6 text-left max-w-sm mx-auto">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">Biblioteca principal</span>
              <span className="text-muted-foreground">R$ 297</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">Bônus inclusos</span>
              <span className="text-muted-foreground">R$ 293</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between items-center">
              <span className="font-display font-bold text-lg text-foreground">Valor total</span>
              <span className="font-display font-bold text-lg text-muted-foreground line-through">
                R$ 590
              </span>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mb-6">
            <p className="text-muted-foreground text-sm mb-1">Você paga apenas</p>
            <p className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold">
              R$ 24,90
            </p>
            <span className="inline-block mt-2 text-xs bg-danger/20 text-danger font-bold px-3 py-1 rounded">
              ECONOMIA DE 95%
            </span>
          </div>

          <motion.a
            href="https://pay.wiapy.com/5xnUmUDYB"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold text-base sm:text-lg px-10 py-4 rounded-xl shadow-gold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Baixar Pack Agora
          </motion.a>
          <p className="text-muted-foreground/50 text-xs mt-3">
            🔒 Pagamento seguro · Acesso imediato · Garantia de 7 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueBreakdownSection;
