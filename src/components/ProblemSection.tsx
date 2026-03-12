import { motion } from "framer-motion";
import { Search, FileWarning, PenTool } from "lucide-react";

const problems = [
  {
    icon: Search,
    text: "Procurando blocos na internet por horas, em sites duvidosos",
  },
  {
    icon: FileWarning,
    text: "Baixando arquivos ruins que travam o AutoCAD",
  },
  {
    icon: PenTool,
    text: "Redesenhando blocos básicos que já deveriam estar prontos",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-danger font-display text-sm font-semibold tracking-widest uppercase mb-3">
            Isso te parece familiar?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            Você está <span className="text-danger">perdendo tempo</span> e dinheiro com isso
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-3 bg-gradient-card rounded-xl p-6 border border-danger/20"
            >
              <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-danger" />
              </div>
              <p className="text-secondary-foreground text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-muted-foreground text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Se você se identificou com pelo menos <strong className="text-foreground">1 desses problemas</strong>, o Pack AutoCAD foi feito pra você.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
