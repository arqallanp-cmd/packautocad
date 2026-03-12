import { motion } from "framer-motion";
import { Layers, PenTool, Printer, Stamp, DoorOpen, Keyboard, BookOpen, Sparkles, GraduationCap, Users } from "lucide-react";
import bonus09Img from "@/assets/bonus-09-certificado.jpg";
import bonus10Img from "@/assets/bonus-10-grupo-vip.jpg";

const bonuses = [
  { num: "01", title: "+15000 Blocos DWG Extras", desc: "Biblioteca adicional organizada por categorias.", oldPrice: "R$197", icon: Layers, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_400/BONUS_01_hmuolw.jpg" },
  { num: "02", title: "+300 Hachuras Profissionais", desc: "Materiais realistas para pranchas arquitetônicas.", oldPrice: "R$97", icon: PenTool, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_400/BONUS_02_whodb0.png" },
  { num: "03", title: "Sistema de Plotagem Automática", desc: "Templates A0 A1 A2 A3 A4 com CTB configurado.", oldPrice: "R$97", icon: Printer, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_400/BONUS_03_dow3f4.jpg" },
  { num: "04", title: "Kit Escritório Profissional", desc: "Carimbos, símbolos e legendas padrão escritório.", oldPrice: "R$127", icon: Stamp, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_400/BONUS_04_ohkidi.jpg" },
  { num: "05", title: "+200 Blocos Dinâmicos", desc: "Portas, janelas e mobiliário com parâmetros editáveis.", oldPrice: "R$87", icon: DoorOpen, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_400/BONUS_05_nlc4lj.png" },
  { num: "06", title: "Grupo Network", desc: "Comunidade exclusiva de profissionais AutoCAD.", oldPrice: "R$37", icon: Keyboard, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_400/BONUS_06_ayc045.jpg" },
  { num: "07", title: "Guia de Instalação AutoCAD", desc: "Passo a passo completo de instalação.", oldPrice: "R$27", icon: BookOpen, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_400/BONUS_07_esoqzr.jpg" },
  { num: "08", title: "Prompts de IA para Arquitetos", desc: "Prompts para transformar plantas em imagens profissionais.", oldPrice: "R$47", icon: Sparkles, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_400/BONUS_08_k4nrqs.jpg" },
  { num: "09", title: "Grupo VIP", subtitle: "Acesso vitalício · Comunidade fechada", desc: "", oldPrice: "R$19", icon: Users, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_400/BONUS_09_d4xgo7.jpg", pills: ["💬 Suporte da comunidade", "🤝 Indicações de projetos", "🔔 Atualizações em primeira mão"] },
  { num: "10", title: "Certificado de Capacitação", subtitle: "20 horas · Válido para faculdade e estágio", desc: "", oldPrice: "R$27", icon: GraduationCap, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/v1773343468/BONUS_10_bt9fps.jpg" },
] as const;

const stats = [
  "19500+ blocos AutoCAD",
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
          transition={{ duration: 0.5 }}
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
        <motion.div
          className="grid sm:grid-cols-2 gap-4 mb-12 items-stretch"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {bonuses.map((b) => {
            const Icon = b.icon;
            const hasImg = "img" in b && b.img;
            const hasPills = "pills" in b && b.pills;
            const hasSubtitle = "subtitle" in b && b.subtitle;
            return (
              <div
                key={b.num}
                className="group relative bg-gradient-card border border-border rounded-xl overflow-hidden transition-colors duration-300 hover:border-primary/50 flex flex-col h-full"
              >
                {/* Mockup image */}
                {hasImg && (
                  <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
                    <img src={b.img as string} alt={b.title} className="w-full h-full object-cover rounded-lg" loading="lazy" />
                  </div>
                )}

                <div className="p-5 flex gap-4 items-start flex-1">
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
                        {hasSubtitle && (
                          <p className="text-primary/60 text-xs font-medium mt-0.5">{b.subtitle as string}</p>
                        )}
                      </div>
                      <span className="shrink-0 text-[10px] bg-success/20 text-success font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Grátis
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">{b.desc}</p>

                    {hasPills && (
                      <div className="flex flex-wrap gap-1.5 mt-3 mb-2">
                        {(b.pills as readonly string[]).map((pill) => (
                          <span
                            key={pill}
                            className="text-[11px] rounded-full py-1 px-3"
                            style={{
                              background: "rgba(200,169,110,0.08)",
                              border: "1px solid rgba(200,169,110,0.25)",
                              color: "#c8a96e",
                            }}
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-muted-foreground text-xs">
                      De <span className="line-through">{b.oldPrice}</span>{" "}
                      <span className="text-success font-semibold">→ GRÁTIS</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default BonusSection;
