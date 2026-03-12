import { motion } from "framer-motion";

const bonuses = [
  { num: "01", title: "+15.000 Blocos DWG Extras", desc: "Acervo adicional organizado por categorias para todos os tipos de projeto.", price: "R$ 97" },
  { num: "02", title: "+300 Hachuras Profissionais", desc: "Madeiras, pedras, concretos, cerâmicas e revestimentos modernos para suas pranchetas.", price: "R$ 47" },
  { num: "03", title: "Template de Plotagem Automático", desc: "Layouts A0 A1 A2 A3 A4 com CTB prontos. Configure uma vez, plote para sempre.", price: "R$ 57" },
  { num: "04", title: "Anotações e Legendas Pro", desc: "Carimbos, legendas e símbolos com padrão de escritório profissional.", price: "R$ 67" },
  { num: "05", title: "+200 Blocos Dinâmicos", desc: "Blocos inteligentes com parâmetros editáveis: portas, janelas, escadas e mobiliário com variações automáticas.", price: "R$ 87" },
  { num: "06", title: "Kit de Pranchas BR", desc: "Templates de prancha no padrão ABNT prontos para uso imediato. Residencial, comercial e institucional.", price: "R$ 97" },
  { num: "07", title: "+100 Atalhos AutoCAD", desc: "Os 100 atalhos de teclado mais usados por arquitetos profissionais. Economize horas toda semana.", price: "R$ 37" },
  { num: "08", title: "Guia de Instalação AutoCAD 2026", desc: "Passo a passo completo para instalar e configurar o AutoCAD 2026 do zero.", price: "R$ 27" },
  { num: "09", title: "5 Prompts de IA para Arquitetos", desc: "Os prompts exatos para transformar plantas e renders em imagens profissionais usando IA, sem computador potente.", price: "R$ 47" },
  { num: "10", title: "Certificado de Conclusão", desc: "Certificado digital com sua conclusão do Pack AutoCAD Pro para adicionar ao currículo e LinkedIn.", price: "R$ 27" },
  { num: "11", title: "Grupo Network Exclusivo", desc: "Acesso ao grupo fechado de arquitetos e estudantes para trocar projetos, indicações e oportunidades.", price: null },
];

const BonusSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">🎁 Bônus exclusivos</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Você ainda leva <span className="text-gradient-gold">11 bônus grátis</span>
          </h2>
          <p className="text-muted-foreground">Incluídos apenas no Pacote Pro.</p>
        </motion.div>

        <motion.div
          className="space-y-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {bonuses.map((b) => (
            <div
              key={b.num}
              className="bg-gradient-card border border-border border-l-4 border-l-primary rounded-lg p-5 flex gap-4 items-start"
            >
              <span className="font-display text-2xl font-bold text-primary/30 shrink-0">{b.num}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-display font-bold text-base">{b.title}</h3>
                  <span className="text-xs bg-success/20 text-success font-bold px-2 py-0.5 rounded">GRÁTIS</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-1">{b.desc}</p>
                {b.price ? (
                  <span className="text-muted-foreground text-xs">De <span className="line-through">{b.price}</span> → GRÁTIS</span>
                ) : (
                  <span className="text-primary text-xs font-semibold">EXCLUSIVO — Não vendido separado</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Value Banner */}
        <motion.div
          className="border border-primary/40 rounded-xl p-8 text-center my-12"
          style={{ background: "rgba(200,169,110,0.08)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-2">TUDO ISSO SOMADO VALE</p>
          <p className="font-display text-5xl sm:text-6xl font-extrabold text-foreground mb-2">R$590,00</p>
          <p className="text-primary font-display font-bold text-lg mb-1">Você leva por apenas R$24,90</p>
          <p className="text-muted-foreground text-sm">Isso é 95% de desconto</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
