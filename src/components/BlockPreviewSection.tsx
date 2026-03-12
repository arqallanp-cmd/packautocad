import { motion } from "framer-motion";
import previewKitchen from "@/assets/preview-chairs.jpg";
import previewTables from "@/assets/preview-tables.jpg";
import previewTrees from "@/assets/preview-trees.jpg";
import previewPeople from "@/assets/preview-people.jpg";
import previewCars from "@/assets/preview-cars.jpg";
import previewLighting from "@/assets/preview-lighting.jpg";

const previews = [
  { src: previewKitchen, label: "Cozinhas" },
  { src: previewTables, label: "Mesas" },
  { src: previewTrees, label: "Vegetação" },
  { src: previewPeople, label: "Humanização" },
  { src: previewCars, label: "Automóveis" },
  { src: previewLighting, label: "Iluminação" },
];

const BlockPreviewSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Veja alguns blocos da biblioteca
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Alguns exemplos da biblioteca de +4500 blocos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {previews.map((item, i) => (
            <motion.div
              key={item.label}
              className="group relative rounded-xl overflow-hidden border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <img
                src={item.src}
                alt={`Blocos AutoCAD - ${item.label}`}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                <span className="font-display text-sm font-bold text-primary">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockPreviewSection;
