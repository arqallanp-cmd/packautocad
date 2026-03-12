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

        <div className="flex flex-col items-center gap-6 max-w-lg mx-auto px-0 sm:px-0">
          {/* Basic */}
          <motion.div
            className="bg-card border border-border rounded-xl p-8 flex flex-col w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display font-semibold text-muted-foreground text-sm mb-1">Básico</p>
            <h3 className="font-display text-xl font-bold mb-6">Pack AutoCAD</h3>

            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex gap-2"><span className="text-success">✓</span> +4.500 Blocos DWG organizados</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Hachuras básicas incluídas</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Acesso imediato</li>
              <li className="flex gap-2"><span className="text-success">✓</span> 7 dias de garantia</li>
            </ul>

            <div className="border-t border-border my-4" />

            <div className="text-center mb-1">
              <span className="text-muted-foreground line-through text-sm">R$49,90</span>
            </div>
            <div className="text-center mb-1">
              <span className="font-display text-5xl font-bold">R$9,90</span>
            </div>
            <p className="text-muted-foreground text-xs text-center mb-6">Pagamento único · Acesso imediato · Sem mensalidade</p>

            <a
              href="/upgrade"
              className="block text-center border border-border text-foreground font-display font-semibold py-3 rounded-lg hover:bg-secondary transition-colors w-full"
            >
              Comprar Básico
            </a>

            <p className="text-center mt-3 text-xs text-muted-foreground">
              🔒 Compra 100% segura · Acesso imediato após pagamento
            </p>
          </motion.div>

          {/* Pro */}
          <motion.div
            className="relative bg-card border-2 border-primary rounded-xl p-10 flex flex-col w-full shadow-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground font-display font-bold text-xs px-4 py-1 rounded-full animate-pulse-gold">
              🔥 Mais vendido
            </div>

            <p className="font-display font-semibold text-primary text-sm mb-1">Completo</p>
            <h3 className="font-display text-xl font-bold mb-2">Pack AutoCAD Pro — Completo</h3>

            <div className="text-center mb-4">
              <span className="text-muted-foreground line-through text-sm">Valor total: R$762,00</span>
            </div>

            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex gap-2"><span className="text-success">✓</span> +4.500 Blocos DWG organizados</li>
              <li className="flex gap-2"><span className="text-success">✓</span> +15.000 Blocos DWG extras</li>
              <li className="flex gap-2"><span className="text-success">✓</span> +300 Hachuras Profissionais</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Sistema de Plotagem Automático</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Kit de Pranchas ABNT</li>
              <li className="flex gap-2"><span className="text-success">✓</span> +200 Blocos Dinâmicos</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Guia AutoCAD 2026</li>
              <li className="flex gap-2"><span className="text-primary">★</span> 5 Prompts de IA para Arquitetos</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Grupo Network Exclusivo (vitalício)</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Certificado de Capacitação (4h)</li>
              <li className="flex gap-2"><span className="text-success">✓</span> 14 dias de garantia</li>
            </ul>

            <div className="border-t border-border my-4" />

            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-xs bg-danger/20 text-danger font-bold px-2 py-0.5 rounded">-97% OFF</span>
              <span className="text-muted-foreground line-through text-sm">R$197,00</span>
            </div>
            <div className="text-center mb-1">
              <span className="font-display text-6xl sm:text-7xl font-bold text-gradient-gold">R$24,90</span>
            </div>
            <p className="text-muted-foreground text-xs text-center mb-6">Pagamento único · Acesso imediato</p>

            <motion.a
              href="https://pay.wiapy.com/5xnUmUDYB"
              className="block text-center bg-gradient-gold text-primary-foreground font-display font-bold py-4 sm:py-3 text-lg sm:text-base rounded-lg shadow-gold animate-pulse-gold w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              → QUERO O PACK PRO
            </motion.a>

            <p className="text-center mt-3 text-xs text-muted-foreground">
              ✓ Acesso imediato &nbsp;·&nbsp; ✓ 14 dias garantia &nbsp;·&nbsp; ✓ Pag. único
            </p>

            <div className="flex items-center justify-center gap-3 mt-3 text-xs text-muted-foreground font-medium">
              <span>VISA</span>
              <span>·</span>
              <span>Mastercard</span>
              <span>·</span>
              <span>PIX</span>
              <span>·</span>
              <span>Boleto</span>
            </div>
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
            Valor real dos bônus: <span className="line-through">R$ 762,00</span>
          </p>
          <p className="text-primary font-display font-bold text-lg">Você paga apenas R$ 24,90</p>
          <p className="text-success text-xs font-bold mt-1">Economia de 97%</p>
          <AutodeskBadge variant="inline" className="mt-2 justify-center" />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
