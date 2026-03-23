import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── palette ─── */
const C = {
  bgPrimary: "#0D0D1A",
  bgAlt: "#12102B",
  heroGrad: "linear-gradient(160deg, #2D0F6B 0%, #0D0D1A 100%)",
  purple: "#7B2FBE",
  purpleLight: "#9B4DEC",
  cta: "#FF4D00",
  ctaHover: "#E63D00",
  gold: "#FFB800",
  text: "#FFFFFF",
  textSec: "#BBBBBB",
  textMuted: "#999999",
  green: "#00C853",
  red: "#FF3B30",
  cardBorder: "#2A1F4A",
  cardBg: "#16112E",
};

/* ─── CTA Button ─── */
const CtaButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.a
    href="https://pay.kiwify.com.br/placeholder"
    target="_blank"
    rel="noopener noreferrer"
    className={`block w-full text-center font-extrabold text-[17px] uppercase py-4 rounded-xl text-white cursor-pointer select-none ${className}`}
    style={{ background: C.cta, boxShadow: `0 4px 20px rgba(255,77,0,0.4)` }}
    whileTap={{ scale: 0.97 }}
    whileHover={{ background: C.ctaHover }}
  >
    {children}
  </motion.a>
);

/* ─── Section Title Strip ─── */
const SectionStrip = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg px-5 py-2.5 text-center text-[14px] font-bold text-white uppercase tracking-wide" style={{ background: C.purple }}>
    {children}
  </div>
);

/* ─── Check / X ─── */
const Check = () => <span style={{ color: C.green }} className="mr-2 text-base shrink-0">✅</span>;
const XMark = () => <span style={{ color: C.red }} className="mr-2 text-base shrink-0">✗</span>;

/* ─── FAQ Item ─── */
const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-[15px] font-bold text-white pr-4">{q}</span>
        <span className="text-xl text-white shrink-0 transition-transform duration-200" style={{ transform: open ? "rotate(45deg)" : "none" }}>+</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-[14px] leading-relaxed" style={{ color: C.textSec }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */

