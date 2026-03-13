import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AutodeskBadge from "./AutodeskBadge";

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
"Vegetação", "Veículos", "Urbanização", "Piscinas"];


const categoryCards = [
{ src: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/ELETRICA_bmfexo.png", label: "PARTE ELÉTRICA", desc: "Diagramas, instalações e símbolos elétricos completos" },
{ src: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/AR_vulwz0.png", label: "AR CONDICIONADO", desc: "Equipamentos, splits, centrais e unidades externas" },
{ src: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/MOVEIS_jnszy3.png", label: "MÓVEIS + MOBÍLIAS", desc: "Sofás, camas, mesas, cadeiras e muito mais" },
{ src: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/Captura_de_tela_2026-03-11_225040_mnaata.png", label: "CUBAS / PIAS", desc: "Todos os modelos em planta e elevação" },
{ src: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/HUMANIZACAO_ww1aas.png", label: "HUMANIZAÇÃO", desc: "Pessoas, vegetação, postes e elementos urbanos" },
{ src: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/BANHEIROS_ngpmuc.png", label: "BANHEIROS", desc: "Louças, metais e acessórios sanitários" },
{ src: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/MEDICA_fdtbru.png", label: "ÁREA MÉDICA", desc: "Consultórios, leitos, equipamentos hospitalares e plantas de clínicas" },
{ src: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/AUTOMOVEIS_vyzmxw.png", label: "AUTOMÓVEIS", desc: "Carros, caminhões, motos e transporte em planta" },
{ src: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/SALOES_icbpkh.png", label: "SALÕES DE FESTA", desc: "Plantas de eventos, mesas e layouts completos" },
{ src: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/CADEIRAS_qvs1ej.png", label: "CADEIRAS", desc: "Modelos variados para escritório, sala e área externa" },
{ src: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/ORIENTACOES_ghvyi0.png", label: "ORIENTAÇÕES", desc: "Guias e referências para uso correto dos blocos" }];


const ProductPreview = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.offsetWidth * 0.85;
      setActiveIndex(Math.round(scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-background overflow-hidden py-[30px]">
      <div className="container max-w-5xl lg:max-w-6xl mx-auto px-4">
        {/* Section label */}
        <motion.p
          className="text-center text-primary/80 font-display text-sm lg:text-base font-semibold tracking-widest uppercase mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          
          Blocos que você vai ter acesso no Pacote 👇
        </motion.p>

        {/* Folder grid card */}
        <motion.div
          className="rounded-2xl border border-primary/15 bg-card p-4 sm:p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-2 sm:gap-3 mb-6">
            {folderNames.map((name) =>
            <div
              key={name}
              className="flex flex-col items-center gap-1 min-w-0">
              
                <span className="text-xl sm:text-2xl">📁</span>
                <span className="text-[8px] sm:text-[9px] text-muted-foreground text-center leading-tight truncate w-full">
                  {name}
                </span>
              </div>
            )}
          </div>

          {/* Folder overview image */}
          <img
            src="https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_900/freepik__atualize-para-4500-blocos__66968_gg9nbh.jpg"
            alt="+4.500 blocos organizados por pastas"
            loading="lazy"
            width="900"
            height="500"
            className="w-full rounded-lg mb-5" />
          

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="inline-block bg-primary text-primary-foreground font-display text-xs sm:text-sm uppercase tracking-wide px-6 sm:px-8 py-3 rounded-xl text-center font-extralight">
              +4500
            </span>
            <AutodeskBadge variant="compact" />
          </div>
        </motion.div>

        {/* Category cards — horizontal scroll on mobile, grid on desktop */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          
          {categoryCards.map((card) =>
          <div
            key={card.label}
            className="group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-auto snap-start rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors">
            
              <div className="relative">
                <img
                src={card.src}
                alt={`Blocos AutoCAD - ${card.label}`}
                loading="lazy"
                width="800"
                height="200"
                className="w-full h-[200px] object-cover group-hover:scale-[1.03] transition-transform duration-300" />
              
                <span className="absolute bottom-3 left-3 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm px-3 py-1.5 rounded-lg group-hover:scale-[1.03] transition-transform">
                  {card.label}
                </span>
              </div>
              <div className="p-3">
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                  {card.desc}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Dot indicators (mobile only) */}
        <div className="flex justify-center gap-1.5 mt-4 md:hidden">
          {categoryCards.map((_, i) =>
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
            i === activeIndex ? "bg-primary" : "bg-muted"}`
            } />

          )}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}>
          
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold text-base sm:text-lg px-10 py-5 sm:py-4 rounded-xl shadow-gold hover:scale-105 transition-transform animate-pulse-gold">
            
            🚀 QUERO ESSES BLOCOS AGORA
          </a>
        </motion.div>
      </div>
    </section>);

};

export default ProductPreview;