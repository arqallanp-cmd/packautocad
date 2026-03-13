import { motion } from "framer-motion";
import { Armchair, TreePine, Car, PersonStanding, Lightbulb, ShieldCheck, Download, Award } from "lucide-react";

const floatingIcons = [
{ Icon: Armchair, mob: "top-[10%] left-[8%]", desk: "sm:top-[10%] sm:left-[12%]", delay: 0.4 },
{ Icon: TreePine, mob: "top-[5%] right-[8%]", desk: "sm:top-[5%] sm:right-[12%]", delay: 0.6 },
{ Icon: Car, mob: "bottom-[25%] left-[6%]", desk: "sm:bottom-[20%] sm:left-[10%]", delay: 0.8 },
{ Icon: PersonStanding, mob: "bottom-[20%] right-[6%]", desk: "sm:bottom-[15%] sm:right-[10%]", delay: 1.0 },
{ Icon: Lightbulb, mob: "top-[45%] left-[3%]", desk: "sm:top-[45%] sm:left-[8%]", delay: 1.2 }];


const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center bg-gradient-hero overflow-hidden pt-3 sm:pt-8 pb-6 sm:pb-6 lg:min-h-screen lg:max-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col">
          
          {/* 1. Headline */}
          <h1 className="font-display font-extrabold uppercase tracking-tight leading-[0.9] mb-2 sm:mb-1 text-center w-full">
            <span className="text-gradient-gold text-[48px] sm:text-6xl md:text-7xl lg:text-8xl block text-center">
              +4500 BLOCOS
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4">
            <span className="font-display font-extrabold uppercase tracking-tight text-foreground text-[26px] sm:text-4xl md:text-5xl">
              PRONTOS
            </span>
            <span className="bg-danger text-white font-display font-extrabold uppercase px-3 py-1 rounded text-[22px] sm:text-3xl md:text-4xl -rotate-1 inline-block">
              AUTOCAD
            </span>
          </div>

          {/* 2. Subheadline */}
          <p className="text-muted-foreground text-[13px] sm:text-lg max-w-md mx-auto mb-2 sm:mb-4 leading-relaxed">
            <span className="hidden sm:inline">Chega de perder horas desenhando do zero.<br />Tenha acesso ao maior pack profissional de blocos DWG do mercado.</span>
            <span className="sm:hidden">O maior pack profissional de blocos DWG do mercado.</span>
          </p>

          {/* 3. Mockup image with floating icons */}
          <div className="relative mx-auto mb-3 sm:mb-4 w-full max-w-[900px] lg:max-w-[700px]">
            {/* Floating icons — simple fade in, gentle CSS float */}
            {floatingIcons.map(({ Icon, mob, desk, delay }, i) =>
            <motion.div
              key={i}
              className={`absolute z-20 ${mob} ${desk} flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-card/80 border border-border backdrop-blur-sm shadow-card animate-float`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay }}
              style={{ animationDelay: `${delay}s` }}>
              
                <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
              </motion.div>
            )}

            {/* Product label */}
            <motion.div
              className="absolute z-20 bottom-[8%] right-[5%] sm:bottom-[12%] sm:right-[10%] bg-card/90 border border-primary/30 backdrop-blur-sm rounded-lg px-3 py-2 shadow-gold"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}>
              
              <p className="font-display font-bold text-[10px] sm:text-xs text-primary leading-tight">+4.500 BLOCOS DWG</p>
              <p className="font-display font-semibold text-[8px] sm:text-[10px] text-muted-foreground leading-tight">PRONTOS PARA AUTOCAD</p>
            </motion.div>

            <img
              src="https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_900/HERO_04_jgsp83.png"
              alt="Mockup do produto +4.500 Blocos AutoCAD"
              loading="eager"
              width="900"
              height="600"
              className="mx-auto w-auto max-w-full max-h-[240px] sm:max-h-[360px] lg:max-h-[300px] sm:w-full object-contain relative z-10" />
            
          </div>

          {/* 4. Price anchor */}
          <p className="text-muted-foreground sm:text-base mb-1 uppercase tracking-wide font-display text-xs">
            DE <span className="line-through">R$49,90</span> POR APENAS
          </p>
          <div className="flex items-center justify-center mb-2 sm:mb-4">
            <span className="font-display sm:text-7xl font-extrabold text-gradient-gold drop-shadow-[0_0_25px_hsl(45_100%_55%/0.4)] text-7xl">R$9,90</span>
          </div>

          {/* 5. CTA button */}
          <motion.a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-success text-white font-display font-bold text-sm sm:text-lg px-6 sm:px-12 py-[18px] sm:py-4 rounded-xl shadow-lg transition-transform hover:scale-105 uppercase w-full sm:w-auto justify-center max-w-sm mx-auto animate-pulse-btn"
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            
            🚀 Quero Acesso Imediato
          </motion.a>

          {/* 6. Security text */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mt-3 sm:mt-4 text-muted-foreground/60 text-[10px] sm:text-xs">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-success" /> Compra 100% segura</span>
            <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5 text-primary" /> Download imediato</span>
            <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-primary" /> Certificado AutoDESK</span>
          </div>
        </motion.div>

        {/* 7. Stats */}
        <motion.div
          className="grid grid-cols-3 gap-3 sm:gap-4 mt-5 sm:mt-6 max-w-sm sm:max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}>
          
          {[
          { value: "4.500+", label: "Blocos DWG" },
          { value: "100%", label: "Organizados" },
          { value: "R$9,90", label: "Acesso total" }].
          map((s) =>
          <div key={s.label} className="text-center bg-card/50 border border-border rounded-lg py-3 px-2">
              <p className="font-display text-xl sm:text-2xl font-bold text-primary">{s.value}</p>
              <p className="text-muted-foreground text-[10px] sm:text-xs mt-1">{s.label}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;