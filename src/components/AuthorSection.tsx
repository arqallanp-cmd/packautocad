import { motion } from "framer-motion";

const AuthorSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-3xl mb-4">
            ✏️
          </div>
          <h3 className="font-display text-xl font-bold">Lara Render</h3>
          <p className="text-muted-foreground text-sm mb-4">Arquiteta • Especialista em Produtividade com AutoCAD e IA</p>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Há anos trabalho com projetos de arquitetura e sempre sofri com a falta de materiais bem organizados. Montei esse pack com tudo que uso no meu dia a dia — e agora coloco na sua mão por menos do que um café.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
