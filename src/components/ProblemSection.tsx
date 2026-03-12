import { motion } from "framer-motion";

const problems = [
  { text: "Horas jogadas fora desenhando mobiliário, pessoas e vegetação do zero em todo projeto" },
  { text: "Blocos gratuitos da internet que são pesados, mal feitos e travam o AutoCAD" },
  { text: "Pranchetas com cara de amador porque faltam hachuras e legendas profissionais" },
  { text: "Plotar manualmente toda vez, sem padrão, sem consistência, sem profissionalismo" },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl lg:max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-danger font-display text-sm lg:text-base font-semibold tracking-widest uppercase mb-3">Isso te parece familiar?</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 leading-tight">
            Você está <span className="text-danger">perdendo tempo</span> (e dinheiro) com isso:
          </h2>

          <div className="space-y-4">
            {problems.map((p, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-gradient-card rounded-lg p-5 border border-danger/20"
              >
                <span className="text-danger font-bold text-lg mt-0.5 shrink-0">✗</span>
                <p className="text-secondary-foreground leading-relaxed lg:text-lg">{p.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-10">
            Se você se identificou com pelo menos <strong className="text-foreground">1 desses problemas</strong>, o Pack AutoCAD foi feito pra você.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
