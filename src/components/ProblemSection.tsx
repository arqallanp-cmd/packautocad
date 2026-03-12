import { motion } from "framer-motion";
import { Search, FileWarning, PenTool } from "lucide-react";

const problems = [
  { icon: Search, text: "Procurando blocos na internet" },
  { icon: FileWarning, text: "Baixando arquivos ruins" },
  { icon: PenTool, text: "Redesenhando blocos básicos" },
];

const ProblemSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-4xl font-bold">
            Você está <span className="text-danger">perdendo tempo</span> com isso
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center gap-3 bg-background border border-danger/20 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-danger" />
              </div>
              <p className="font-display font-semibold text-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
