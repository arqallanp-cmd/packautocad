import { motion } from "framer-motion";

const checkItems = [
  "Tudo do Pacote Básico",
  "+15.000 Blocos Extras",
  "Pack de Hachuras Profissionais",
  "Template de Plotagem .ctb",
  "Anotações e Legendas Pro",
];

const bonusItems = [
  { emoji: "🎁", text: "5 Prompts de IA para Arquitetos", value: "R$47" },
  { emoji: "⚡", text: "Acesso Vitalício a Atualizações", value: "R$37" },
  { emoji: "🛡️", text: "Garantia Ampliada de 14 dias", value: "R$27" },
  { emoji: "🎓", text: "Acesso prioritário a novos packs", value: "R$57" },
];

const Upsell = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 bg-background bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06)_0%,transparent_60%)]">
      <div className="w-full max-w-[480px] flex flex-col gap-6">
        {/* Warning bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center rounded-[10px] p-3 px-4 border border-primary/30 bg-primary/10"
        >
          <p className="font-body text-xs uppercase text-primary/70 tracking-wider mb-1.5">
            ⚠️ ESPERA! VOCÊ ESTÁ PRESTES A PEGAR A VERSÃO BÁSICA
          </p>
          <p className="font-display text-xl font-bold text-foreground">
            Garanta o Pack Pro por apenas R$10 a mais
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-primary/30 rounded-2xl p-6"
        >
          {/* Top badges */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-body text-[11px] uppercase tracking-widest text-primary font-semibold">
              PRO VERSION
            </span>
            <span className="bg-primary text-primary-foreground font-body text-[11px] font-bold rounded-full px-3 py-1 uppercase">
              MELHOR ESCOLHA 🔥
            </span>
          </div>

          {/* Checklist */}
          <p className="mb-3 font-body text-[13px] text-muted-foreground uppercase tracking-wider font-semibold">
            Incluso no Pro
          </p>
          <div className="flex flex-col gap-2.5 mb-6">
            {checkItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-primary text-base font-bold">✓</span>
                <span className="font-body text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>

          {/* Divider with label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-primary/20" />
            <span className="font-body text-[11px] uppercase tracking-widest text-primary font-semibold whitespace-nowrap">
              BÔNUS EXCLUSIVOS
            </span>
            <div className="flex-1 h-px bg-primary/20" />
          </div>

          {/* Bonus items */}
          <div className="flex flex-col gap-3 mb-8">
            {bonusItems.map((b) => (
              <div
                key={b.text}
                className="flex items-center justify-between border-l-2 border-primary/40 pl-3 py-1.5"
              >
                <span className="font-body text-sm text-foreground">
                  {b.emoji} {b.text}
                </span>
                <span className="font-body text-[13px] text-primary/50 line-through whitespace-nowrap ml-2">
                  {b.value}
                </span>
              </div>
            ))}
          </div>

          {/* Value stack */}
          <div className="text-center mb-6">
            <p className="font-body text-sm text-muted-foreground">
              Valor total:{" "}
              <span className="line-through">R$268,00</span>
            </p>
            <p className="font-display text-primary font-extrabold text-[52px] leading-none my-2">
              R$17,90
            </p>
            <p className="font-body text-[13px] text-muted-foreground">
              hoje — pagamento único
            </p>
          </div>

          {/* CTA button */}
          <a
            href="#"
            className="flex items-center justify-center w-full bg-gradient-gold text-primary-foreground font-display font-bold text-[15px] uppercase rounded-full py-[18px] px-6 shadow-gold hover:scale-[1.02] transition-transform animate-pulse-gold"
          >
            🚀&nbsp; SIM, QUERO O PACK PRO &nbsp;✦
          </a>

          {/* Below button text */}
          <p className="text-center mt-3 font-body text-[11px] text-muted-foreground/60">
            Acesso imediato · 14 dias de garantia · Sem mensalidade
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-border/30" />

        {/* Decline link */}
        <a
          href="#"
          className="text-center block font-body text-[13px] text-muted-foreground underline cursor-pointer hover:text-foreground transition-colors"
        >
          Não, prefiro continuar com o básico
        </a>
      </div>
    </div>
  );
};

export default Upsell;
