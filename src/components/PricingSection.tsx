import { motion } from "framer-motion";
import AutodeskBadge from "./AutodeskBadge";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Escolha seu pacote</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Acesso imediato ao material</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Basic */}
          <motion.div
            className="bg-card border border-border rounded-xl p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display font-semibold text-muted-foreground text-sm mb-1">Básico</p>
            <h3 className="font-display text-xl font-bold mb-4">Pack AutoCAD</h3>
            <div className="mb-1">
              <span className="text-muted-foreground line-through text-sm">De R$ 49,90</span>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-display text-4xl font-bold">R$9,90</span>
            </div>
            <p className="text-muted-foreground text-xs mb-8">Pagamento único</p>

            <ul className="space-y-3 mb-8 flex-1 text-sm">
              <li className="flex gap-2"><span className="text-success">✓</span> +4500 Blocos DWG organizados</li>
              <li className="flex gap-2"><span className="text-success">✓</span> 7 dias de garantia</li>
              <li className="flex gap-2 text-muted-foreground"><span>✗</span> Bônus não incluídos</li>
              <li className="flex gap-2 text-muted-foreground"><span>✗</span> Prompts de IA</li>
            </ul>

            <a
              href="/upgrade"
              className="block text-center border border-border text-foreground font-display font-semibold py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Comprar básico
            </a>
            
            <p className="text-center mt-3 text-xs text-muted-foreground">
              🚨 <span className="font-semibold text-foreground">Atenção:</span> Temos um pacote ainda melhor para você! 👇
            </p>
          </motion.div>

          {/* Pro */}
          <motion.div
            className="relative bg-card border-2 border-primary rounded-xl p-8 flex flex-col shadow-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground font-display font-bold text-xs px-4 py-1 rounded-full animate-pulse-gold">
              🔥 Mais vendido
            </div>

            <p className="font-display font-semibold text-primary text-sm mb-1">Completo</p>
            <h3 className="font-display text-xl font-bold mb-4">Pack AutoCAD Pro</h3>
            <div className="mb-1">
              <span className="text-muted-foreground line-through text-sm">Valor total: R$ 168,00</span>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-display text-4xl font-bold text-gradient-gold">R$24,90</span>
              <span className="text-xs bg-danger/20 text-danger font-bold px-2 py-0.5 rounded ml-2">-85% OFF</span>
            </div>
            <p className="text-muted-foreground text-xs mb-8">Pagamento único · Acesso imediato</p>

            <ul className="space-y-3 mb-8 flex-1 text-sm">
              <li className="flex gap-2"><span className="text-success">✓</span> +4500 Blocos DWG organizados</li>
              <li className="flex gap-2"><span className="text-success">✓</span> +15000 Blocos extras</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Pack de Hachuras Profissionais</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Template de Plotagem .ctb</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Anotações e Legendas Pro</li>
              <li className="flex gap-2"><span className="text-primary">★</span> 5 Prompts de IA para Arquitetos</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Certificado de Capacitação Profissional (20h)</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Grupo Network Exclusivo (acesso vitalício)</li>
              <li className="flex gap-2"><span className="text-success">✓</span> 14 dias de garantia</li>
            </ul>

            <motion.a
              href="https://pay.wiapy.com/5xnUmUDYB"
              className="block text-center bg-gradient-gold text-primary-foreground font-display font-bold py-3 rounded-lg shadow-gold animate-pulse-gold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              → QUERO O PACK PRO
            </motion.a>
          </motion.div>
        </div>

        {/* Value stack */}
        <motion.div
          className="text-center mt-8 bg-card border border-border rounded-lg p-4 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            Valor real dos bônus: <span className="line-through">R$ 168,00</span>
          </p>
          <p className="text-primary font-display font-bold text-lg">Você paga apenas R$ 24,90</p>
          <p className="text-success text-xs font-bold mt-1">Economia de 85%</p>
          <AutodeskBadge variant="inline" className="mt-2 justify-center" />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
