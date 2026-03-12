import { motion } from "framer-motion";
import { Shield, Zap, Lock, BadgeCheck, Star } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          className="relative bg-card border-2 border-primary rounded-2xl overflow-hidden shadow-gold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Top badge */}
          <div className="bg-gradient-gold text-primary-foreground text-center py-2.5 font-display font-bold text-sm tracking-wide animate-pulse-gold">
            🔥 Mais vendido — Pack AutoCAD Pro
          </div>

          <div className="p-8 sm:p-10">
            {/* 1 — Value Stack */}
            <p className="font-display font-bold text-lg sm:text-xl text-foreground mb-5">
              Tudo que você recebe hoje:
            </p>
            <ul className="space-y-2.5 mb-8 text-sm sm:text-base">
              {[
                "+4.500 Blocos DWG organizados",
                "+15.000 Blocos DWG extras",
                "+300 Hachuras Profissionais",
                "Sistema de Plotagem Automática",
                "Kit Escritório Profissional",
                "+200 Blocos Dinâmicos",
                "Grupo Network",
                "Guia de Instalação AutoCAD",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-success mt-0.5">✔</span>
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <Star className="w-4 h-4 text-primary mt-0.5 fill-primary" />
                <span className="text-primary font-semibold">Prompts de IA para Arquitetos</span>
              </li>
              {[
                "Grupo VIP (acesso vitalício)",
                "Certificado de Capacitação (20h)",
                "14 dias de garantia",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-success mt-0.5">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="border-t border-border my-8" />

            {/* 2 — Price Anchor */}
            <p className="text-center text-muted-foreground text-sm mb-1">
              Valor total: <span className="line-through">R$ 762,00</span>
            </p>

            {/* 3 — Big Price */}
            <p className="text-center font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Hoje você paga apenas
            </p>
            <p className="text-center font-display font-extrabold text-6xl sm:text-7xl text-gradient-gold leading-none mb-2">
              R$24,90
            </p>
            <p className="text-center text-muted-foreground text-xs sm:text-sm mb-8">
              Pagamento único · Acesso imediato
            </p>

            {/* 4 — CTA Button */}
            <motion.a
              href="https://pay.wiapy.com/5xnUmUDYB"
              className="block w-full text-center bg-gradient-gold text-primary-foreground font-display font-bold text-lg py-4 rounded-xl shadow-gold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              → QUERO O PACK PRO
            </motion.a>

            {/* 5 — Trust / Guarantee */}
            <div className="mt-8 space-y-3 text-center text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-4 h-4 text-success" />
                <span>Compra 100% segura — dados protegidos por criptografia SSL</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Acesso imediato após a compra</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span>Garantia incondicional de 14 dias</span>
              </div>
            </div>

            {/* Payment icons */}
            <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground text-[10px] sm:text-xs font-display font-semibold tracking-wider">
              {["Visa", "Mastercard", "Pix", "PayPal", "Mercado Pago"].map((m) => (
                <span key={m} className="opacity-60">{m}</span>
              ))}
            </div>

            {/* 6 — Micro Social Proof */}
            <p className="text-center text-muted-foreground text-xs mt-6">
              Mais de <span className="text-foreground font-semibold">4.000 arquitetos</span> já utilizam essa biblioteca.
            </p>

            {/* Autodesk badge */}
            <div className="flex justify-center mt-4">
              <div className="inline-flex items-center gap-1.5 text-primary text-[10px] sm:text-xs font-display font-semibold tracking-wide">
                <BadgeCheck className="w-3.5 h-3.5" />
                Compatível com Autodesk® AutoCAD®
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
