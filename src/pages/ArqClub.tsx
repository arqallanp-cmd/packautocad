import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShieldCheck,
  Download,
  Clock,
  Zap,
  Star,
  CheckCircle2,
  Gift,
  Lock,
  ArrowRight,
  Users,
  Layers,
  Home,
  Building2,
  Ruler,
  PenTool,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

/* ── scroll-reveal wrapper ── */
const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

/* ── urgency bar ── */
const UrgencyBar = () => (
  <div className="arq-urgency-bar text-white text-center py-2.5 px-4 text-xs sm:text-sm font-semibold tracking-wide">
    🔥 71% OFF só hoje — Acesso vitalício por R$47. Amanhã pode ser tarde.
  </div>
);

/* ── hero ── */
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden arq-bg pt-10 pb-16">
    {/* gradient orbs */}
    <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-arq-gold/10 blur-[140px] pointer-events-none" />
    <div className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] rounded-full bg-arq-neon/8 blur-[120px] pointer-events-none" />

    <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="inline-block bg-arq-gold/10 border border-arq-gold/30 text-arq-gold text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase font-poppins">
          Arq Club · Pack Profissional
        </span>

        <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-white">
          +100 Projetos de Casas Térreas, Sobrados, Kitnets e MCMV{" "}
          <span className="arq-text-gold">Para Você Construir No Seu Próprio Terreno</span>
        </h1>

        <p className="text-arq-muted text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-poppins">
          Mesmo sem arquiteto ou experiência em obras — é só escolher o modelo, imprimir e entregar pro pedreiro. Plantas completas com elétrica, hidráulica, lista de materiais e tudo que sua obra precisa pra sair do papel sem erro e sem desperdício.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="#pricing" className="arq-btn-primary font-poppins font-bold text-base sm:text-lg px-10 py-4 rounded-xl inline-flex items-center gap-2">
            ⚡ Quero Meus +100 Projetos Agora
          </a>
          <p className="text-arq-muted text-xs">🔒 Pagamento seguro · 📦 Acesso imediato · ✅ Garantia de 7 dias</p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { v: "500+", l: "Projetos" },
            { v: "100%", l: "Editáveis" },
            { v: "R$47", l: "Vitalício" },
          ].map((s) => (
            <div key={s.l} className="arq-card-subtle rounded-xl py-3 px-2 text-center">
              <p className="font-poppins text-xl sm:text-2xl font-bold text-arq-gold">{s.v}</p>
              <p className="text-arq-muted text-[10px] sm:text-xs mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ── for who ── */
const ForWhoSection = () => {
  const personas = [
    { icon: <Home size={28} />, title: "Arquitetos", desc: "Que querem agilizar entregas com projetos prontos de alta qualidade." },
    { icon: <Building2 size={28} />, title: "Engenheiros", desc: "Que precisam de referências técnicas e detalhamentos completos." },
    { icon: <Ruler size={28} />, title: "Estudantes", desc: "Que buscam aprender com projetos reais e profissionais." },
    { icon: <PenTool size={28} />, title: "Designers", desc: "Que desejam inspiração e base para projetos de interiores." },
  ];
  return (
    <section className="arq-bg-card py-16 lg:py-24">
      <div className="container max-w-5xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <p className="text-arq-gold font-poppins text-sm font-semibold tracking-widest uppercase mb-3">Para quem é</p>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">Feito para profissionais como você</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personas.map((p, i) => (
            <Reveal key={i}>
              <div className="arq-card rounded-xl p-6 text-center hover:border-arq-gold/40 transition-colors h-full">
                <div className="text-arq-neon mb-4 flex justify-center">{p.icon}</div>
                <h3 className="font-poppins font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-arq-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── benefits ── */
const BenefitsSection = () => {
  const benefits = [
    { icon: <Clock size={24} />, title: "Economia de Tempo", desc: "Elimine horas de trabalho repetitivo com projetos prontos." },
    { icon: <Layers size={24} />, title: "100% Editável", desc: "Todos os arquivos em DWG, RVT e SKP para editar livremente." },
    { icon: <Star size={24} />, title: "Qualidade Profissional", desc: "Projetos detalhados seguindo normas técnicas brasileiras." },
    { icon: <Download size={24} />, title: "Download Imediato", desc: "Acesso instantâneo após a confirmação do pagamento." },
    { icon: <Users size={24} />, title: "Comunidade VIP", desc: "Grupo exclusivo para networking e troca de experiências." },
    { icon: <Award size={24} />, title: "Certificado Incluso", desc: "Certificado de aproveitamento para seu portfólio." },
  ];
  return (
    <section className="arq-bg py-16 lg:py-24">
      <div className="container max-w-5xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <p className="text-arq-neon font-poppins text-sm font-semibold tracking-widest uppercase mb-3">Benefícios</p>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">Por que escolher o Arq Club?</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={i}>
              <div className="flex gap-4 arq-card rounded-xl p-5 hover:border-arq-neon/30 transition-colors h-full">
                <div className="text-arq-gold shrink-0 mt-0.5">{b.icon}</div>
                <div>
                  <h3 className="font-poppins font-bold text-white mb-1">{b.title}</h3>
                  <p className="text-arq-muted text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── testimonials carousel ── */
const testimonials = [
  { name: "Arq. Fernanda S.", role: "Arquiteta", text: "Os projetos me economizam pelo menos 10 horas por semana. Qualidade absurda!", rating: 5 },
  { name: "Eng. Rafael M.", role: "Engenheiro Civil", text: "Material de referência incrível. Uso em todos os meus projetos comerciais.", rating: 5 },
  { name: "Isabela C.", role: "Estudante de Arquitetura", text: "Melhor investimento que fiz na faculdade. Meus trabalhos ficaram muito mais profissionais.", rating: 5 },
  { name: "Carlos A.", role: "Designer de Interiores", text: "A qualidade dos detalhamentos é impressionante. Recomendo demais!", rating: 5 },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="arq-bg-card py-16 lg:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <Reveal className="text-center mb-10">
          <p className="text-arq-gold font-poppins text-sm font-semibold tracking-widest uppercase mb-3">Depoimentos</p>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">Quem comprou, aprovou</h2>
        </Reveal>

        <div className="relative">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="arq-card rounded-2xl p-8 text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonials[idx].rating }).map((_, i) => (
                <Star key={i} size={18} className="text-arq-gold fill-arq-gold" />
              ))}
            </div>
            <p className="text-white text-lg sm:text-xl italic mb-6 leading-relaxed font-poppins">
              "{testimonials[idx].text}"
            </p>
            <p className="font-poppins font-bold text-white">{testimonials[idx].name}</p>
            <p className="text-arq-muted text-sm">{testimonials[idx].role}</p>
          </motion.div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 arq-card-subtle rounded-full p-2 text-arq-muted hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 arq-card-subtle rounded-full p-2 text-arq-muted hover:text-white transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-arq-gold" : "bg-white/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── product preview ── */
const ProductPreview = () => {
  const items = [
    { title: "Projetos Residenciais", count: "200+", icon: <Home size={24} /> },
    { title: "Projetos Comerciais", count: "150+", icon: <Building2 size={24} /> },
    { title: "Detalhamentos Técnicos", count: "100+", icon: <Ruler size={24} /> },
    { title: "Projetos de Interiores", count: "50+", icon: <PenTool size={24} /> },
  ];
  return (
    <section className="arq-bg py-16 lg:py-24">
      <div className="container max-w-5xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <p className="text-arq-neon font-poppins text-sm font-semibold tracking-widest uppercase mb-3">O que você recebe</p>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">Preview da Biblioteca</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <Reveal key={i}>
              <div className="arq-card rounded-xl p-6 text-center hover:border-arq-gold/40 transition-colors group h-full">
                <div className="text-arq-neon mb-3 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                <p className="font-poppins font-bold text-2xl text-arq-gold mb-1">{item.count}</p>
                <p className="font-poppins font-semibold text-white text-sm">{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── pricing ── */
const PricingSection = () => (
  <section id="pricing" className="arq-bg-card py-16 lg:py-24">
    <div className="container max-w-lg mx-auto px-4">
      <Reveal className="text-center mb-10">
        <p className="text-arq-gold font-poppins text-sm font-semibold tracking-widest uppercase mb-3">Investimento</p>
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">Acesso Vitalício</h2>
      </Reveal>

      <Reveal>
        <div className="arq-card border-arq-gold/50 rounded-2xl p-8 relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-arq-neon text-[#080812] font-poppins font-bold text-xs px-4 py-1 rounded-full">
            🔥 Mais vendido
          </div>

          <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-white text-center mb-2">Arq Club — Pack Completo</h3>
          <p className="text-center text-arq-muted text-sm mb-6">Tudo que você precisa em um único acesso</p>

          <ul className="space-y-3 mb-6 text-sm text-white">
            {[
              "+500 Projetos Arquitetônicos completos",
              "Arquivos DWG, RVT e SKP editáveis",
              "Detalhamentos técnicos profissionais",
              "Templates de prancha ABNT",
              "Comunidade VIP exclusiva",
              "Certificado de aproveitamento",
              "Atualizações vitalícias",
              "14 dias de garantia incondicional",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-arq-neon shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/10 my-6" />

          <div className="text-center mb-2">
            <span className="text-xs bg-red-500/20 text-red-400 font-bold px-2 py-0.5 rounded">-71% OFF</span>
            <span className="text-arq-muted line-through text-sm ml-2">R$164,00</span>
          </div>
          <div className="text-center mb-6">
            <span className="font-poppins text-5xl sm:text-6xl font-extrabold arq-text-gold">R$47</span>
            <span className="text-arq-muted text-lg">,00</span>
          </div>

          <a
            href="https://pay.wiapy.com/"
            className="arq-btn-primary block text-center font-poppins font-bold text-lg py-4 rounded-xl w-full"
          >
            → GARANTIR MEU ACESSO
          </a>

          <div className="flex items-center justify-center gap-4 mt-4 text-arq-muted text-[10px] sm:text-xs flex-wrap">
            <span className="flex items-center gap-1"><Lock size={12} /> Pagamento seguro</span>
            <span className="flex items-center gap-1"><Download size={12} /> Acesso imediato</span>
            <span className="flex items-center gap-1"><ShieldCheck size={12} /> 14 dias de garantia</span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ── bonuses ── */
const BonusSection = () => {
  const bonuses = [
    { icon: <Gift size={24} />, title: "Pack de Texturas HD", value: "R$49,00", desc: "Mais de 200 texturas em alta resolução para renderização." },
    { icon: <Gift size={24} />, title: "Templates de Apresentação", value: "R$39,00", desc: "Layouts prontos para impressionar seus clientes." },
    { icon: <Gift size={24} />, title: "Guia de Normas ABNT", value: "R$29,00", desc: "Manual completo e atualizado das normas técnicas." },
  ];
  return (
    <section className="arq-bg py-16 lg:py-24">
      <div className="container max-w-4xl mx-auto px-4">
        <Reveal className="text-center mb-10">
          <p className="text-arq-neon font-poppins text-sm font-semibold tracking-widest uppercase mb-3">🎁 Bônus exclusivos</p>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">Inclusos no seu acesso</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4">
          {bonuses.map((b, i) => (
            <Reveal key={i}>
              <div className="arq-card rounded-xl p-6 text-center border-arq-neon/20 hover:border-arq-neon/40 transition-colors h-full">
                <div className="text-arq-neon mb-3 flex justify-center">{b.icon}</div>
                <h3 className="font-poppins font-bold text-white mb-1">{b.title}</h3>
                <p className="text-arq-muted text-sm mb-2">{b.desc}</p>
                <p className="text-arq-gold font-poppins font-bold text-sm">Valor: <span className="line-through">{b.value}</span> <span className="text-arq-neon">GRÁTIS</span></p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── package summary ── */
const PackageSummary = () => (
  <section className="arq-bg-card py-16 lg:py-24">
    <div className="container max-w-md mx-auto px-4">
      <Reveal>
        <div className="arq-card rounded-2xl p-8 text-center">
          <h3 className="font-poppins text-2xl font-bold text-white mb-6">Resumo do Pacote</h3>
          <ul className="space-y-3 text-sm text-left mb-6">
            {[
              { item: "+500 Projetos Completos", value: "R$97,00" },
              { item: "Detalhamentos Técnicos", value: "R$49,00" },
              { item: "Pack de Texturas HD", value: "R$49,00" },
              { item: "Templates de Apresentação", value: "R$39,00" },
              { item: "Guia Normas ABNT", value: "R$29,00" },
              { item: "Comunidade VIP", value: "R$29,00" },
            ].map((r, i) => (
              <li key={i} className="flex justify-between text-white">
                <span>{r.item}</span>
                <span className="text-arq-muted line-through">{r.value}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-white/10 pt-4">
            <p className="text-arq-muted text-sm">Valor total: <span className="line-through">R$292,00</span></p>
            <p className="font-poppins font-extrabold text-3xl arq-text-gold mt-1">Apenas R$47,00</p>
            <p className="text-arq-neon text-xs font-bold mt-1">Economia de 84%</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ── guarantee ── */
const GuaranteeSection = () => (
  <section className="arq-bg py-16 lg:py-24">
    <div className="container max-w-2xl mx-auto px-4 text-center">
      <Reveal>
        <div className="arq-card rounded-2xl p-10 border-arq-neon/20">
          <ShieldCheck size={48} className="text-arq-neon mx-auto mb-4" />
          <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-white mb-4">Garantia Incondicional de 14 Dias</h2>
          <p className="text-arq-muted leading-relaxed">
            Se por qualquer motivo você não ficar satisfeito, basta enviar uma mensagem dentro de 14 dias e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ── FAQ ── */
const faqs = [
  { q: "Quando recebo o acesso?", a: "Imediatamente após a confirmação do pagamento. Você recebe o link de download no e-mail cadastrado." },
  { q: "Os arquivos são editáveis?", a: "Sim! Todos os projetos vêm em formatos DWG, RVT e SKP, totalmente editáveis." },
  { q: "Funciona em qual software?", a: "AutoCAD, Revit, SketchUp e softwares compatíveis com os formatos DWG, RVT e SKP." },
  { q: "Posso usar comercialmente?", a: "Sim, sem restrições. Use em projetos pessoais, acadêmicos ou comerciais." },
  { q: "E se eu não gostar?", a: "Você tem 14 dias de garantia incondicional. Devolvemos 100% do valor sem questionamentos." },
  { q: "O acesso é realmente vitalício?", a: "Sim! Uma vez que você adquire, o acesso é seu para sempre, incluindo futuras atualizações." },
];

const FaqSection = () => (
  <section className="arq-bg-card py-16 lg:py-24">
    <div className="container max-w-2xl mx-auto px-4">
      <Reveal className="text-center mb-10">
        <p className="text-arq-gold font-poppins text-sm font-semibold tracking-widest uppercase mb-3">Dúvidas?</p>
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">Perguntas Frequentes</h2>
      </Reveal>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-white/10 rounded-xl px-5 arq-bg">
            <AccordionTrigger className="font-poppins font-semibold text-sm sm:text-base hover:no-underline text-white">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-arq-muted text-sm leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Reveal className="text-center mt-10">
        <a href="#pricing" className="arq-btn-primary inline-flex items-center gap-2 font-poppins font-bold text-base sm:text-lg px-10 py-4 rounded-xl">
          ✅ GARANTIR MEU ACESSO — R$47
        </a>
      </Reveal>
    </div>
  </section>
);

/* ── footer CTA ── */
const FooterCta = () => (
  <>
    <section className="arq-bg py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-arq-gold/5 pointer-events-none" />
      <div className="container max-w-2xl mx-auto px-4 relative z-10 text-center">
        <Reveal>
          <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white mb-4">
            Última chance.<br /><span className="arq-text-gold">Não deixe pra depois.</span>
          </h2>
          <p className="text-arq-muted mb-8">
            +500 projetos, templates, texturas e bônus exclusivos. Acesso vitalício por <strong className="text-arq-gold">R$47,00</strong>.
          </p>
          <a href="https://pay.wiapy.com/" className="arq-btn-primary inline-flex items-center gap-2 font-poppins font-bold text-base sm:text-lg px-10 py-4 rounded-xl">
            🚀 GARANTIR MEU ACESSO POR R$47
          </a>
          <p className="text-arq-muted/60 text-xs mt-4">🔒 Pagamento seguro · Acesso imediato · Garantia de 14 dias</p>
        </Reveal>
      </div>
    </section>

    <footer className="arq-bg-card border-t border-white/5 py-8">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <p className="text-arq-muted text-sm mb-2">© 2026 Arq Club. Todos os direitos reservados.</p>
        <p className="text-arq-muted text-xs">Política de Privacidade · Termos de Uso</p>
      </div>
    </footer>
  </>
);

/* ── page ── */
const ArqClub = () => {
  return (
    <main className="min-h-screen arq-page">
      <UrgencyBar />
      <HeroSection />
      <ForWhoSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ProductPreview />
      <PricingSection />
      <BonusSection />
      <PackageSummary />
      <GuaranteeSection />
      <FaqSection />
      <FooterCta />
    </main>
  );
};

export default ArqClub;
