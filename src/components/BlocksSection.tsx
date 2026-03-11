import { motion } from "framer-motion";

const categories = [
  { icon: "🛋️", title: "Mobiliário", desc: "Sala, quarto, escritório" },
  { icon: "🍳", title: "Cozinha", desc: "Eletrodomésticos e bancadas" },
  { icon: "🛁", title: "Banheiro", desc: "Louças e metais" },
  { icon: "🌿", title: "Vegetação", desc: "Árvores, arbustos, jardins" },
  { icon: "🚗", title: "Veículos", desc: "Carros, motos, bicicletas" },
  { icon: "👤", title: "Pessoas", desc: "Plantas e elevações" },
  { icon: "⚡", title: "Elétrica", desc: "Símbolos e diagramas" },
  { icon: "💧", title: "Hidráulica", desc: "Tubulações e conexões" },
  { icon: "♿", title: "Acessibilidade", desc: "NBR 9050 atualizada" },
  { icon: "🏋️", title: "Academia", desc: "Equipamentos fitness" },
  { icon: "🏥", title: "Hospitalar", desc: "Leitos e equipamentos" },
  { icon: "🏙️", title: "Urbanização", desc: "Praças, calçadas, mobiliário" },
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
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">O que você recebe</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            +3.700 blocos organizados,<br />
            <span className="text-gradient-gold">prontos para usar hoje</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Todos os arquivos organizados em pastas categorizadas, nomeados e testados em AutoCAD 2018 ao 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              className="bg-background border border-border rounded-lg p-4 text-center hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <span className="text-2xl block mb-2">{c.icon}</span>
              <p className="font-display font-semibold text-sm">{c.title}</p>
              <p className="text-muted-foreground text-xs mt-1">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlocksSection;
