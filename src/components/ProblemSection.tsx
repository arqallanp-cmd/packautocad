import { motion } from "framer-motion";

const problems = [
  "Horas perdidas desenhando mobiliário, pessoas, vegetação e símbolos técnicos do zero em cada projeto",
  "Buscar blocos gratuitos na internet que ficam pesados, mal desenhados e travam o AutoCAD",
  "Pranchetas com aparência amadora porque faltam hachuras profissionais e legendas padronizadas",
  "Configurar plotagem manualmente toda vez, perdendo consistência entre projetos",
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">O problema</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10 leading-tight">
            Você ainda desperdiça tempo redesenhando o que já existe?
          </h2>
        </motion.div>

        <div className="space-y-4">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              className="flex gap-4 items-start bg-gradient-card rounded-lg p-5 border border-border"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="text-danger font-bold text-lg mt-0.5 shrink-0">✗</span>
              <p className="text-secondary-foreground leading-relaxed">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
