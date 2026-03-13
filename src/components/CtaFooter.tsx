import { motion } from "framer-motion";

const CtaFooter = () => {
  return (
    <>
      <section className="py-12 lg:py-[60px] bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container max-w-2xl lg:max-w-[1200px] mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Última chance.<br />
              <span className="text-gradient-gold">Não deixa pra depois.</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              +19500 blocos, hachuras, templates e prompts de IA. Tudo por <strong className="text-primary">R$ 24,90</strong>.
            </p>
            <motion.a
              href="https://pay.wiapy.com/5xnUmUDYB"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold text-base sm:text-lg px-10 py-5 sm:py-4 rounded-xl shadow-gold animate-pulse-gold max-w-[320px] mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              🚀 GARANTIR MEU ACESSO POR R$24,90
            </motion.a>
            <p className="text-muted-foreground/60 text-xs mt-4">🔒 Pagamento seguro · Acesso imediato · Garantia de 14 dias</p>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 bg-card border-t border-border">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm mb-2">© 2026 Lara Rembrandt. Todos os direitos reservados.</p>
          <p className="text-muted-foreground text-xs mb-4">Política de Privacidade · Termos de Uso</p>
          <p className="text-muted-foreground/60 text-xs max-w-lg mx-auto leading-relaxed">
            Produto digital. Autodesk Certified
          </p>
        </div>
      </footer>
    </>
  );
};

export default CtaFooter;
