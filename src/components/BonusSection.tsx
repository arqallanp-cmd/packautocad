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
  { num: "01", title: "+15.000 Blocos DWG Extras", desc: "Biblioteca adicional organizada por categorias.", price: "R$197", icon: Blocks },
  { num: "02", title: "+300 Hachuras Profissionais", desc: "Materiais realistas para pranchas arquitetônicas.", price: "R$97", icon: Layers },
  { num: "03", title: "Sistema de Plotagem Automática", desc: "Templates A0 A1 A2 A3 A4 com CTB configurado.", price: "R$97", icon: Printer },
  { num: "04", title: "Kit Escritório Profissional", desc: "Carimbos, símbolos e legendas padrão escritório.", price: "R$127", icon: StickyNote },
  { num: "05", title: "+200 Blocos Dinâmicos", desc: "Portas, janelas e mobiliário com parâmetros editáveis.", price: "R$87", icon: Move3D },
  { num: "06", title: "+100 Atalhos AutoCAD", desc: "Atalhos usados por arquitetos profissionais.", price: "R$37", icon: Keyboard },
  { num: "07", title: "Guia de Instalação AutoCAD", desc: "Passo a passo completo de instalação.", price: "R$27", icon: Monitor },
  { num: "08", title: "Prompts de IA para Arquitetos", desc: "Prompts para transformar plantas em imagens profissionais.", price: "R$47", icon: Sparkles },
];

const BonusSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-card">
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
            🎁 TUDO QUE VOCÊ RECEBE HOJE
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            Produto principal + <span className="text-gradient-gold">8 bônus gratuitos</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Tudo incluso no pack — sem custo adicional.
          </p>
        </motion.div>

        {/* Main product card */}
        <motion.div
          className="border-2 border-primary/40 rounded-xl p-5 sm:p-6 mb-4 flex items-center gap-4 bg-background"
          style={{ boxShadow: "0 0 30px -8px hsl(45 100% 55% / 0.12)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
            <Blocks className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-bold text-base sm:text-lg text-foreground">
                +4.500 Blocos AutoCAD Organizados
              </h3>
              <span className="shrink-0 text-xs bg-primary/20 text-primary font-bold px-2.5 py-0.5 rounded">
                PRINCIPAL
              </span>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">Biblioteca profissional completa, organizada por pastas e pronta para usar.</p>
          </div>
        </motion.div>

        {/* Bonus grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {bonuses.map((b) => (
            <motion.div
              key={b.num}
              className="group bg-background border border-border rounded-xl p-4 sm:p-5 flex gap-3 sm:gap-4 items-start transition-all duration-300 hover:border-primary/50"
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
      </div>
    </section>
  );
};

export default BonusSection;
