import { motion } from "framer-motion";

const categories = [
  { icon: "🏗️", title: "Arquitetura", desc: "Portas, janelas, escadas, coberturas e detalhamentos" },
  { icon: "🛋️", title: "Mobiliário", desc: "Sofás, camas, mesas, cadeiras e armários completos" },
  { icon: "🌿", title: "Paisagismo", desc: "Árvores, arbustos, jardins e elementos urbanos" },
  { icon: "⚡", title: "Equipamentos", desc: "Elétrica, hidráulica, ar condicionado e instalações" },
  { icon: "👤", title: "Humanos", desc: "Pessoas em planta e elevação para humanização" },
  { icon: "🚗", title: "Veículos", desc: "Carros, motos e caminhões para estacionamentos" },
];

const SolutionSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">
            A solução
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Biblioteca AutoCAD <span className="text-gradient-gold">pronta para usar</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Categorias organizadas para você encontrar qualquer bloco em segundos.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((c) => (
            <div
              key={c.title}
              className="bg-background border border-border rounded-xl p-5 hover:border-primary/40 transition-colors text-center"
            >
              <span className="text-3xl block mb-3">{c.icon}</span>
              <p className="font-display font-bold text-sm text-foreground mb-1">{c.title}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
