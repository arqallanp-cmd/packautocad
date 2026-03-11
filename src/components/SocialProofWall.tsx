import { motion } from "framer-motion";

const testimonials = [
  { name: "Arq. Camila S.", text: "Economizei horas no meu primeiro projeto usando os blocos. Tudo organizado, sem precisar procurar nada!", stars: 5 },
  { name: "Felipe R.", text: "Nunca mais desenhei do zero. Os blocos são leves e super bem feitos.", stars: 5 },
  { name: "Studio Monteiro", text: "Melhor investimento que fizemos pro escritório. A equipe inteira usa agora.", stars: 5 },
  { name: "Beatriz A.", text: "As hachuras são incríveis! Minhas pranchetas ficaram com cara de escritório profissional de verdade.", stars: 5 },
  { name: "Eng. Lucas P.", text: "Já recuperei o valor no primeiro projeto. Recomendo demais pra quem quer agilidade.", stars: 5 },
  { name: "Marina Costa", text: "Blocos bem organizados por pastas. Achei tudo que precisava em segundos.", stars: 5 },
  { name: "Arq. Rodrigo M.", text: "Os prompts de IA são o diferencial. Gerei renders que impressionaram meus clientes.", stars: 4 },
  { name: "Juliana Freitas", text: "Economizei pelo menos 3 horas por projeto. Material de qualidade absurda pelo preço.", stars: 5 },
  { name: "Arq. Thiago L.", text: "Template de plotagem resolveu minha vida. Configurei uma vez e nunca mais me preocupei.", stars: 5 },
  { name: "Carolina Dias", text: "Comprei o básico e voltei pro Pro no mesmo dia. Os bônus valem muito a pena.", stars: 5 },
  { name: "Pedro Henrique", text: "Compatível com AutoCAD 2020 sem nenhum problema. Blocos leves e funcionais.", stars: 5 },
  { name: "Arq. Isabela N.", text: "Nunca vi um pack tão completo. Mobiliário, vegetação, elétrica... tem tudo!", stars: 5 },
];

const rotations = [-1, 0.5, -0.5, 1, -0.8, 0.3, -0.2, 0.8, -1, 0.6, -0.4, 0.9];

const SocialProofWall = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.p
          className="text-primary font-display text-sm font-semibold tracking-widest uppercase text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O que nossos clientes estão dizendo:
        </motion.p>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid bg-[hsl(220,15%,10%)] border-l-4 border-l-[hsl(145,60%,45%)] rounded-lg p-5 shadow-[0_2px_12px_-4px_hsl(0,0%,0%/0.4)]"
              style={{ transform: `rotate(${rotations[i]}deg)` }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <p className="text-foreground text-sm leading-relaxed mb-3">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-primary/70 text-xs font-display font-semibold">{t.name}</span>
                <span className="text-primary text-xs">{"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofWall;
