import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ─── palette as inline tokens (scoped to this page) ─── */
const C = {
  bg: "#0A0A0A",
  surface: "#111111",
  border: "#1E1E1E",
  cta: "#FF4D00",
  ctaHover: "#E63D00",
  text: "#FFFFFF",
  textSec: "#999999",
  green: "#00C853",
  red: "#FF3B30",
  gold: "#FFB800",
};

/* ─── reusable CTA button ─── */
const CtaButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.a
    href="https://pay.kiwify.com.br/placeholder"
    target="_blank"
    rel="noopener noreferrer"
    className={`cta-btn block w-full text-center font-bold text-lg uppercase py-4 rounded-[14px] text-white cursor-pointer select-none ${className}`}
    style={{
      background: C.cta,
      boxShadow: `0 0 30px ${C.cta}44`,
    }}
    whileTap={{ scale: 0.97 }}
    whileHover={{ background: C.ctaHover }}
  >
    {children}
  </motion.a>
);

/* ─── Check / X helpers ─── */
const Check = () => <span style={{ color: C.green }} className="mr-3 text-lg shrink-0">✅</span>;
const XMark = () => <span style={{ color: C.red }} className="mr-3 text-lg shrink-0">✗</span>;

/* ─── Product Card ─── */
const ProductCard = ({
  icon,
  title,
  tag,
  items,
  footer,
}: {
  icon: string;
  title: string;
  tag?: string;
  items: string[];
  footer?: string;
}) => (
  <div
    className="rounded-2xl p-5 mb-4"
    style={{ background: C.surface, border: `1px solid ${C.border}` }}
  >
    <div className="flex items-center gap-3 mb-3">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    {tag && (
      <span
        className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
        style={{ background: C.border, color: C.gold }}
      >
        {tag}
      </span>
    )}
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start text-[17px] text-white leading-relaxed">
          <Check />
          {item}
        </li>
      ))}
    </ul>
    {footer && (
      <p className="mt-4 text-[13px]" style={{ color: C.textSec }}>
        {footer}
      </p>
    )}
  </div>
);

/* ─── Testimonial Card ─── */
const TestimonialCard = ({ quote, author }: { quote: string; author: string }) => (
  <div
    className="rounded-2xl p-5 mb-4"
    style={{ background: C.surface, border: `1px solid ${C.border}` }}
  >
    <div className="mb-2 text-lg" style={{ color: C.gold }}>⭐⭐⭐⭐⭐</div>
    <p className="text-white text-base italic leading-relaxed mb-3">"{quote}"</p>
    <p className="text-sm" style={{ color: C.textSec }}>— {author}</p>
  </div>
);

/* ─── Section divider ─── */
const Divider = () => <div className="w-full h-px my-0" style={{ background: C.border }} />;

/* ═══════════════════════════════════════════ PAGE ═══════════════════════════════════════════ */