const Teste02 = () => {
  const [showBottomBar, setShowBottomBar] = useState(true);
  const ctaRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let nearCta = false;
      ctaRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight + 200 && rect.bottom > -200) nearCta = true;
      });
      setShowBottomBar(!nearCta);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reg = (i: number) => (el: HTMLDivElement | null) => { ctaRefs.current[i] = el; };

  return (
    <div style={{ background: C.bgPrimary, color: C.text, fontFamily: "'Poppins', sans-serif" }} className="min-h-screen">
      {/* ── Font ── */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

      {/* SECTION 1 — Sticky Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-9 text-[13px] font-bold text-white" style={{ background: C.cta }}>
        ⚡ OFERTA ESPECIAL · R$47 PAGAMENTO ÚNICO
      </div>
      <div className="h-9" />

      <div className="max-w-[520px] mx-auto">

        {/* SECTION 2 — Hero */}
        <section style={{ background: C.heroGrad }} className="px-5 pt-10 pb-12">
          <div className="flex justify-center mb-3">
            <span className="text-xs font-bold text-white px-4 py-1.5 rounded-full" style={{ background: C.purple }}>🎓 TE PRESENTO O:</span>
          </div>
          <h1 className="text-center text-[30px] font-black uppercase leading-[1.1]">
            DOMINA OS 3 SOFTWARES<br />LÍDERES DA ARQUITETURA<br />COM O <span style={{ color: C.gold }}>ARQPACK</span>
          </h1>
          <p className="text-center text-[14px] mt-2" style={{ color: C.textSec }}>
            AutoCAD + SketchUp + Revit · Licença Vitalícia + Bibliotecas Completas
          </p>

          {/* 3D Mockup */}
          <div className="flex justify-center my-8">
            <div className="w-[240px] h-[240px] rounded-2xl flex flex-col items-center justify-center" style={{ background: `linear-gradient(135deg, ${C.purple}, #4A1A8A)`, boxShadow: `0 20px 60px rgba(123,47,190,0.5)` }}>
              <p className="text-2xl font-black text-white">ARQPACK</p>
              <p className="text-[11px] font-bold text-white/70 uppercase tracking-widest mt-1">ARQUITETURA PROFISSIONAL</p>
              <div className="flex gap-3 mt-4 text-2xl">
                <span>📐</span><span>🧊</span><span>🏗️</span>
              </div>
              <p className="text-[40px] font-black mt-3" style={{ color: C.gold }}>360°</p>
            </div>
          </div>

          <p className="text-center text-[14px] leading-relaxed mb-6" style={{ color: C.textSec }}>
            Cansado de pagar mensalidade cara e perder horas desenhando do zero? O ArqPack resolve os dois problemas por R$47.
          </p>

          <div ref={reg(0)}>
            <CtaButton>ACESSAR AGORA POR APENAS R$47</CtaButton>
          </div>
          <p className="text-center text-[12px] mt-3" style={{ color: C.textMuted }}>
            🔒 Compra 100% segura · 📦 Acesso imediato · 🛡️ Garantia 14 dias
          </p>
        </section>

        {/* SECTION 3 — O que vai conseguir */}
        <section style={{ background: C.bgAlt }} className="px-5 py-10">
          <SectionStrip>ISSO É O QUE VOCÊ VAI CONSEGUIR COM O ARQPACK:</SectionStrip>
          <div className="mt-6 space-y-4">
            {[
              { icon: "▶️", title: "DOMINA OS SOFTWARES LÍDERES", desc: "Aprende AutoCAD, Revit, SketchUp com bibliotecas profissionais prontas para usar." },
              { icon: "📚", title: "ECONOMIZA TEMPO E DINHEIRO", desc: "Utiliza blocos DWG, famílias RFA e componentes 3D organizados para acelerar seus projetos." },
              { icon: "🚀", title: "IMPULSIONA SUA CARREIRA", desc: "Com os 3 softwares vitalícios e bibliotecas completas, entrega projetos em nível profissional." },
            ].map((c, i) => (
              <div key={i} className="rounded-[14px] p-5 text-center" style={{ background: C.cardBg, border: `1px solid ${C.cardBorder}` }}>
                <div className="text-[40px] mb-3">{c.icon}</div>
                <h3 className="text-[16px] font-bold text-white mb-2">{c.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: C.textSec }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 — Módulos */}
        <section style={{ background: C.bgPrimary }} className="px-5 py-10">
          <SectionStrip>O QUE VEM NO ARQPACK?</SectionStrip>
          <div className="mt-6 space-y-5">
            {[
              { icon: "📐", title: "AUTOCAD VITALÍCIO", grad: "linear-gradient(90deg, #7B2FBE, #4A1A8A)", items: ["+4.500 blocos DWG organizados", "+15.000 blocos extras", "300 hachuras profissionais", "200 blocos dinâmicos", "Templates plotagem ABNT", "+100 atalhos profissionais", "Compatível AutoCAD 2014–2026"] },
              { icon: "🧊", title: "SKETCHUP VITALÍCIO", grad: "linear-gradient(90deg, #2F6BBE, #1A3A8A)", items: ["+2.000 componentes 3D", "+500 materiais e texturas", "Estilos de renderização prontos", "Templates por ambiente", "Vegetação, pessoas, veículos"] },
              { icon: "🏗️", title: "REVIT VITALÍCIO", grad: "linear-gradient(90deg, #BE2F6B, #8A1A3A)", items: ["+3.000 famílias RFA", "Estrutural, elétrico, hidráulico", "Mobiliário paramétrico", "Templates ABNT completos", "Famílias de anotação"] },
            ].map((m, i) => (
              <div key={i} className="rounded-[14px] overflow-hidden" style={{ border: `1px solid ${C.cardBorder}` }}>
                <div className="flex items-center justify-between px-4 py-3" style={{ background: m.grad }}>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{m.icon}</span>
                    <span className="text-[15px] font-bold text-white">{m.title}</span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: C.gold, color: "#000" }}>INCLUSO</span>
                </div>
                <div className="p-4 space-y-2" style={{ background: C.cardBg }}>
                  {m.items.map((item, j) => (
                    <div key={j} className="flex items-start text-[14px] text-white leading-relaxed">
                      <span className="mr-2 shrink-0" style={{ color: C.purpleLight }}>→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 — Projetos */}
        <section style={{ background: C.bgAlt }} className="px-5 py-8">
          <SectionStrip>ALGUNS PROJETOS QUE VOCÊ VAI CONSEGUIR FAZER...</SectionStrip>
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
            {[
              { icon: "🏠", label: "RENDER NO SKETCHUP" },
              { icon: "🏗️", label: "PROJETO BIM NO REVIT" },
              { icon: "📐", label: "PRANCHAS NO AUTOCAD" },
            ].map((p, i) => (
              <div key={i} className="shrink-0 w-[150px] h-[120px] rounded-xl flex flex-col items-center justify-center" style={{ background: "#1E1A3A" }}>
                <span className="text-[32px]">{p.icon}</span>
                <span className="text-[12px] font-bold mt-2 text-center px-2" style={{ color: C.gold }}>{p.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6 — Bônus */}
        <section style={{ background: C.bgPrimary }} className="px-5 py-10">
          <SectionStrip>MAS ISSO NÃO É TUDO... SE COMPRAR HOJE VOCÊ RECEBE:</SectionStrip>
          <div className="mt-6 space-y-4">
            {[
              { icon: "📋", title: "CERTIFICADO AUTODESK 20H", desc: "Válido para faculdade, estágio e currículo profissional.", value: "R$97" },
              { icon: "💬", title: "GRUPO VIP VITALÍCIO", desc: "Suporte, indicações de projetos e atualizações em primeira mão.", value: "R$47" },
              { icon: "🗺️", title: "GUIA DE INTEROPERABILIDADE", desc: "Como integrar AutoCAD, Revit e SketchUp no mesmo projeto.", value: "R$27" },
              { icon: "⚡", title: "+100 ATALHOS PROFISSIONAIS", desc: "Os atalhos que arquitetos usam para trabalhar 3x mais rápido.", value: "R$17" },
            ].map((b, i) => (
              <div key={i} className="flex gap-4 items-start rounded-[14px] p-4" style={{ background: C.cardBg, border: `1px solid ${C.cardBorder}` }}>
                <div className="w-[60px] h-[60px] rounded-[10px] flex items-center justify-center text-2xl shrink-0" style={{ background: `linear-gradient(135deg, ${C.purple}, #4A1A8A)` }}>
                  {b.icon}
                </div>
                <div>
                  <p className="text-[15px] font-bold text-white">{b.title}</p>
                  <p className="text-[13px] mt-1 leading-snug" style={{ color: C.textSec }}>{b.desc}</p>
                  <p className="text-[11px] font-bold mt-1.5" style={{ color: C.gold }}>VALORADO EM {b.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7 — Resumo de valor */}
        <section style={{ background: C.bgAlt }} className="px-5 py-10" ref={reg(1)}>
          <SectionStrip>TUDO ISSO QUE ESTAMOS TE OFERECENDO TEM UM VALOR DE:</SectionStrip>
          <div className="mt-6">
            {[
              ["AutoCAD Vitalício", "R$3.948/ano"],
              ["SketchUp Vitalício", "R$3.588/ano"],
              ["Revit Vitalício", "R$3.948/ano"],
              ["Pack de Blocos DWG", "R$97"],
              ["Componentes SketchUp", "R$67"],
              ["Famílias Revit", "R$97"],
              ["Certificado 20h", "R$97"],
              ["Grupo VIP", "R$47"],
              ["Guia + Atalhos", "R$44"],
            ].map(([item, val], i) => (
              <div key={i} className="flex justify-between py-2.5 text-[14px]" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
                <span className="text-white">{item}</span>
                <span className="line-through" style={{ color: C.textSec }}>{val}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-[20px] font-bold line-through" style={{ color: C.red }}>TOTAL: R$11.934</p>
            <p className="text-[14px] mt-2" style={{ color: C.textSec }}>MAS SÓ HOJE VOCÊ ACESSA POR:</p>
            <p className="text-[56px] font-black mt-1" style={{ color: C.cta }}>R$47</p>
            <p className="text-[13px]" style={{ color: C.textMuted }}>Pagamento único · Acesso vitalício</p>
          </div>
          <div className="mt-6">
            <CtaButton>QUERO MEU ACESSO AGORA</CtaButton>
          </div>
        </section>

        {/* SECTION 8 — Como comprar */}
        <section style={{ background: C.bgPrimary }} className="px-5 py-10">
          <SectionStrip>COMO COMPRAR?</SectionStrip>
          <div className="mt-6 space-y-6">
            {[
              { num: "1", icon: "🖱️", text: "Toca no botão COMPRAR AGORA" },
              { num: "2", icon: "💳", text: "Preenche seus dados e escolhe o método de pagamento" },
              { num: "3", icon: "📧", text: "Recebe acesso em menos de 5 minutos no seu e-mail" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[16px] font-bold text-white shrink-0" style={{ background: C.purple }}>{s.num}</div>
                <div>
                  <span className="text-xl mr-2">{s.icon}</span>
                  <span className="text-[15px] text-white">{s.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 9 — Depoimentos */}
        <section style={{ background: C.bgAlt }} className="px-5 py-10">
          <SectionStrip>O QUE QUEM JÁ COMPROU ESTÁ DIZENDO</SectionStrip>
          <div className="mt-6 space-y-4">
            {[
              { quote: "Recuperei o valor no primeiro projeto. Sem exagero.", author: "Lucas P.", role: "Engenheiro Civil" },
              { quote: "Nunca mais desenhei bloco do zero. Abro, arrasto, entrego.", author: "Felipe R.", role: "Arquiteto" },
              { quote: "3 softwares vitalícios por R$47. Não tem como não comprar.", author: "Camila S.", role: "Arquiteta e Urbanista" },
            ].map((t, i) => (
              <div key={i} className="rounded-[14px] p-5" style={{ background: C.cardBg, border: `1px solid ${C.cardBorder}` }}>
                <div className="mb-2 text-lg" style={{ color: C.gold }}>⭐⭐⭐⭐⭐</div>
                <p className="text-white text-[15px] italic leading-relaxed mb-3">"{t.quote}"</p>
                <p className="text-[14px] font-bold text-white">{t.author} <span className="font-normal text-[13px]" style={{ color: C.textMuted }}>· {t.role}</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 10 — Garantia */}
        <section style={{ background: C.bgPrimary }} className="px-5 py-10 text-center">
          <div className="text-[64px] mb-4">🛡️</div>
          <h2 className="text-2xl font-bold mb-3">GARANTIA DE 14 DIAS</h2>
          <p className="text-[16px] leading-[1.8] mb-6" style={{ color: C.textSec }}>
            Teste tudo. Acesse cada bloco, cada família, cada software.<br />
            Se não gostar, manda mensagem e devolvemos 100% do seu dinheiro.<br />
            Sem pergunta. Sem burocracia.
          </p>
          <span className="inline-block text-[13px] font-bold px-5 py-1.5 rounded-full" style={{ background: `${C.green}26`, border: `1px solid ${C.green}`, color: C.green }}>
            RISCO ZERO
          </span>
        </section>

        {/* SECTION 11 — FAQ */}
        <section style={{ background: C.bgAlt }} className="px-5 py-10">
          <SectionStrip>PERGUNTAS FREQUENTES</SectionStrip>
          <div className="mt-6">
            {[
              { q: "Quando recebo o acesso após a compra?", a: "Imediatamente. Assim que o pagamento é confirmado, você recebe o acesso por e-mail em menos de 5 minutos." },
              { q: "Funciona em qual versão do AutoCAD, SketchUp e Revit?", a: "AutoCAD 2014 ao 2026, SketchUp versões recentes e Revit versões recentes. Todos compatíveis." },
              { q: "Preciso de um computador muito potente?", a: "Não. Os arquivos são leves e otimizados. Qualquer computador que roda os softwares consegue usar." },
              { q: "Posso usar em trabalhos da faculdade e projetos pagos?", a: "Sim. Você pode usar em projetos pessoais, acadêmicos e profissionais sem restrição." },
              { q: "E se eu já tiver um dos softwares?", a: "Sem problema. Leva pelos outros dois e pelas bibliotecas. O valor continua sendo irresistível." },
              { q: "E se eu não gostar?", a: "14 dias de garantia total. Devolvemos 100% sem perguntas." },
            ].map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </section>

        {/* SECTION 12 — Final CTA */}
        <section style={{ background: C.heroGrad }} className="px-5 py-12 text-center" ref={reg(2)}>
          <h2 className="text-[28px] font-bold mb-3">NÃO DEIXA PRA DEPOIS.</h2>
          <p className="text-[15px] leading-relaxed mb-6" style={{ color: C.textSec }}>
            Você vai abrir o AutoCAD amanhã. Vai precisar de um bloco. Vai lembrar desse texto.
          </p>
          <p className="text-[52px] font-black" style={{ color: C.cta }}>R$47</p>
          <p className="text-[14px] mb-6" style={{ color: C.textMuted }}>Pagamento único · Acesso vitalício aos 3 softwares</p>
          <CtaButton>🔥 QUERO MEU ACESSO AGORA</CtaButton>
          <p className="text-[12px] mt-4" style={{ color: C.textMuted }}>🔒 Seguro · 📦 Imediato · 🛡️ 14 dias garantia</p>
        </section>

        {/* SECTION 14 — Footer */}
        <footer className="py-8 text-center" style={{ background: "#000000" }}>
          <p className="text-xs mb-2" style={{ color: "#555" }}>AutoCAD® · SketchUp® · Revit® — Produtos compatíveis</p>
          <p className="text-xs mb-2" style={{ color: "#555" }}>Política de Privacidade · Termos de Uso</p>
          <p className="text-xs" style={{ color: "#555" }}>© 2026 ArqPack · Todos os direitos reservados</p>
        </footer>
      </div>

      {/* SECTION 13 — Sticky Bottom Bar */}
      <AnimatePresence>
        {showBottomBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-16"
            style={{ background: C.cta }}
          >
            <span className="text-sm font-bold text-white">ArqPack · R$47</span>
            <a href="https://pay.kiwify.com.br/placeholder" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg font-bold text-sm" style={{ background: "#FFFFFF", color: C.cta }}>
              GARANTIR →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-16" />
    </div>
  );
};

export default Teste02;
