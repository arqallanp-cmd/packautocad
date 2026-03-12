import { motion } from "framer-motion";
import {
  Blocks,
  Layers,
  Printer,
  StickyNote,
  Move3D,
  Keyboard,
  Monitor,
  Sparkles,
} from "lucide-react";

const bonuses = [
  { num: "01", title: "+15.000 Blocos DWG Extras", desc: "Biblioteca adicional organizada por categorias.", price: "R$ 197", icon: Blocks },
  { num: "02", title: "+300 Hachuras Profissionais", desc: "Materiais realistas para pranchas arquitetônicas.", price: "R$ 97", icon: Layers },
  { num: "03", title: "Sistema de Plotagem Automática", desc: "Templates A0 A1 A2 A3 A4 com CTB configurado.", price: "R$ 97", icon: Printer },
  { num: "04", title: "Kit Escritório Profissional", desc: "Carimbos, símbolos e legendas padrão escritório.", price: "R$ 127", icon: StickyNote },
  { num: "05", title: "+200 Blocos Dinâmicos", desc: "Portas, janelas e mobiliário com parâmetros editáveis.", price: "R$ 87", icon: Move3D },
  { num: "06", title: "+100 Atalhos AutoCAD", desc: "Atalhos usados por arquitetos profissionais.", price: "R$ 37", icon: Keyboard },
  { num: "07", title: "Guia de Instalação AutoCAD", desc: "Passo a passo completo de instalação.", price: "R$ 27", icon: Monitor },
  { num: "08", title: "Prompts de IA para Arquitetos", desc: "Prompts para transformar plantas em imagens profissionais.", price: "R$ 47", icon: Sparkles },
];

const quickStats = [
  "19.500+ blocos AutoCAD",
  "300 hachuras profissionais",
  "200 blocos dinâmicos",
  "100 atalhos AutoCAD",
];

const BonusSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-display text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            🎁 BÔNUS INCLUSOS HOJE
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Tudo que você recebe ao entrar no{" "}
            <span className="text-gradient-gold">Pack AutoCAD Pro</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-6 max-w-2xl mx-auto">
            Arquivos profissionais prontos para acelerar seus projetos no AutoCAD.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {quickStats.map((stat) => (
              <span key={stat} className="text-sm text-foreground/80 font-medium flex items-center gap-1.5">
                <span className="text-success text-xs">✔</span> {stat}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bonus Wall Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {bonuses.map((b) => (
            <motion.div
              key={b.num}
              className="group relative bg-gradient-card border border-border rounded-xl p-4 sm:p-5 flex gap-3 sm:gap-4 items-start transition-all duration-300 hover:border-primary/50"
              whileHover={{
                y: -2,
                boxShadow: "0 0 24px -8px hsl(45 100% 55% / 0.15)",
              }}
            >
              <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary/70 group-hover:text-primary transition-colors">
                <b.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-[10px] font-bold text-primary/40">#{b.num}</span>
                    <h3 className="font-display font-bold text-sm sm:text-base leading-snug">{b.title}</h3>
                  </div>
                  <span className="shrink-0 text-[10px] sm:text-xs bg-success/20 text-success font-bold px-2 py-0.5 rounded">
                    GRÁTIS
                  </span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-1.5">{b.desc}</p>
                <span className="text-muted-foreground text-[11px] sm:text-xs">
                  De <span className="line-through">{b.price}</span> →{" "}
                  <span className="text-success font-semibold">GRÁTIS</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Breakdown + Price + Guarantee */}
        <motion.div
          className="relative border border-primary/30 rounded-2xl overflow-hidden text-center"
          style={{ background: "rgba(200,169,110,0.05)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, hsl(45 100% 55% / 0.07) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 p-8 sm:p-12">
            {/* Value anchor */}
            <p className="text-muted-foreground text-sm mb-2">
              Se você fosse comprar cada recurso separadamente:
            </p>
            <p className="font-display text-5xl sm:text-7xl font-extrabold text-foreground mb-1 leading-none">
              R$716<span className="text-muted-foreground text-2xl sm:text-3xl">,00</span>
            </p>

            <div className="w-16 h-px bg-primary/30 mx-auto my-6" />

            <p className="text-muted-foreground text-sm mb-1">
              Hoje você recebe tudo incluso no Pack AutoCAD Pro.
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Hoje você garante acesso completo por apenas
            </p>
            <p className="font-display text-4xl sm:text-6xl font-extrabold text-gradient-gold mb-3 leading-none">
              R$24,90
            </p>
            <p className="text-success text-sm font-bold mb-8">95% de desconto</p>

            {/* Guarantee */}
            <div className="border-t border-border pt-6">
              <p className="text-foreground font-display font-bold text-sm sm:text-base mb-2">
                🔒 Garantia incondicional de 14 dias
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Teste todos os arquivos. Se não achar que valeu a pena, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
