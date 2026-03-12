import { motion } from "framer-motion";

const BlocksSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-4xl font-bold mb-4">
            Biblioteca profissional <span className="text-gradient-gold">pronta para usar</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Todos os blocos já vêm organizados por categorias, prontos para arrastar direto no AutoCAD. 
            Sem precisar redesenhar, sem perder tempo procurando — é só abrir e usar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlocksSection;
