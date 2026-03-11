import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-16 pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Headline — mobile: tudo na mesma linha, fonte grande */}
          <h1 className="font-display font-extrabold uppercase tracking-tight leading-none mb-1">
            <span className="text-gradient-gold text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap">
              +4.500 BLOCOS
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <span className="font-display font-extrabold uppercase tracking-tight text-foreground text-[7vw] sm:text-4xl md:text-5xl">
              PRONTOS
            </span>
            <span className="bg-danger text-white font-display font-extrabold uppercase px-3 py-1 rounded text-[6vw] sm:text-3xl md:text-4xl -rotate-1 inline-block">
              AutoCAD
            </span>
          </div>

          <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto mb-8 leading-relaxed">
            Pare de desenhar cada bloco do <strong className="text-foreground">ZERO!</strong> Tenha um acervo completo e use a hora que quiser!
          </p>

          {/* Product mockup placeholder */}
          <img
            src="https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_900/Untitled-3_qatd2n.png"
            alt="Mockup do produto +4.500 Blocos AutoCAD"
            loading="lazy"
            width="900"
            className="mx-auto mb-10 w-full max-w-[900px]"
          />

          {/* Price anchor */}
          <p className="text-muted-foreground text-sm sm:text-base mb-1 uppercase tracking-wide font-display">
            De <span className="line-through">R$ 59,90</span> por apenas
          </p>
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="font-display text-lg sm:text-xl font-bold text-muted-foreground uppercase">por apenas</span>
          </div>
          <div className="flex items-center justify-center mb-2">
            <span className="font-display text-5xl sm:text-6xl font-extrabold text-gradient-gold">R$5,99</span>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm mb-8">Pagamento único · Acesso imediato · Sem mensalidade</p>

          <motion.a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-success text-white font-display font-bold text-base sm:text-lg px-10 sm:px-12 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 uppercase w-full sm:w-auto justify-center max-w-sm mx-auto"
            whileTap={{ scale: 0.97 }}
          >
            Quero ter acesso!
          </motion.a>

          <p className="text-muted-foreground/60 text-xs mt-4">🔒 Compra 100% segura · Acesso imediato após pagamento</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-3 sm:gap-4 mt-12 max-w-sm sm:max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {[
            { value: "4.500+", label: "Blocos DWG" },
            { value: "100%", label: "Organizados" },
            { value: "R$5,99", label: "Acesso total" },
          ].map((s) => (
            <div key={s.label} className="text-center bg-card/50 border border-border rounded-lg py-3 px-2">
              <p className="font-display text-xl sm:text-2xl font-bold text-primary">{s.value}</p>
              <p className="text-muted-foreground text-[10px] sm:text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
