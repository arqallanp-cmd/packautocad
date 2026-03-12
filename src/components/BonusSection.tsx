import { motion } from "framer-motion";

const mainProduct = {
  title: "+4500 blocos AutoCAD organizados",
  value: "R$ 297",
};

const bonuses = [
  { num: "01", title: "+15.000 Blocos Extras", value: "R$ 97" },
  { num: "02", title: "Hachuras Profissionais", value: "R$ 47" },
  { num: "03", title: "Template de Plotagem .ctb", value: "R$ 57" },
  { num: "04", title: "Anotações e Legendas Pro", value: "R$ 67" },
  { num: "05", title: "5 Prompts de IA para Arquitetos", value: "R$ 25" },
];

const BonusSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">
            Value stack
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Tudo que você recebe <span className="text-gradient-gold">hoje</span>
          </h2>
        </motion.div>

        {/* Main product */}
        <motion.div
          className="bg-card border-2 border-primary/30 rounded-xl p-6 mb-4 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📦</span>
            <div>
              <p className="font-display font-bold text-base sm:text-lg text-foreground">
                {mainProduct.title}
              </p>
              <p className="text-primary text-xs font-semibold">Produto principal</p>
            </div>
          </div>
          <span className="text-muted-foreground font-display font-bold text-sm whitespace-nowrap">
            {mainProduct.value}
          </span>
        </motion.div>

        {/* Bonuses */}
        <div className="space-y-3 mb-6">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.num}
              className="bg-card border border-border rounded-xl p-5 flex items-center justify-between"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs bg-success/20 text-success font-bold px-2 py-0.5 rounded">
                  GRÁTIS
                </span>
                <p className="font-display font-semibold text-sm text-foreground">{b.title}</p>
              </div>
              <span className="text-muted-foreground text-sm line-through whitespace-nowrap">
                {b.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
