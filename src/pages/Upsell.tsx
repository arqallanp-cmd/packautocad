import { motion } from "framer-motion";

const checkItems = [
"Tudo do Pacote Básico",
"+15.000 Blocos DWG Extras",
"+300 Hachuras Profissionais",
"Pack de Plotagem Automática",
"Kit de Pranchas ABNT",
"+200 Blocos Dinâmicos"];


const bonusItems = [
{ emoji: "💻", text: "Instalador AutoCAD 2026", value: "R$47" },
{ emoji: "⭐", text: "5 Agentes de IA", value: "R$57" },
{ emoji: "👥", text: "Grupo Network VIP", value: "R$37" },
{ emoji: "🎓", text: "Certificado Autodesk 20h", value: "R$27" }];


const Upsell = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-3 py-4 bg-background bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06)_0%,transparent_60%)]">
      <div className="w-full max-w-[420px] flex flex-col gap-3">
        {/* Warning bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center rounded-lg py-2 px-3 border border-primary/30 bg-primary/10">
          
          <p className="font-body text-[10px] uppercase text-primary/70 tracking-wider mb-0.5">
            ⚠️ ESPERA! VOCÊ ESTÁ PRESTES A PEGAR A VERSÃO BÁSICA
          </p>
          <p className="font-display text-base font-bold text-foreground">
            Upgrade pro Pack Pro por apenas <span className="text-primary">R$8 a mais</span>
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-primary/30 rounded-xl p-4">
          
          {/* Top badges */}
          <div className="flex items-center justify-between mb-3">
            <span className="font-body text-[10px] uppercase tracking-widest text-primary font-semibold">
              PRO VERSION
            </span>
            <span className="bg-primary text-primary-foreground font-body text-[10px] font-bold rounded-full px-2.5 py-0.5 uppercase">
              MELHOR ESCOLHA 🔥
            </span>
          </div>

          {/* Checklist */}
          <div className="flex flex-col gap-1 mb-3">
            {checkItems.map((item) =>
            <div key={item} className="flex items-center gap-2">
                <span className="text-primary text-xs font-bold">✓</span>
                <span className="font-body text-xs text-foreground">{item}</span>
              </div>
            )}
          </div>

          {/* Divider with label */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 h-px bg-primary/20" />
            <span className="font-body text-[9px] uppercase tracking-widest text-primary font-semibold whitespace-nowrap">
              BÔNUS EXCLUSIVOS
            </span>
            <div className="flex-1 h-px bg-primary/20" />
          </div>

          {/* Bonus items */}
          <div className="flex flex-col gap-1 mb-3">
            {bonusItems.map((b) =>
            <div
              key={b.text}
              className="flex items-center justify-between border-l-2 border-primary/40 pl-2 py-0.5">
              
                <span className="font-body text-xs text-foreground">
                  {b.emoji} {b.text}
                </span>
                <span className="font-body text-[11px] text-primary/50 line-through whitespace-nowrap ml-2">
                  {b.value}
                </span>
              </div>
            )}
          </div>

          {/* Value stack */}
          <div className="text-center mb-3">
            <p className="font-body text-xs text-muted-foreground">
              Valor total: <span className="line-through">R$297</span>
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-body text-sm text-muted-foreground line-through">
</span>
              <span className="font-display text-primary font-extrabold leading-none text-6xl">
                R$17,90
              </span>
              <span className="font-body text-xs text-muted-foreground">hoje</span>
            </div>
          </div>

          {/* CTA button */}
          <a href="https://pay.wiapy.com/Anzl2Aiwf7"
          className="flex items-center justify-center w-full bg-gradient-gold text-primary-foreground font-display font-bold text-sm uppercase rounded-full py-3.5 px-6 shadow-gold hover:scale-[1.02] transition-transform animate-pulse-gold">
            
            SIM, QUERO O PACK PRO 🚀
          </a>

          {/* Below button text */}
          <p className="text-center mt-1.5 font-body text-[10px] text-muted-foreground/60">
            Acesso imediato · 14 dias de garantia
          </p>
        </motion.div>

        {/* Decline button */}
        <a
          href="https://pay.wiapy.com/kxQXZSPzi7"
          className="text-center block font-body text-sm text-foreground/80 font-medium border border-border rounded-lg py-3.5 bg-secondary/60 hover:bg-secondary hover:border-primary/20 transition-all">
          
          Continuar com o Básico — R$9,90 🥹 
        </a>
      </div>
    </div>);

};

export default Upsell;