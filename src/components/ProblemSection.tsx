import { motion } from "framer-motion";

const problems = [
  { icon: "🔍", text: "Procurando blocos na internet por horas sem encontrar nada de qualidade" },
  { icon: "💀", text: "Baixando arquivos ruins que travam o AutoCAD e atrasam seu projeto" },
  { icon: "✏️", text: "Redesenhando blocos básicos que deveriam estar prontos desde o início" },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-danger font-display text-sm font-semibold tracking-widest uppercase mb-3">
            Isso te parece familiar?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            Você está <span className="text-danger">perdendo tempo</span> e dinheiro com isso
          </h2>
        </motion.div>

        <div className="space-y-4">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              className="flex gap-4 items-center bg-card rounded-xl p-5 border border-danger/15"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <span className="text-2xl shrink-0">{p.icon}</span>
              <p className="text-foreground font-medium leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
