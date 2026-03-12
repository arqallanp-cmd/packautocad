import { motion } from "framer-motion";

const categories = [
  { icon: "🏗️", title: "Arquitetura", desc: "Portas, janelas, escadas, coberturas e elementos construtivos" },
  { icon: "🛋️", title: "Mobiliário", desc: "Sofás, mesas, camas, cadeiras e itens de escritório" },
  { icon: "🌿", title: "Paisagismo", desc: "Árvores, arbustos, jardins e elementos de paisagismo" },
  { icon: "⚡", title: "Equipamentos", desc: "Elétrica, hidráulica, ar condicionado e instalações" },
  { icon: "👤", title: "Humanos", desc: "Pessoas em planta e elevação para humanizar projetos" },
  { icon: "🚗", title: "Veículos", desc: "Carros, motos e caminhões para estacionamentos" },
];

const BlocksSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">
            A solução
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Biblioteca AutoCAD <span className="text-gradient-gold">pronta para usar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">
                {c.icon}
              </span>
              <p className="font-display font-bold text-base text-foreground mb-1">{c.title}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlocksSection;
