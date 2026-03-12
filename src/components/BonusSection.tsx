import { motion } from "framer-motion";

const items = [
  "+4.500 blocos AutoCAD",
  "+15.000 blocos extras",
  "+300 hachuras",
  "Templates de plotagem",
  "Kit escritório profissional",
];

const breakdown = [
  { label: "Biblioteca principal", price: "R$ 297" },
  { label: "Hachuras", price: "R$ 97" },
  { label: "Templates", price: "R$ 97" },
  { label: "Kit profissional", price: "R$ 99" },
];

const BonusSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Value Stack */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-4xl font-bold mb-8">
            Tudo que você recebe <span className="text-gradient-gold">hoje</span>
          </h2>

          <div className="space-y-3 max-w-md mx-auto mb-10">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 bg-background border border-border rounded-lg px-5 py-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="text-success font-bold">✓</span>
                <span className="font-display font-semibold text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Breakdown */}
        <motion.div
          className="border border-primary/20 bg-background rounded-xl p-6 sm:p-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-3 mb-6">
            {breakdown.map((b, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">{b.label}</span>
                <span className="text-muted-foreground text-sm line-through">{b.price}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="font-display font-bold text-foreground">Valor total</span>
              <span className="font-display font-bold text-foreground line-through">R$ 590</span>
            </div>
            <p className="text-center mt-4">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-gradient-gold">
                Por apenas R$ 9,90
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
