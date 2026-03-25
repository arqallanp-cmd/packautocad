import { motion } from "framer-motion";
import { Infinity, ShieldCheck, Award } from "lucide-react";
import AutodeskBadge from "../AutodeskBadge";

const PricingSection37 = () => {
  return (
    <section id="pricing" className="bg-background py-[30px] lg:py-[60px]">
      <div className="container max-w-5xl lg:max-w-[1200px] mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm lg:text-base font-semibold tracking-widest uppercase mb-3">Garanta sua licença</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">Acesso imediato</h2>
        </motion.div>

        <div className="flex justify-center max-w-lg mx-auto">
          {/* Pro */}
          <motion.div
            className="relative bg-card border-2 border-primary rounded-xl p-10 flex flex-col w-full shadow-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground font-display font-bold text-xs px-4 py-1 rounded-full animate-pulse-gold">
              🔥 Mais vendido
            </div>

            <p className="font-display font-semibold text-primary text-sm mb-1 text-center">🎁 BÔNUS INCLUSOS</p>
            <h3 className="font-display sm:text-3xl font-bold mb-0 text-center text-3xl mx-0 my-0 px-0 py-0">Licença Vitalícia AutoCAD Pro</h3>

            <div className="text-center mb-4 mt-2">
              <span className="text-muted-foreground line-through text-sm">Valor total: R$164,00</span>
            </div>

            <ul className="space-y-3 mb-6 text-base">
              <li className="flex gap-2"><span>✅</span> +4.500 Blocos DWG organizados</li>
              <li className="flex gap-2"><span>✅</span> +15.000 Blocos DWG extras</li>
              <li className="flex gap-2"><span>✅</span> +300 Hachuras Profissionais</li>
              <li className="flex gap-2"><span>✅</span> Pack de Plotagem Automática</li>
              <li className="flex gap-2"><span>✅</span> Kit de Pranchas ABNT</li>
              <li className="flex gap-2"><span>✅</span> +200 Blocos Dinâmicos</li>
              <li className="flex gap-2"><span>✅</span> Guia Autodesk Education (acesso gratuito oficial)</li>
              <li className="flex gap-2"><span>✅</span> Grupo Network VIP</li>
              <li className="flex gap-2"><span>✅</span> Certificado Autodesk 20h</li>
              <li className="flex gap-2"><span>✅</span> 14 dias de garantia</li>
            </ul>

            <div className="border-t border-border my-4" />

            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-xs bg-danger/20 text-danger font-bold px-2 py-0.5 rounded">-71% OFF</span>
              <span className="text-muted-foreground line-through text-sm">R$164,00</span>
            </div>
            <div
              className="flex items-baseline justify-center mb-4"
              style={{ textShadow: '0 0 30px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--primary) / 0.3)' }}
            >
              <span className="font-display sm:text-5xl text-gradient-gold font-normal text-2xl">R$</span>
              <span className="font-display sm:text-8xl md:text-9xl font-bold text-gradient-gold text-8xl">47,00</span>
            </div>

            <motion.a
              href="https://pay.wiapy.com/"
              className="btn-compra block text-center bg-gradient-gold text-primary-foreground font-display font-bold py-3 text-lg sm:text-xl rounded-lg shadow-gold animate-pulse-gold w-full max-w-[320px] lg:max-w-none whitespace-nowrap mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              → GARANTIR MINHA LICENÇA
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
            Valor real dos bônus: <span className="line-through">R$ 222,00</span>
          </p>
          <p className="text-primary font-display font-bold text-lg">Você paga apenas R$ 47,00</p>
          <p className="text-success text-xs font-bold mt-1">Economia de 71%</p>
          <AutodeskBadge variant="inline" className="mt-2 justify-center" />
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection37;
