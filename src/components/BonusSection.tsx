import { motion } from "framer-motion";

const bonuses = [
  { num: "01", title: "+15.000 Blocos Extras para AutoCAD", desc: "Acervo adicional com blocos organizados por categorias: arquitetura, interiores, mobiliário especial, paisagismo e muito mais.", price: "R$ 97 → Grátis" },
  { num: "02", title: "Pack de Hachuras Profissionais", desc: "Hachuras modernas e realistas que elevam o padrão visual das suas pranchetas: madeira, pedra, concreto aparente, cerâmica e mais.", price: "R$ 47 → Grátis" },
  { num: "03", title: "Template de Plotagem Automática", desc: "Layout e arquivo .ctb prontos e configurados. Configure uma vez, plote seus desenhos em segundos com qualidade e consistência.", price: "R$ 57 → Grátis" },
  { num: "04", title: "Pack de Anotações e Legendas Profissionais", desc: "Símbolos, legendas e carimbos prontos para deixar suas pranchetas com padrão de escritório profissional.", price: "R$ 67 → Grátis" },
];

const BonusSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Bônus exclusivos</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Incluídos no Pacote Pro</h2>
          <p className="text-muted-foreground">Quatro materiais que completam seu fluxo de trabalho do início ao fim do projeto.</p>
        </motion.div>

        <div className="space-y-4 mb-10">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.num}
              className="bg-gradient-card border border-border rounded-lg p-6 flex gap-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="font-display text-3xl font-bold text-primary/30 shrink-0">{b.num}</span>
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg mb-1">{b.title}</h3>
                {/* Image placeholder */}
                <div className="border border-dashed border-primary/20 rounded-lg h-24 flex items-center justify-center bg-card/50 my-3">
                  <span className="text-primary/40 font-display text-xs">[ Preview do bônus ]</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">{b.desc}</p>
                <span className="text-primary font-semibold text-sm">{b.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Super Bonus */}
        <motion.div
          className="border-2 border-primary/40 bg-gradient-card rounded-xl p-6 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display font-bold text-sm mb-2">★ SUPER BÔNUS</p>
          <h3 className="font-display text-xl font-bold mb-3">5 Prompts de IA para Arquitetos</h3>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-4">
            Os 5 prompts exatos para transformar plantas e renders em imagens profissionais usando inteligência artificial. Exclusivo para alunos do Pacote Pro.
          </p>
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
            Exclusivo • Não vendido separado
          </span>

          <div className="mt-6 bg-background/50 rounded-lg p-4 border border-border">
            <p className="text-primary text-sm font-semibold mb-1">🎯 Por que o super bônus é diferente?</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Os 5 prompts de IA foram testados em projetos reais para gerar renders realistas, humanizar plantas e criar imagens de apresentação que impressionam clientes — sem precisar de computador potente ou software caro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
