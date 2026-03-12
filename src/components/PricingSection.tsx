import { motion } from "framer-motion";
import { Infinity, ShieldCheck, Award } from "lucide-react";
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
            <p className="font-display font-semibold text-muted-foreground text-sm mb-1 text-center">Básico</p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6 text-center">Pack AutoCAD</h3>

            <ul className="space-y-3 mb-6 text-base">
              <li className="flex gap-2"><span>✅</span> +4.500 Blocos DWG organizados</li>
              <li className="flex gap-2"><span>✅</span> 7 dias de garantia</li>
              <li className="flex gap-2"><span>✅</span> 1 ano de acesso</li>
              <li className="flex gap-2 text-muted-foreground"><span>❌</span> Acesso vitalício</li>
              <li className="flex gap-2 text-muted-foreground"><span>❌</span> Agentes de IA</li>
              <li className="flex gap-2 text-muted-foreground"><span>❌</span> Certificado AutoDESK 20H</li>
              <li className="flex gap-2 text-muted-foreground"><span>❌</span> Instalador AutoCAD</li>
              <li className="flex gap-2 text-muted-foreground"><span>❌</span> Bônus incríveis</li>
            </ul>

            <div className="border-t border-border my-4" />

            <div className="text-center mb-1">
              <span className="text-muted-foreground line-through text-sm">R$49,90</span>
            </div>
            <div className="text-center mb-2">
              <span className="font-display text-6xl sm:text-7xl font-bold">R$9,90</span>
            </div>

            <a
              href="/upgrade"
              className="block text-center border border-border text-foreground font-display font-semibold py-3 rounded-lg hover:bg-secondary transition-colors w-full"
            >
              Comprar Básico
            </a>

            <p className="text-center mt-3 text-xs text-muted-foreground">
              🚨 <span className="font-semibold text-foreground">Atenção:</span> Temos um pacote ainda melhor para você!👇
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

            <p className="font-display font-semibold text-primary text-sm mb-1 text-center">🎁 BÔNUS INCLUSOS</p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-0 text-center">Pack AutoCAD Pro</h3>
            <p className="font-display text-lg font-semibold text-center mb-2">Vitalício</p>

            <div className="text-center mb-4">
              <span className="text-muted-foreground line-through text-sm">Valor total: R$297,00</span>
            </div>

            <ul className="space-y-3 mb-6 text-base">
              <li className="flex gap-2"><span>✅</span> +4.500 Blocos DWG organizados</li>
              <li className="flex gap-2"><span>✅</span> +15.000 Blocos DWG extras</li>
              <li className="flex gap-2"><span>✅</span> +300 Hachuras Profissionais</li>
              <li className="flex gap-2"><span>✅</span> Pack de Plotagem Automática</li>
              <li className="flex gap-2"><span>✅</span> Kit de Pranchas ABNT</li>
              <li className="flex gap-2"><span>✅</span> +200 Blocos Dinâmicos</li>
              <li className="flex gap-2"><span>✅</span> Instalador AutoCAD 2026</li>
              <li className="flex gap-2"><span className="text-primary">★</span> 5 Agentes de IA</li>
              <li className="flex gap-2"><span>✅</span> Grupo Network VIP</li>
              <li className="flex gap-2"><span>✅</span> Certificado Autodesk 20h</li>
              <li className="flex gap-2"><span>✅</span> 14 dias de garantia</li>
            </ul>

            <div className="border-t border-border my-4" />

            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-xs bg-danger/20 text-danger font-bold px-2 py-0.5 rounded">-92% OFF</span>
              <span className="text-muted-foreground line-through text-sm">R$297,00</span>
            </div>
            <div className="flex items-baseline justify-center mb-4" style={{ textShadow: '0 0 30px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--primary) / 0.3)' }}>
              <span className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold">R$</span>
              <span className="font-display text-7xl sm:text-8xl md:text-9xl font-bold text-gradient-gold">24,90</span>
            </div>

            <motion.a
              href="https://pay.wiapy.com/5xnUmUDYB"
              className="block text-center bg-gradient-gold text-primary-foreground font-display font-bold py-3 text-lg sm:text-xl rounded-lg shadow-gold animate-pulse-gold w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              → QUERO O PACK PRO
            </motion.a>

            <div className="flex items-center justify-center gap-1 mt-3 text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
              <Infinity size={12} className="shrink-0" /><span>Acesso vitalício</span>
              <span>·</span>
              <ShieldCheck size={12} className="shrink-0" /><span>14 dias de garantia</span>
              <span>·</span>
              <Award size={12} className="shrink-0" /><span>Certificado Incluso</span>
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
            Valor real dos bônus: <span className="line-through">R$ 297,00</span>
          </p>
          <p className="text-primary font-display font-bold text-lg">Você paga apenas R$ 24,90</p>
          <p className="text-success text-xs font-bold mt-1">Economia de 92%</p>
          <AutodeskBadge variant="inline" className="mt-2 justify-center" />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
