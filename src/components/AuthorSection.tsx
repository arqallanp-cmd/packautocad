import { motion } from "framer-motion";

const AuthorSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_300/FOUNDER_wzplel.jpg"
            alt="Lara Render"
            loading="lazy"
            className="mb-4"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top",
              border: "2px solid rgba(200,169,110,0.4)",
            }}
          />
          <p className="text-primary font-display text-xs font-bold tracking-widest uppercase mb-2">Quem criou esse pack</p>
          <h3 className="font-display text-xl font-bold">Lara Render</h3>
          <p className="text-muted-foreground text-sm mb-4">Arquiteta · Especialista em Produtividade com AutoCAD e IA</p>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Cansei de perder tempo com materiais mal organizados. Montei esse pack com tudo que uso no dia a dia — e agora coloco na sua mão por um preço que cabe no bolso de qualquer estudante.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
