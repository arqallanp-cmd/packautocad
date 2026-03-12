import { motion } from "framer-motion";
import { Layers, PenTool, Printer, Stamp, DoorOpen, Keyboard, BookOpen, Sparkles } from "lucide-react";

const bonuses = [
  { num: "01", title: "+15.000 Blocos DWG Extras", desc: "Biblioteca adicional organizada por categorias.", oldPrice: "R$197", icon: Layers },
  { num: "02", title: "+300 Hachuras Profissionais", desc: "Materiais realistas para pranchas arquitetônicas.", oldPrice: "R$97", icon: PenTool },
  { num: "03", title: "Sistema de Plotagem Automática", desc: "Templates A0 A1 A2 A3 A4 com CTB configurado.", oldPrice: "R$97", icon: Printer },
  { num: "04", title: "Kit Escritório Profissional", desc: "Carimbos, símbolos e legendas padrão escritório.", oldPrice: "R$127", icon: Stamp },
  { num: "05", title: "+200 Blocos Dinâmicos", desc: "Portas, janelas e mobiliário com parâmetros editáveis.", oldPrice: "R$87", icon: DoorOpen },
  { num: "06", title: "+100 Atalhos AutoCAD", desc: "Atalhos usados por arquitetos profissionais.", oldPrice: "R$37", icon: Keyboard },
  { num: "07", title: "Guia de Instalação AutoCAD", desc: "Passo a passo completo de instalação.", oldPrice: "R$27", icon: BookOpen },
  { num: "08", title: "Prompts de IA para Arquitetos", desc: "Prompts para transformar plantas em imagens profissionais.", oldPrice: "R$47", icon: Sparkles },
];

const stats = [
  "19.500+ blocos AutoCAD",
  "300 hachuras profissionais",
  "200 blocos dinâmicos",
  "100 atalhos AutoCAD",
];

const BonusSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-xs font-bold tracking-[0.2em] uppercase mb-3">🎁 BÔNUS INCLUSOS HOJE</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-3">
            Tudo que você recebe ao entrar no{" "}
            <span className="text-gradient-gold">Pack AutoCAD Pro</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Arquivos profissionais prontos para acelerar seus projetos no AutoCAD.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {stats.map((s) => (
              <span key={s} className="text-sm font-medium text-foreground/80 flex items-center gap-1.5">
                <span className="text-success">✔</span> {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bonus Wall */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {bonuses.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.num}
                className="group relative bg-gradient-card border border-border rounded-xl p-5 flex gap-4 items-start transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_24px_-6px_hsl(45_100%_55%/0.15)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
              >
                {/* Icon */}
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="text-primary/40 font-display text-xs font-bold mr-2">BONUS {b.num}</span>
                      <h3 className="font-display font-bold text-sm sm:text-base leading-snug">{b.title}</h3>
                    </div>
                    <span className="shrink-0 text-[10px] bg-success/20 text-success font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Grátis
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-2 line-clamp-2">{b.desc}</p>

                  <p className="text-muted-foreground text-xs">
                    De <span className="line-through">{b.oldPrice}</span>{" "}
                    <span className="text-success font-semibold">→ GRÁTIS</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BonusSection;
