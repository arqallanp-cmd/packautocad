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
          
          <p className="font-display text-base font-bold text-foreground">
            ⚠ Espere! Antes de finalizar seu pedido…
          </p>
          <p className="font-body text-xs text-muted-foreground mt-0.5">
            Liberei o Pack Pro com <span className="text-primary font-semibold">30% de desconto</span> somente nesta página.
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

          {/* Value block */}
          <p className="font-body text-xs text-muted-foreground mb-1.5">Com o Pack Pro você desbloqueia:</p>
          <div className="flex flex-col gap-0.5 mb-2">
            <span className="font-body text-xs text-foreground">✔ +15.000 blocos extras</span>
            <span className="font-body text-xs text-foreground">✔ +300 hachuras profissionais</span>
            <span className="font-body text-xs text-foreground">✔ +200 blocos dinâmicos</span>
            <span className="font-body text-xs text-foreground">✔ prompts de IA para arquitetos</span>
            <span className="font-body text-xs text-foreground">✔ acesso ao grupo VIP</span>
          </div>

          {/* Price line */}
          <p className="font-display text-sm font-bold text-foreground mb-3">
            Tudo isso por apenas <span className="text-primary">R$8 a mais</span>.
          </p>

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
            <div className="flex items-baseline justify-center">
              <span className="font-display text-primary font-extrabold leading-none text-7xl">
                R$17,90
              </span>
            </div>
          </div>

          {/* CTA button */}
          <a href="https://pay.wiapy.com/Anzl2Aiwf7"
            className="btn-compra flex items-center justify-center w-full font-display uppercase rounded-full py-4 px-4 hover:scale-[1.02] transition-all animate-pulse-gold text-center leading-tight whitespace-normal break-words text-[15px] sm:text-base font-bold"
            style={{
              backgroundColor: 'hsl(45 100% 55%)',
              color: 'hsl(220 20% 4%)',
              boxShadow: '0 8px 24px rgba(246,184,26,0.35)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(45 100% 65%)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(45 100% 55%)'}
          >
            SIM, QUERO LIBERAR TODOS OS BÔNUS 🚀
          </a>

          {/* Below button text */}
          <p className="text-center mt-1.5 font-body text-[10px] text-muted-foreground/60">
            Acesso vitalício · 14 dias de garantia · Somente hoje   
          </p>
        </motion.div>

        {/* Decline button */}
        <a
          href="https://pay.wiapy.com/kxQXZSPzi7"
          className="text-center block font-body rounded-lg py-2 px-3 transition-all text-[13px] font-normal"
          style={{
            backgroundColor: 'hsl(220 18% 14%)',
            color: 'hsl(215 10% 68%)',
            border: '1px solid hsl(215 15% 22%)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(220 18% 18%)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(220 18% 14%)'}
        >
          Não, quero apenas os 4.500 blocos 😢
        </a>
      </div>
    </div>);

};

export default Upsell;