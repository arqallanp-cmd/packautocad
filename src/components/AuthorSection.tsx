import { motion } from "framer-motion";

const AuthorSection = () => {
  return (
    <section className="py-12 lg:py-[60px] bg-background">
      <div className="container max-w-2xl lg:max-w-[1200px] mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row lg:gap-12 items-center text-center lg:text-left max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/dxskz0q2z/image/upload/v1773348575/FOUNDER_02_ygftjc.jpg"
            alt="Lara Rembrandt, criadora do Pack AutoCAD Pro"
            loading="lazy"
            className="mb-4 lg:mb-0 shrink-0"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top",
              border: "2px solid rgba(200,169,110,0.4)",
            }}
          />
          <div>
            <p className="text-primary font-display text-xs font-bold tracking-widest uppercase mb-2">Quem criou esse pack</p>
            <h3 className="font-display text-xl lg:text-2xl font-bold">Lara Rembrandt</h3>
            <p className="text-muted-foreground text-sm lg:text-base mb-4">Arquiteta e Urbanista · Especialista em AutoCAD e IA aplicada a projetos</p>
            <p className="text-muted-foreground leading-relaxed lg:text-lg max-w-lg lg:max-w-none">
              "Durante anos na faculdade e no mercado, perdi horas incontáveis desenhando os mesmos blocos do zero, procurando arquivos em sites duvidosos e recebendo DWGs que travavam tudo.
              <br /><br />
              Cansei. Organizei tudo que uso nos meus projetos reais (mobiliário, elétrica, hidráulica, humanização, acessibilidade) em um único pack limpo, leve e pronto para usar.
              <br /><br />
              Hoje entrego isso por menos do que você gasta num almoço. Porque eu sei exatamente quanto tempo vale uma tarde de projeto perdida."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
