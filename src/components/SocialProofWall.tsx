import { motion } from "framer-motion";

const testimonials = [
  { name: "Arq. Camila S.", text: "Economizei 4 horas no meu primeiro projeto. Melhor R$24 que já gastei na vida.", stars: 5 },
  { name: "Felipe R.", text: "Nunca mais desenhei bloco do zero. Abro a pasta, arrasto e pronto. Simples assim.", stars: 5 },
  { name: "Studio Monteiro", text: "A equipe inteira usa agora. Virou padrão do escritório.", stars: 5 },
  { name: "Beatriz A.", text: "As hachuras são ABSURDAS. Minhas pranchetas ficaram com cara de escritório de SP.", stars: 5 },
  { name: "Eng. Lucas P.", text: "Já recuperei o valor no primeiro projeto. Sem exagero.", stars: 5 },
  { name: "Marina Costa", text: "Tudo organizado por pastas. Achei o que precisava em 10 segundos.", stars: 5 },
  { name: "Arq. Rodrigo M.", text: "Os prompts de IA são o diferencial. Gerei renders que meus clientes acharam que eu paguei caro.", stars: 4 },
  { name: "Juliana Freitas", text: "Pelo preço que paguei, recebi material que vale 10x mais. Sério.", stars: 5 },
  { name: "Arq. Thiago L.", text: "Template de plotagem resolveu minha vida. Configurei uma vez, nunca mais mexo.", stars: 5 },
  { name: "Carolina Dias", text: "Comprei o básico, voltei 10 min depois e peguei o Pro. Os bônus valem demais.", stars: 5 },
  { name: "Pedro Henrique", text: "Funciona no AutoCAD 2020 sem nenhum problema. Blocos leves, sem travar.", stars: 5 },
  { name: "Arq. Isabela N.", text: "Mobiliário, vegetação, elétrica... tem TUDO. Nunca vi pack tão completo.", stars: 5 },
];

const rotations = [-1.2, 0.7, -0.5, 1, -0.8, 0.4, -0.3, 0.9, -1, 0.6, -0.6, 1.1];

const SocialProofWall = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">
            Prova social
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Veja o que quem já comprou está dizendo
          </h2>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid bg-muted border-l-4 border-l-success rounded-lg p-5 shadow-card"
              style={{ transform: `rotate(${rotations[i]}deg)` }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <p className="text-foreground text-sm leading-relaxed mb-3">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-primary/70 text-xs font-display font-semibold">{t.name}</span>
                <span className="text-primary text-xs">{"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-primary font-display font-bold text-sm hover:underline"
          >
            → Quero ter o mesmo resultado
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofWall;
