import { motion } from "framer-motion";

const folderNames = [
  "2D", "Academia", "Acessibilidade", "Animais",
  "Anotações", "Aquífero", "Ar Condicionado", "Área de Serviço",
  "Área Externa", "Armários", "Auditório", "Banheiros",
  "Bicicletário", "Bloco Concreto", "Bombas", "Brinquedos",
  "Câmeras", "Canhões", "Churrasqueiras", "Cladique",
  "Cobertura", "Cobogó", "Colunas", "Cozinhas",
  "Decoração", "Elétrica", "Elevadores", "Escadas",
  "Escritório", "Estacionamento", "Ferramentas", "Hidráulica",
  "Hospital", "Iluminação", "Mobiliário", "Pessoas",
  "Vegetação", "Veículos", "Urbanização", "Piscinas",
];

const ProductPreview = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">
            Biblioteca completa
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Veja o que tem dentro da biblioteca
          </h2>
          <p className="text-muted-foreground text-lg">
            <span className="text-gradient-gold font-bold">+4500 blocos</span> organizados por pastas
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-primary/15 bg-background p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-3 sm:gap-4">
            {folderNames.map((name, i) => (
              <motion.div
                key={name}
                className="flex flex-col items-center gap-1.5 min-w-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
              >
                <span className="text-2xl sm:text-3xl">📁</span>
                <span className="text-[8px] sm:text-[10px] text-muted-foreground text-center leading-tight truncate w-full">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <span className="inline-block bg-primary/10 border border-primary/20 text-primary font-display font-extrabold text-xs sm:text-sm uppercase tracking-wide px-6 sm:px-8 py-3 rounded-xl text-center">
              +4500 BLOCOS ORGANIZADOS POR PASTAS
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreview;
