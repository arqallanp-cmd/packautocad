import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Em quanto tempo recebo os arquivos?", a: "Imediato. Pagou, recebeu o link por e-mail e já pode baixar tudo na hora." },
  { q: "Funciona em qualquer versão do AutoCAD?", a: "Sim! Testado e compatível do AutoCAD 2018 ao 2025, incluindo versões LT." },
  { q: "Preciso instalar algo?", a: "Não. São arquivos .DWG padrão. Abre, arrasta e usa." },
  { q: "Posso usar em projetos comerciais?", a: "Pode! Sem restrição nenhuma. Use em quantos projetos quiser." },
  { q: "Os blocos travam o AutoCAD?", a: "Não. Todos foram otimizados pra serem leves. Zero travamento." },
  { q: "Como funcionam os prompts de IA?", a: "Você recebe 5 prompts prontos com instruções passo a passo pra gerar renders realistas e humanizar plantas usando IA. Sem software caro." },
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Ainda tem dúvida?</p>
          <h2 className="font-display text-3xl font-bold">Perguntas frequentes</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-5 bg-background">
              <AccordionTrigger className="font-display font-semibold text-sm hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold px-8 py-3 rounded-lg shadow-gold hover:scale-105 transition-transform"
          >
            → Quero o Pack agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
