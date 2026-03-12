import { motion } from "framer-motion";
import {
  Blocks,
  Layers,
  Printer,
  StickyNote,
  Move3D,
  LayoutTemplate,
  Keyboard,
  Monitor,
  Sparkles,
  Award,
  Users,
} from "lucide-react";

const premiumBonuses = [
  { num: "01", title: "+15.000 Blocos DWG Extras", desc: "Acervo adicional organizado por categorias para todos os tipos de projeto.", price: "R$ 97", icon: Blocks },
  { num: "02", title: "+300 Hachuras Profissionais", desc: "Madeiras, pedras, concretos, cerâmicas e revestimentos modernos para suas pranchetas.", price: "R$ 47", icon: Layers },
  { num: "03", title: "Template de Plotagem Automático", desc: "Layouts A0 A1 A2 A3 A4 com CTB prontos. Configure uma vez, plote para sempre.", price: "R$ 57", icon: Printer },
];

const otherBonuses = [
  { num: "04", title: "Anotações e Legendas Pro", desc: "Carimbos, legendas e símbolos com padrão de escritório profissional.", price: "R$ 67", icon: StickyNote },
  { num: "05", title: "+200 Blocos Dinâmicos", desc: "Blocos inteligentes com parâmetros editáveis: portas, janelas, escadas e mobiliário.", price: "R$ 87", icon: Move3D },
  { num: "06", title: "Kit de Pranchas BR", desc: "Templates de prancha no padrão ABNT prontos para uso imediato.", price: "R$ 97", icon: LayoutTemplate },
  { num: "07", title: "+100 Atalhos AutoCAD", desc: "Os 100 atalhos mais usados por arquitetos profissionais.", price: "R$ 37", icon: Keyboard },
  { num: "08", title: "Guia de Instalação AutoCAD 2026", desc: "Passo a passo completo para instalar e configurar do zero.", price: "R$ 27", icon: Monitor },
  { num: "09", title: "5 Prompts de IA para Arquitetos", desc: "Prompts exatos para transformar plantas e renders em imagens profissionais usando IA.", price: "R$ 47", icon: Sparkles },
  { num: "10", title: "Certificado de Conclusão", desc: "Certificado digital para adicionar ao currículo e LinkedIn.", price: "R$ 27", icon: Award },
  { num: "11", title: "Grupo Network Exclusivo", desc: "Grupo fechado de arquitetos para trocar projetos, indicações e oportunidades.", price: null, icon: Users },
];

const BonusSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-display text-xs font-semibold tracking-[0.2em] uppercase mb-4">🎁 BÔNUS EXCLUSIVOS</p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Você ainda leva <span className="text-gradient-gold">11 bônus gratuitos</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-3">
            Tudo incluso no Pacote Pro — sem custo adicional
          </p>
          <p className="text-foreground font-display font-bold text-lg sm:text-xl">
            Valor total em bônus: <span className="text-gradient-gold">R$590</span>
          </p>
        </motion.div>

        {/* Premium Bonuses - Fast Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-xs font-bold tracking-wider uppercase bg-primary/15 text-primary px-3 py-1.5 rounded-full font-display">
              🔥 BÔNUS MAIS VALIOSOS
            </span>
          </div>

          <div className="grid gap-4 sm:gap-5 mb-10">
            {premiumBonuses.map((b) => (
              <motion.div
                key={b.num}
                className="group relative bg-gradient-card border-2 border-primary/40 rounded-xl p-5 sm:p-6 flex gap-4 items-start overflow-hidden transition-all duration-300 hover:border-primary/70"
                style={{
                  boxShadow: "0 0 30px -10px hsl(45 100% 55% / 0.15)",
                }}
                whileHover={{
                  boxShadow: "0 0 40px -8px hsl(45 100% 55% / 0.25)",
                }}
              >
                {/* Subtle glow bg */}
                <div className="absolute inset-0 bg-primary/[0.03] pointer-events-none" />

                <motion.div
                  className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <b.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>

                <div className="flex-1 min-w-0 relative z-10">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-xs font-bold text-primary/40">#{b.num}</span>
                      <h3 className="font-display font-bold text-base sm:text-lg">{b.title}</h3>
                    </div>
                    <span className="shrink-0 text-xs bg-success/20 text-success font-bold px-2.5 py-1 rounded-md">GRÁTIS</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">{b.desc}</p>
                  <span className="text-muted-foreground text-xs">
                    De <span className="line-through">{b.price}</span> → <span className="text-success font-semibold">GRÁTIS</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Remaining Bonuses - Compact Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {otherBonuses.map((b) => (
            <motion.div
              key={b.num}
              className="group bg-gradient-card border border-border border-l-4 border-l-primary/60 rounded-lg p-4 flex gap-3 items-start transition-all duration-300 hover:border-l-primary"
              whileHover={{
                boxShadow: "0 0 20px -8px hsl(45 100% 55% / 0.12)",
              }}
            >
              <motion.div
                className="shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary/70"
                whileHover={{ rotate: 6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <b.icon className="w-4 h-4" />
              </motion.div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-sm leading-snug">{b.title}</h3>
                  <span className="shrink-0 text-[10px] bg-success/20 text-success font-bold px-2 py-0.5 rounded">GRÁTIS</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-1">{b.desc}</p>
                {b.price ? (
                  <span className="text-muted-foreground text-[11px]">
                    De <span className="line-through">{b.price}</span> → <span className="text-success font-semibold">GRÁTIS</span>
                  </span>
                ) : (
                  <span className="text-primary text-[11px] font-semibold">EXCLUSIVO</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Breakdown */}
        <motion.div
          className="relative border border-primary/30 rounded-2xl overflow-hidden text-center"
          style={{ background: "rgba(200,169,110,0.06)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, hsl(45 100% 55% / 0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 p-8 sm:p-12">
            <p className="text-primary font-display text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              TUDO ISSO SOMADO VALE
            </p>
            <p className="font-display text-5xl sm:text-7xl font-extrabold text-foreground mb-1 leading-none">
              R$590<span className="text-muted-foreground text-2xl sm:text-3xl">,00</span>
            </p>

            <div className="w-16 h-px bg-primary/30 mx-auto my-6" />

            <p className="text-muted-foreground text-sm mb-2">Hoje você leva tudo por apenas</p>
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-gradient-gold mb-3 leading-none">
              R$24,90
            </p>
            <p className="text-success text-sm font-bold">Isso representa 95% de desconto</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
