import { motion } from "framer-motion";

const folders = [
  { icon: "🏗️", name: "Arquitetura" },
  { icon: "🛋️", name: "Mobiliário" },
  { icon: "🌿", name: "Paisagismo" },
  { icon: "👤", name: "Humanos" },
  { icon: "🚗", name: "Veículos" },
  { icon: "⚙️", name: "Equipamentos" },
  { icon: "💡", name: "Iluminação" },
  { icon: "🏙️", name: "Urbanismo" },
];

const ProductPreview = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-4xl font-bold">
            Veja o que tem dentro da biblioteca
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {folders.map((f, i) => (
            <motion.div
              key={f.name}
              className="flex flex-col items-center gap-2 bg-card border border-border rounded-xl py-5 px-3 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="text-3xl">{f.icon}</span>
              <span className="font-display font-semibold text-sm text-foreground">{f.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-muted-foreground text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          +4.500 blocos organizados por categorias
        </motion.p>
      </div>
    </section>
  );
};

export default ProductPreview;
