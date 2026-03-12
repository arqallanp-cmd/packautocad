import { motion } from "framer-motion";

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

        <div className="flex flex-col items-center gap-6 max-w-[420px] mx-auto">
          {/* Basic Plan */}
          <motion.div
            className="w-full rounded-2xl p-8 sm:p-10 flex flex-col items-center"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <p className="font-display font-semibold text-primary text-sm mb-6">Pack AutoCAD</p>

            {/* Features */}
            <ul className="space-y-2.5 mb-6 w-full text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "#ccc", fontSize: "14px" }}>
              <li className="flex gap-2"><span className="text-success">✓</span> +4.500 Blocos DWG organizados</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Hachuras básicas incluídas</li>
              <li className="flex gap-2"><span className="text-success">✓</span> Acesso imediato</li>
              <li className="flex gap-2"><span className="text-success">✓</span> 7 dias de garantia</li>
            </ul>

            {/* Divider */}
            <div className="w-full h-px mb-6" style={{ background: "rgba(255,255,255,0.08)" }} />

            {/* Anchor price */}
            <p className="text-sm line-through text-center mb-2" style={{ color: "#888" }}>De R$49,90</p>

            {/* Price */}
            <p className="text-center font-display font-extrabold text-foreground mb-1" style={{ fontSize: "72px", lineHeight: 1 }}>
              <span className="hidden sm:inline" style={{ fontSize: "88px" }}>R$9,90</span>
              <span className="sm:hidden">R$9,90</span>
            </p>

            {/* Sub-price */}
            <p className="text-center text-xs mb-8" style={{ fontFamily: "'DM Sans', sans-serif", color: "#888" }}>
              Pagamento único · Acesso imediato · Sem mensalidade
            </p>

            {/* CTA */}
            <a
              href="/upgrade"
              className="block w-full text-center font-display font-bold text-sm uppercase tracking-wide"
              style={{
                background: "rgba(200,169,110,0.15)",
                border: "1px solid #c8a96e",
                color: "#c8a96e",
                padding: "16px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              Comprar Básico
            </a>

            {/* Security */}
            <p className="text-center mt-4 text-xs" style={{ color: "#555", fontSize: "11px" }}>
              🔒 Compra 100% segura · Acesso imediato após pagamento
            </p>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="relative w-full rounded-2xl p-8 sm:p-10 flex flex-col items-center"
            style={{
              background: "rgba(200,169,110,0.06)",
              border: "2px solid #c8a96e",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Badge */}
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 font-display font-extrabold uppercase tracking-wider"
              style={{
                background: "#c8a96e",
                color: "#000",
                fontSize: "11px",
                borderRadius: "999px",
                padding: "5px 16px",
                fontWeight: 800,
                whiteSpace: "nowrap",
              }}
            >
              ✦ MAIS VENDIDO ✦
            </div>

            {/* Label */}
            <p className="font-display font-semibold text-primary text-sm mt-2 mb-2">Pack AutoCAD Pro — Completo</p>

            {/* Crossed total */}
            <p className="line-through text-center mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#666" }}>
              Valor total: R$762,00
            </p>

            {/* Features */}
            <ul className="space-y-2.5 mb-6 w-full" style={{ fontFamily: "'DM Sans', sans-serif", color: "#ccc", fontSize: "14px" }}>
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

            {/* Divider */}
            <div className="w-full h-px mb-6" style={{ background: "rgba(200,169,110,0.2)" }} />

            {/* OFF badge + anchor */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <span
                className="font-bold"
                style={{
                  background: "rgba(239,68,68,0.15)",
                  color: "#ef4444",
                  borderRadius: "4px",
                  padding: "2px 8px",
                  fontSize: "11px",
                }}
              >
                -97% OFF
              </span>
              <span className="line-through" style={{ color: "#666", fontSize: "13px" }}>R$762,00</span>
            </div>

            {/* Price */}
            <p className="text-center font-display font-extrabold mb-1" style={{ color: "#c8a96e", lineHeight: 1 }}>
              <span className="hidden sm:inline" style={{ fontSize: "96px" }}>R$24,90</span>
              <span className="sm:hidden" style={{ fontSize: "80px" }}>R$24,90</span>
            </p>

            {/* Sub-price */}
            <p className="text-center mb-8" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#888" }}>
              Pagamento único · Acesso imediato
            </p>

            {/* CTA */}
            <motion.a
              href="https://pay.wiapy.com/5xnUmUDYB"
              className="block w-full text-center font-display font-extrabold uppercase"
              style={{
                background: "#c8a96e",
                color: "#000",
                fontSize: "15px",
                padding: "20px",
                borderRadius: "999px",
                letterSpacing: "0.5px",
                boxShadow: "0 0 32px rgba(200,169,110,0.35)",
                fontWeight: 800,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              → QUERO O PACK PRO
            </motion.a>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4" style={{ fontSize: "11px", color: "#666" }}>
              <span>✓ Acesso imediato</span>
              <span>✓ 14 dias garantia</span>
              <span>✓ Pag. único</span>
            </div>

            {/* Payment icons */}
            <p className="text-center mt-3" style={{ fontSize: "11px", color: "#444" }}>
              VISA · Mastercard · PIX · Boleto
            </p>
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
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