const Teste02 = () => {
  const [showBottomBar, setShowBottomBar] = useState(true);
  const ctaRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 200;
      let nearCta = false;
      ctaRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight + threshold && rect.bottom > -threshold) {
          nearCta = true;
        }
      });
      setShowBottomBar(!nearCta);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const registerCta = (i: number) => (el: HTMLDivElement | null) => {
    ctaRefs.current[i] = el;
  };

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
      {/* COMPONENT 1 — Sticky Top Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-9 text-[13px] font-bold text-white"
        style={{ background: C.cta }}
      >
        ⚡ OFERTA LIMITADA — R$47 pagamento único
      </div>

      {/* Spacer for fixed top bar */}
      <div className="h-9" />

      <div className="max-w-[480px] mx-auto px-5">
        {/* COMPONENT 2 — Hero */}
        <section className="pt-10 pb-8">
          <p className="text-center text-[28px] font-black text-white tracking-tight">ARQPACK</p>
          <p className="text-center text-[13px] mt-1" style={{ color: C.textSec }}>
            O pacote completo para arquitetura
          </p>

          <div className="mt-12 text-center">
            <h1 className="text-[32px] font-bold leading-[1.1]">
              AutoCAD. SketchUp. Revit.
            </h1>
            <h1 className="text-[32px] font-bold leading-[1.1] mt-1">
              Vitalícios. Os três.
            </h1>
            <p className="text-[40px] font-black mt-1" style={{ color: C.cta }}>
              Por R$47.
            </p>
          </div>

          <div className="mt-8" ref={registerCta(0)}>
            <CtaButton>🔥 QUERO O ARQPACK AGORA</CtaButton>
          </div>
          <p className="text-center text-[13px] mt-3" style={{ color: C.textSec }}>
            🔒 Acesso imediato · Garantia 14 dias
          </p>
        </section>

        <Divider />

        {/* COMPONENT 3 — Price Anchor */}
        <section className="py-10">
          <div className="rounded-2xl p-6" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: C.textSec }}>
              O mercado cobra:
            </p>
            {[
              ["AutoCAD", "R$329/mês"],
              ["SketchUp", "R$299/mês"],
              ["Revit", "R$329/mês"],
            ].map(([sw, price]) => (
              <p key={sw} className="text-lg text-white mb-2">
                {sw} → {price}
              </p>
            ))}
            <div className="h-px my-4" style={{ background: C.border }} />
            <p className="text-base line-through" style={{ color: C.red }}>
              Total: R$957 por mês.
            </p>
            <div className="mt-8">
              <p className="text-base" style={{ color: C.textSec }}>Aqui?</p>
              <p className="text-[28px] font-bold text-white mt-1">R$47. Uma vez. Para sempre.</p>
              <p className="text-sm mt-1" style={{ color: C.textSec }}>
                Sem renovação. Sem mensalidade.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* COMPONENT 4 — Pain Section */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-6">Você ainda faz isso?</h2>
          <div className="space-y-3">
            {[
              "Desenha bloco do zero todo projeto",
              "Baixa DWG da internet que trava tudo",
              "Paga mensalidade cara todo mês",
              "Perde horas sem componente certo no SketchUp",
              "Família do Revit errada, projeto travado",
            ].map((pain, i) => (
              <div key={i} className="flex items-start text-[17px] leading-relaxed">
                <XMark />
                <span>{pain}</span>
              </div>
            ))}
          </div>
          <p className="text-[22px] font-bold mt-8" style={{ color: C.cta }}>
            Acaba hoje.
          </p>
        </section>

        <Divider />

        {/* COMPONENT 5 — CTA Block #2 */}
        <section className="py-10" ref={registerCta(1)}>
          <p className="text-base text-center mb-4" style={{ color: C.textSec }}>
            3 softwares. Bibliotecas completas.
          </p>
          <CtaButton>🔥 GARANTIR MEU ARQPACK — R$47</CtaButton>
        </section>

        <Divider />

        {/* COMPONENT 6 — Products */}
        <section className="py-10">
          <ProductCard
            icon="📐"
            title="AUTOCAD VITALÍCIO"
            tag="Licença vitalícia"
            items={[
              "+4.500 blocos DWG organizados",
              "+15.000 blocos extras",
              "300 hachuras profissionais",
              "200 blocos dinâmicos",
              "Templates ABNT prontos",
              "+100 atalhos profissionais",
            ]}
            footer="Compatível AutoCAD 2014–2026"
          />
          <ProductCard
            icon="🧊"
            title="SKETCHUP VITALÍCIO"
            items={[
              "+2.000 componentes 3D",
              "+500 materiais e texturas",
              "Estilos de renderização",
              "Templates por ambiente",
              "Vegetação, pessoas, veículos",
            ]}
          />
          <ProductCard
            icon="🏗️"
            title="REVIT VITALÍCIO"
            items={[
              "+3.000 famílias RFA",
              "Estrutural, elétrico, hidráulico",
              "Mobiliário paramétrico",
              "Templates ABNT",
              "Famílias de anotação",
            ]}
          />
        </section>

        <Divider />

        {/* COMPONENT 7 — Bonus */}
        <section className="py-10">
          <h2 className="text-[22px] font-bold mb-6">🎁 BÔNUS INCLUSOS</h2>
          <div className="space-y-3">
            {[
              "Certificado Autodesk 20h",
              "Grupo VIP vitalício",
              "Guia AutoCAD → Revit → SketchUp",
              "Garantia de 14 dias",
            ].map((b, i) => (
              <div key={i} className="flex items-start text-[17px] leading-relaxed">
                <Check />
                {b}
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* COMPONENT 8 — Price Summary Card */}
        <section className="py-10" ref={registerCta(2)}>
          <div
            className="rounded-2xl p-6"
            style={{ background: C.surface, border: `2px solid ${C.cta}` }}
          >
            <p className="text-base mb-1">
              <span style={{ color: C.textSec }}>Valor real: </span>
              <span className="line-through" style={{ color: C.textSec }}>R$11.484/ano</span>
            </p>
            <p className="mb-1">
              <span style={{ color: C.textSec }}>Você paga: </span>
              <span className="text-[44px] font-black" style={{ color: C.cta }}>R$47</span>
            </p>
            <p className="text-sm mb-6" style={{ color: C.textSec }}>
              Pagamento único. Vitalício. Para sempre.
            </p>
            <CtaButton>🔥 QUERO O ARQPACK AGORA</CtaButton>
          </div>
        </section>

        <Divider />

        {/* COMPONENT 9 — Testimonials */}
        <section className="py-10">
          <TestimonialCard
            quote="Recuperei o valor no primeiro projeto."
            author="Eng. Lucas P."
          />
          <TestimonialCard
            quote="Nunca mais desenhei bloco do zero."
            author="Arq. Felipe R."
          />
          <TestimonialCard
            quote="3 softwares por R$47. Não tem explicação."
            author="Arq. Camila S."
          />
        </section>

        <Divider />

        {/* COMPONENT 10 — Creator */}
        <section className="py-10 text-center">
          <div
            className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl"
            style={{ background: C.border }}
          >
            👩‍💼
          </div>
          <p className="text-xl font-bold">Lara Rembrandt</p>
          <p className="text-sm mt-1" style={{ color: C.textSec }}>
            Arquiteta · Especialista AutoCAD e BIM
          </p>
          <div
            className="mt-6 text-left rounded-xl p-4"
            style={{
              background: C.surface,
              borderLeft: `3px solid ${C.cta}`,
            }}
          >
            <p className="text-base italic leading-relaxed" style={{ color: "#ccc" }}>
              "Perdi anos pagando mensalidade cara. Montei tudo que uso nos meus projetos.
              Entrego por R$47 porque sei quanto custa uma tarde de projeto perdida."
            </p>
          </div>
        </section>

        <Divider />

        {/* COMPONENT 11 — Guarantee */}
        <section className="py-10 text-center">
          <div className="text-5xl mb-4" style={{ color: C.green }}>🛡️</div>
          <h2 className="text-2xl font-bold mb-2">RISCO ZERO</h2>
          <p className="text-lg mb-4" style={{ color: C.textSec }}>
            14 dias de garantia total.
          </p>
          <div className="space-y-1 text-base" style={{ color: C.textSec }}>
            <p>Não gostou? Manda mensagem.</p>
            <p>Devolvo 100%.</p>
            <p>Sem pergunta. Sem burocracia.</p>
          </div>
        </section>

        <Divider />

        {/* COMPONENT 12 — FAQ */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-6">Dúvidas?</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Quando recebo o acesso?", a: "Na hora. Acesso imediato após pagamento." },
              { q: "Funciona em qual versão?", a: "AutoCAD 2014–2026, SketchUp e Revit versões recentes." },
              { q: "Preciso configurar algo?", a: "Não. É só baixar e usar." },
              { q: "Posso usar em projetos pagos?", a: "Sim. Sem restrição." },
              { q: "E se eu já tiver um dos softwares?", a: "Leva pelos outros dois e pelas bibliotecas. Continua valendo." },
            ].map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-0"
                style={{ borderBottom: `1px solid ${C.border}` }}
              >
                <AccordionTrigger
                  className="text-left text-base font-medium text-white hover:no-underline py-4"
                >
                  {q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base pb-2" style={{ color: C.textSec }}>{a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <Divider />

        {/* COMPONENT 13 — Final CTA */}
        <section
          className="py-14 text-center"
          ref={registerCta(3)}
          style={{
            background: `radial-gradient(circle at center, ${C.cta}0D 0%, transparent 70%)`,
          }}
        >
          <h2 className="text-[28px] font-bold mb-2">Não deixa pra depois.</h2>
          <p className="text-base mb-6" style={{ color: C.textSec }}>
            Você vai lembrar desse texto amanhã.
          </p>
          <p className="text-[22px] font-bold mb-6">R$47 — uma vez só</p>
          <CtaButton>🔥 GARANTIR MEU ARQPACK AGORA</CtaButton>
          <p className="text-xs mt-4" style={{ color: C.textSec }}>
            🔒 Seguro · Imediato · Vitalício · 14 dias garantia
          </p>
        </section>

        {/* COMPONENT 15 — Footer */}
        <footer className="py-8 text-center" style={{ background: "#000000" }}>
          <p className="text-xs mb-2" style={{ color: "#666" }}>
            AutoCAD® · SketchUp® · Revit®
          </p>
          <p className="text-xs mb-2" style={{ color: "#666" }}>
            Política de Privacidade · Termos de Uso
          </p>
          <p className="text-xs" style={{ color: "#666" }}>
            © 2026 ArqPack · Lara Rembrandt
          </p>
        </footer>
      </div>

      {/* COMPONENT 14 — Sticky Bottom Bar */}
      <AnimatePresence>
        {showBottomBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-16"
            style={{ background: C.cta }}
          >
            <span className="text-sm font-bold text-white">ArqPack — R$47</span>
            <a
              href="https://pay.kiwify.com.br/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg font-bold text-sm"
              style={{ background: "#FFFFFF", color: C.cta }}
            >
              GARANTIR →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom bar spacer */}
      <div className="h-16" />
    </div>
  );
};

export default Teste02;
