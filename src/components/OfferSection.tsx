import { motion } from "framer-motion";

const breakdown = [
  { item: "Biblioteca principal (+4.500 blocos)", value: "R$297" },
  { item: "Bônus extras (8 pacotes)", value: "R$293" },
];

const OfferSection = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Value Breakdown */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-6">
            💰 Resumo do valor
          </p>

          <div className="max-w-md mx-auto space-y-3 mb-6">
            {breakdown.map((b) => (
              <div key={b.item} className="flex justify-between items-center bg-card border border-border rounded-lg px-5 py-3">
                <span className="text-foreground text-sm">{b.item}</span>
                <span className="text-muted-foreground text-sm line-through">{b.value}</span>
              </div>
            ))}
          </div>

          <div className="border border-primary/30 rounded-xl p-6 sm:p-8 bg-card max-w-md mx-auto" style={{ boxShadow: "0 0 40px -10px hsl(45 100% 55% / 0.1)" }}>
            <p className="text-muted-foreground text-sm mb-2">Valor total separado:</p>
            <p className="font-display text-5xl sm:text-6xl font-extrabold text-foreground mb-1 leading-none">
              R$590
            </p>

            <div className="w-16 h-px bg-primary/30 mx-auto my-5" />

            <p className="text-muted-foreground text-sm mb-1">Hoje você leva tudo por apenas</p>
            <p className="font-display text-4xl sm:text-6xl font-extrabold text-gradient-gold mb-2 leading-none">
              R$9,90
            </p>
            <p className="text-success text-sm font-bold mb-6">Mais de 95% de desconto</p>

            {/* CTA */}
            <motion.a
              href="https://pay.wiapy.com/5xnUmUDYB"
              className="block w-full text-center bg-success text-white font-display font-bold text-base sm:text-lg py-4 rounded-xl shadow-lg animate-pulse-btn uppercase"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              🚀 BAIXAR PACK AGORA
            </motion.a>

            <p className="text-muted-foreground/60 text-xs mt-3">
              Pagamento único · Acesso imediato · Sem mensalidade
            </p>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          className="text-center border border-border rounded-xl p-8 bg-gradient-card max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-4xl mb-3 block">🛡️</span>
          <h3 className="font-display text-xl font-bold mb-2">
            Garantia incondicional de 7 dias
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Teste todos os arquivos. Se não gostar, devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
