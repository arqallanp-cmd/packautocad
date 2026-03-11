import { motion } from "framer-motion";

import blocksEletrica from "@/assets/blocks-eletrica.png";
import blocksArCondicionado from "@/assets/blocks-ar-condicionado.png";
import blocksMoveis from "@/assets/blocks-moveis.png";
import blocksCubas from "@/assets/blocks-cubas.png";
import blocksHumanizacao from "@/assets/blocks-humanizacao.png";
import blocksCadeiras from "@/assets/blocks-cadeiras.png";
import blocksBanheiros from "@/assets/blocks-banheiros.png";
import blocksSaloes from "@/assets/blocks-saloes.png";
import blocksAutomoveis from "@/assets/blocks-automoveis.png";
import blocksPastas from "@/assets/blocks-pastas.png";

const categories = [
  { src: blocksEletrica, label: "Parte Elétrica" },
  { src: blocksArCondicionado, label: "Ar Condicionados" },
  { src: blocksMoveis, label: "Móveis + Mobílias" },
  { src: blocksCubas, label: "Cubas / Pias" },
  { src: blocksHumanizacao, label: "Humanização" },
  { src: blocksCadeiras, label: "Cadeiras / Mesas" },
  { src: blocksBanheiros, label: "Banheiros" },
  { src: blocksSaloes, label: "Salões de Festa" },
  { src: blocksAutomoveis, label: "Automóveis" },
];

const ProductPreview = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">
            Blocos que você vai ter acesso no Pacote 👇
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-gradient-gold mb-4">
            +3.700 blocos organizados por pastas
          </h2>
          <p className="text-muted-foreground text-sm mb-2 max-w-lg mx-auto">
            Cada bloco foi nomeado, categorizado e testado. É só arrastar pro seu projeto e pronto.
          </p>
        </motion.div>

        {/* Folder overview image */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={blocksPastas}
            alt="+3.700 blocos organizados por pastas"
            loading="lazy"
            className="w-full rounded-xl border border-border"
          />
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <img
                src={cat.src}
                alt={`Blocos AutoCAD - ${cat.label}`}
                loading="lazy"
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                <span className="font-display font-bold text-sm text-foreground uppercase tracking-wide">
                  {cat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold text-lg px-10 py-4 rounded-lg shadow-gold hover:scale-105 transition-transform"
          >
            → Quero acesso agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreview;
