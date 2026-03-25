import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatePresence } from "framer-motion";

/* ── Scroll-reveal wrapper ── */
const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── Section label tag ── */
const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-3 py-1 rounded bg-[#0a1824] text-[#00c8ff] border-l-2 border-[#00c8ff]">
    {children}
  </span>
);

/* ── Section divider ── */
const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00c8ff]/30 to-transparent" />
);

/* ── CTA Button with shimmer ── */
const CtaButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.a
    href="#oferta"
    whileHover={{ y: -3, boxShadow: "0 0 40px rgba(245,200,66,0.5)" }}
    whileTap={{ scale: 0.97 }}
    className={`relative overflow-hidden inline-flex items-center justify-center gap-2 font-bold text-[#080b10] rounded-xl px-8 py-4 text-lg transition-shadow cursor-pointer ${className}`}
    style={{ background: "linear-gradient(135deg, #f5c842, #ff8c00)" }}
  >
    {/* shimmer */}
    <span className="absolute inset-0 pointer-events-none">
      <span className="absolute inset-0 animate-shimmer" style={{
        background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
        backgroundSize: "200% 100%",
      }} />
    </span>
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  </motion.a>
);

/* ══════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════ */
const Megapack = () => {
  useSmoothScroll();

  return (
    <div className="mega-page min-h-screen text-[#f0f4f8] relative overflow-x-hidden" style={{ background: "#080b10" }}>
      {/* noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "200px" }} />

      {/* atmospheric orbs */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#00c8ff]/8 blur-[180px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f5c842]/6 blur-[160px] pointer-events-none" />

      <div className="relative z-10">
        <HeroSection />
        <Divider />
        <PainSection />
        <Divider />
        <ContentsSection />
        <Divider />
        <ValueSection />
        <Divider />
        <TestimonialsSection />
        <Divider />
        <AboutSection />
        <Divider />
        <OfferSection />
        <Divider />
        <GuaranteeSection />
        <Divider />
        <FinalCtaSection />
        <FooterSection />
      </div>

      <FloatingCta />
    </div>
  );
};

/* ── 1. HERO ── */
const HeroSection = () => {
  const stats = [
    { value: "15K+", label: "Blocos AutoCAD" },
    { value: "200GB", label: "Pack SketchUp" },
    { value: "100GB", label: "Famílias Revit" },
    { value: "∞", label: "Licença Vitalícia" },
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="font-bebas text-[56px] sm:text-[80px] lg:text-[110px] leading-[0.9] tracking-tight text-white mb-4"
          >
            MEGAPACK ARQUITETURA
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-syne text-lg sm:text-xl lg:text-2xl font-extrabold text-white/90 max-w-2xl mx-auto mb-4"
          >
            O repositório que Lara Rembrandt usa nos próprios projetos — agora disponível para você
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-[#7a8fa8] text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed"
          >
            +15.000 blocos AutoCAD, +200GB SketchUp, +100GB Revit, renderizadores e licença vitalícia. Tudo limpo, leve e pronto.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <CtaButton className="text-base sm:text-lg">🔓 Quero Meu Megapack — R$ 47</CtaButton>
            <p className="text-[#7a8fa8] text-xs mt-3">Acesso imediato • Licença vitalícia • Garantia 7 dias</p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center bg-[#0d1520]/60 border border-[#1a2a3a] rounded-xl py-4 px-3 backdrop-blur-sm">
                <p className="font-bebas text-3xl sm:text-4xl text-[#00c8ff]">{s.value}</p>
                <p className="text-[#7a8fa8] text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ── 2. PAIN ── */
const PainSection = () => {
  const pains = [
    { icon: "🌐", title: "Sites duvidosos", desc: "Horas procurando em fóruns que entregam DWGs cheios de lixo" },
    { icon: "💥", title: "Arquivos que travam o CAD", desc: "Blocos pesados, mal feitos, cheios de layers desnecessários" },
    { icon: "📁", title: "Pasta final_final_v3", desc: "Arquivos espalhados sem padrão, impossível de achar" },
    { icon: "⏳", title: "Retrabalho constante", desc: "No fim você desenha do zero porque é mais rápido" },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <Label>O problema</Label>
          <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Você ainda perde tardes inteiras procurando um bloco que presta?
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pains.map((p) => (
            <Reveal key={p.title}>
              <div className="bg-[#0d1520]/60 border border-[#1a2a3a] rounded-xl p-6 h-full">
                <span className="text-2xl mb-3 block">{p.icon}</span>
                <h3 className="font-syne font-bold text-white mb-1">{p.title}</h3>
                <p className="text-[#7a8fa8] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <div className="border-l-2 border-[#00c8ff] pl-5 py-3 bg-[#0a1824]/40 rounded-r-lg">
            <p className="italic text-[#7a8fa8] text-sm sm:text-base">
              "Isso não é falta de organização. É falta de um pack feito por quem realmente projeta."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ── 3. CONTENTS ── */
const ContentsSection = () => {
  const items = [
    { icon: "📐", title: "Blocos para AutoCAD", desc: "Mobiliário, elétrica, hidráulica, humanização, acessibilidade", qty: "+15.000" },
    { icon: "🧊", title: "Biblioteca SketchUp", desc: "Modelos para modelagem e apresentação profissional", qty: "+200GB" },
    { icon: "🏗️", title: "Famílias e Templates Revit", desc: "Parametrizado e pronto para fluxo BIM", qty: "+100GB" },
    { icon: "✨", title: "Blocos para Renderizadores", desc: "V-Ray, Enscape e Lumion prontos", qty: "INCLUSO" },
    { icon: "♾️", title: "Licença Vitalícia", desc: "Pague uma vez. Use para sempre", qty: "VITALÍCIO" },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <Label>O que você recebe</Label>
          <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Tudo que um arquiteto precisa. Em um só lugar.
          </h2>
        </Reveal>
        <div className="space-y-3">
          {items.map((it) => (
            <Reveal key={it.title}>
              <div className="flex items-center gap-4 bg-[#0d1520]/60 border border-[#1a2a3a] rounded-xl p-5">
                <span className="text-2xl shrink-0">{it.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-syne font-bold text-white text-sm sm:text-base">{it.title}</h3>
                  <p className="text-[#7a8fa8] text-xs sm:text-sm">{it.desc}</p>
                </div>
                <span className="font-bebas text-xl sm:text-2xl text-[#00c8ff] shrink-0">{it.qty}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 4. VALUE STACK ── */
const ValueSection = () => {
  const rows = [
    { item: "Pack de blocos AutoCAD profissional", price: "R$ 120,00" },
    { item: "Biblioteca SketchUp completa", price: "R$ 150,00" },
    { item: "Famílias e templates Revit", price: "R$ 130,00" },
    { item: "Blocos para V-Ray, Enscape e Lumion", price: "R$ 80,00" },
    { item: "Licenças dos programas", price: "R$ 200,00+" },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <Label>Quanto vale</Label>
          <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Quanto custaria montar isso sozinho?
          </h2>
        </Reveal>
        <Reveal>
          <div className="bg-[#0d1520]/60 border border-[#1a2a3a] rounded-xl overflow-hidden">
            {rows.map((r, i) => (
              <div key={i} className="flex justify-between items-center px-5 py-4 border-b border-[#1a2a3a] last:border-b-0">
                <span className="text-sm sm:text-base text-[#c0cdd8]">{r.item}</span>
                <span className="text-sm sm:text-base text-[#7a8fa8] font-semibold shrink-0 ml-4">{r.price}</span>
              </div>
            ))}
            {/* total */}
            <div className="flex justify-between items-center px-5 py-5 border-t-2 border-[#00c8ff]/40" style={{ background: "linear-gradient(90deg, rgba(0,200,255,0.05), rgba(10,240,200,0.05))" }}>
              <span className="font-syne font-bold text-white text-base sm:text-lg">Seu investimento hoje</span>
              <span className="font-bebas text-4xl sm:text-5xl" style={{ background: "linear-gradient(135deg, #00c8ff, #0af0c8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>R$ 47</span>
            </div>
          </div>
          <p className="text-center text-[#7a8fa8] text-xs mt-4">Você está pagando menos de 7% do valor real.</p>
        </Reveal>
      </div>
    </section>
  );
};

/* ── 5. TESTIMONIALS ── */
const TestimonialsSection = () => {
  const testimonials = [
    { initial: "A", name: "Amanda Arq.", role: "Arquiteta · São Paulo", text: "Fiquei em dúvida antes de comprar, achei que podia ser mais um material genérico. Depois que acessei, o nível técnico me surpreendeu MUITO. Nunca mais começo projetos do zero." },
    { initial: "B", name: "Beatriz L.", role: "Estudante de Arquitetura · RJ", text: "Me ajudou muito a entender como um projeto deve ser apresentado. Já usei como base para o portfólio e me sinto mais segura nas entregas." },
    { initial: "R", name: "Rodrigo H.", role: "Engenheiro Civil · MG", text: "Comecei a usar como base nos projetos e isso aumentou muito minha confiança nas reuniões com clientes. O padrão técnico passou a ser referência no escritório." },
    { initial: "L", name: "Lucas A.", role: "Eng. Civil · Recife", text: "Achei que ia precisar adaptar muito, mas me surpreendeu. Está praticamente tudo pronto para usar como projeto real. Economiza muito tempo no dia a dia." },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <Label>Prova social</Label>
          <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Quem já tem o Megapack não volta a trabalhar do zero
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <Reveal key={t.initial}>
              <div className="bg-[#0d1520]/60 border border-[#1a2a3a] rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-[#080b10] shrink-0" style={{ background: "linear-gradient(135deg, #00c8ff, #0af0c8)" }}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-syne font-bold text-white text-sm">{t.name}</p>
                    <p className="text-[#7a8fa8] text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-[#f5c842] text-xs mb-2">★★★★★</p>
                <p className="text-[#7a8fa8] text-sm italic leading-relaxed flex-1">"{t.text}"</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 6. ABOUT ── */
const AboutSection = () => (
  <section className="py-16 sm:py-24">
    <div className="container max-w-4xl mx-auto px-4">
      <Reveal className="text-center sm:text-left mb-8">
        <Label>Quem criou</Label>
        <h2 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold">Por que confiar neste material?</h2>
      </Reveal>
      <Reveal>
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full shrink-0 flex items-center justify-center text-5xl" style={{ background: "linear-gradient(135deg, #0d1520, #1a2a3a)" }}>
            👩‍💼
          </div>
          <div>
            <h3 className="font-bebas text-3xl sm:text-4xl mb-1" style={{ background: "linear-gradient(135deg, #00c8ff, #0af0c8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              LARA REMBRANDT
            </h3>
            <p className="text-[#7a8fa8] text-sm mb-4">Arquiteta e Urbanista · Especialista em AutoCAD e IA aplicada a projetos</p>
            <div className="text-[#c0cdd8] text-sm leading-relaxed space-y-3">
              <p>Durante anos na faculdade e no mercado, perdi horas incontáveis desenhando os mesmos blocos do zero, procurando arquivos em sites duvidosos e recebendo DWGs que travavam tudo.</p>
              <p className="font-bold text-white">Cansei.</p>
              <p>Organizei tudo que uso nos meus projetos reais — mobiliário, elétrica, hidráulica, humanização, acessibilidade — em um único pack limpo, leve e pronto para usar.</p>
              <p>Hoje entrego isso por menos do que você gasta num almoço. Porque eu sei exatamente quanto tempo vale uma tarde de projeto perdida.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ── 7. OFFER ── */
const OfferSection = () => {
  const checks = [
    "+15.000 blocos prontos para AutoCAD",
    "+200GB de blocos para SketchUp",
    "+100GB de famílias e templates para Revit",
    "Blocos para V-Ray, Enscape e Lumion",
    "Licença vitalícia de todos os programas",
    "Acesso imediato após o pagamento",
    "Garantia de 7 dias sem risco",
  ];
  return (
    <section id="oferta" className="py-16 sm:py-24">
      <div className="container max-w-2xl mx-auto px-4">
        <Reveal>
          <div className="bg-[#0d1520]/80 border border-[#1a2a3a] rounded-2xl p-8 sm:p-12 text-center">
            <span className="inline-block bg-red-600/20 text-red-400 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
              ⚡ Oferta por tempo limitado
            </span>
            <p className="text-[#7a8fa8] text-base line-through mb-1">De R$ 197,00</p>
            <p className="font-bebas text-[72px] sm:text-[96px] leading-none mb-2" style={{ background: "linear-gradient(135deg, #f5c842, #ff8c00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              R$ 47
            </p>
            <p className="text-[#7a8fa8] text-sm mb-8">Pagamento único • Licença vitalícia • Sem mensalidade</p>

            <div className="text-left max-w-sm mx-auto space-y-3 mb-8">
              {checks.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <span className="text-[#0af0c8] mt-0.5 shrink-0">✓</span>
                  <span className="text-[#c0cdd8] text-sm">{c}</span>
                </div>
              ))}
            </div>

            <CtaButton className="w-full text-base sm:text-lg py-5">🔓 Garantir Meu Megapack Agora — R$ 47</CtaButton>
            <p className="text-[#7a8fa8] text-xs mt-4">🔒 Compra segura • ⚡ Acesso imediato • ↩️ Garantia 7 dias</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ── 8. GUARANTEE ── */
const GuaranteeSection = () => (
  <section className="py-16 sm:py-24">
    <div className="container max-w-2xl mx-auto px-4">
      <Reveal>
        <div className="bg-[#0d1520]/60 border border-[#0af0c8]/30 rounded-2xl p-8 sm:p-12 text-center">
          <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl" style={{ background: "radial-gradient(circle, rgba(10,240,200,0.15), transparent)", boxShadow: "0 0 40px rgba(10,240,200,0.15)" }}>
            🛡️
          </div>
          <h3 className="font-syne text-xl sm:text-2xl font-extrabold text-white mb-3">Risco zero. Garantia total de 7 dias.</h3>
          <p className="text-[#7a8fa8] text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Explore o Megapack por 7 dias completos. Se por qualquer motivo o material não for o que você esperava, basta entrar em contato e devolvemos 100% do seu investimento. Sem burocracia. Sem perguntas.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ── 9. FINAL CTA ── */
const FinalCtaSection = () => (
  <section className="py-16 sm:py-24">
    <div className="container max-w-2xl mx-auto px-4 text-center">
      <Reveal>
        <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
          Pare de procurar blocos pela internet.
        </h2>
        <p className="text-[#7a8fa8] text-sm sm:text-base max-w-md mx-auto mb-8">
          Por menos do que um almoço, você nunca mais perde uma tarde procurando aquele DWG que presta.
        </p>
        <CtaButton className="text-base sm:text-lg">🔓 Quero Meu Megapack Agora — R$ 47</CtaButton>
        <p className="text-[#7a8fa8] text-xs mt-3">Acesso imediato • Licença vitalícia • Garantia 7 dias • Compra 100% segura</p>
      </Reveal>
    </div>
  </section>
);

/* ── FOOTER ── */
const FooterSection = () => (
  <footer className="border-t border-[#1a2a3a] py-8">
    <div className="container max-w-4xl mx-auto px-4 text-center">
      <p className="text-[#7a8fa8] text-xs">© 2026 ARQDrive por Lara Rembrandt · Todos os direitos reservados</p>
      <p className="text-[#7a8fa8] text-xs mt-1">suporte@arqdrive.com · Compra segura e protegida</p>
    </div>
  </footer>
);

/* ── FLOATING CTA ── */
const FloatingCta = () => {
  const isMobile = useIsMobile();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const oferta = document.getElementById("oferta");
      if (oferta) {
        const rect = oferta.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setShow(window.scrollY > window.innerHeight * 0.5 && !isVisible);
      } else {
        setShow(window.scrollY > window.innerHeight * 0.5);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#oferta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`fixed z-50 flex items-center justify-center gap-2 font-bold text-[#080b10] rounded-full cursor-pointer ${isMobile ? "bottom-4 left-4 right-4 py-3.5 text-sm" : "bottom-6 right-6 px-6 py-3 text-sm"}`}
          style={{
            background: "linear-gradient(135deg, #f5c842, #ff8c00)",
            boxShadow: "0 0 30px rgba(245,200,66,0.4)",
            animation: isMobile ? "none" : "mega-float 3s ease-in-out infinite",
          }}
        >
          🔓 Acessar por R$ 47
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default Megapack;
