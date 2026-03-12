import { motion } from "framer-motion";
import { Shield, Zap, Lock, CreditCard } from "lucide-react";
import AutodeskBadge from "./AutodeskBadge";

const checklist = [
  { icon: "✔", text: "+4.500 Blocos DWG organizados" },
  { icon: "✔", text: "+15.000 Blocos DWG extras" },
  { icon: "✔", text: "+300 Hachuras Profissionais" },
  { icon: "✔", text: "Sistema de Plotagem Automática" },
  { icon: "✔", text: "Kit Escritório Profissional" },
  { icon: "✔", text: "+200 Blocos Dinâmicos" },
  { icon: "✔", text: "Grupo Network" },
  { icon: "✔", text: "Guia de Instalação AutoCAD" },
  { icon: "⭐", text: "Prompts de IA para Arquitetos", highlight: true },
  { icon: "✔", text: "Grupo VIP (acesso vitalício)" },
  { icon: "✔", text: "Certificado de Capacitação (20h)" },
  { icon: "✔", text: "14 dias de garantia" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container max-w-xl mx-auto px-4">
        <motion.div
          className="relative bg-card border-2 border-primary rounded-2xl overflow-hidden shadow-gold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top badge */}
          <div className="bg-gradient-gold text-center py-2.5">
            <span className="text-primary-foreground font-display font-bold text-sm tracking-wide">
              🔥 OFERTA ESPECIAL DE LANÇAMENTO
            </span>
          </div>

          <div className="p-8 sm:p-10">
            {/* 1 — Value Stack */}
            <h3 className="font-display text-lg font-bold text-center mb-6">
              Tudo que você recebe hoje
            </h3>

            <ul className="space-y-3 mb-8">
              {checklist.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm">
                  <span className={item.highlight ? "text-primary" : "text-success"}>
                    {item.icon}
                  </span>
                  <span className={item.highlight ? "text-primary font-semibold" : "text-foreground"}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="h-px bg-border mb-8" />

            {/* 2 — Price Anchor */}
            <p className="text-center text-muted-foreground text-sm mb-2">
              Valor total: <span className="line-through">R$ 762,00</span>
            </p>

            {/* 3 — Big Price */}
            <p className="text-center font-display text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
              Hoje você paga apenas
            </p>
            <p className="text-center font-display text-6xl sm:text-7xl font-bold text-gradient-gold leading-none mb-2">
              R$24,90
            </p>
            <p className="text-center text-muted-foreground text-xs mb-8">
              Pagamento único · Acesso imediato
            </p>

            {/* 4 — CTA */}
            <motion.a
              href="https://pay.wiapy.com/5xnUmUDYB"
              className="block w-full text-center bg-gradient-gold text-primary-foreground font-display font-bold text-lg py-4 rounded-xl shadow-gold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              → QUERO O PACK PRO
            </motion.a>

            {/* 5 — Trust */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Lock className="w-4 h-4 text-success shrink-0" />
                <span>Compra 100% segura. Dados protegidos por criptografia SSL.</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Zap className="w-4 h-4 text-primary shrink-0" />
                <span>Acesso imediato após a compra.</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Shield className="w-4 h-4 text-success shrink-0" />
                <span>Garantia incondicional de 14 dias.</span>
              </div>
            </div>

            {/* Payment icons */}
            <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground/60">
              <CreditCard className="w-6 h-6" />
              <span className="text-[10px] font-bold tracking-wider uppercase">Visa</span>
              <span className="text-[10px] font-bold tracking-wider uppercase">Master</span>
              <span className="text-[10px] font-bold tracking-wider uppercase">Pix</span>
              <span className="text-[10px] font-bold tracking-wider uppercase">PayPal</span>
            </div>

            <AutodeskBadge variant="inline" className="mt-4 justify-center" />
          </div>
        </motion.div>

        {/* 6 — Micro Social Proof */}
        <motion.p
          className="text-center text-muted-foreground text-xs mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Mais de 4.000 arquitetos já utilizam essa biblioteca.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
