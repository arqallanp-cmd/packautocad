import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Em quanto tempo recebo os arquivos?", a: "O acesso é imediato. Assim que o pagamento é confirmado, você recebe o link de download por e-mail e pode baixar todos os arquivos na hora." },
  { q: "Os blocos funcionam em qualquer versão do AutoCAD?", a: "Sim! Todos os blocos foram testados e são compatíveis com AutoCAD 2018 ao 2025, incluindo versões LT." },
  { q: "Preciso instalar algum programa especial?", a: "Não. Basta ter o AutoCAD instalado. Os arquivos são em formato .dwg padrão, prontos para arrastar e usar." },
  { q: "Posso usar em projetos comerciais?", a: "Sim! Você pode usar todos os blocos em projetos pessoais e comerciais sem restrição." },
  { q: "Os blocos são pesados ou travam o AutoCAD?", a: "Não. Todos os blocos foram otimizados para serem leves e não comprometer a performance do seu projeto." },
  { q: "Como funcionam os prompts de IA?", a: "Você recebe 5 prompts prontos com instruções detalhadas para usar em ferramentas de IA e gerar renders realistas, humanizar plantas e criar imagens de apresentação profissionais." },
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">Dúvidas</p>
          <h2 className="font-display text-3xl font-bold">Perguntas frequentes</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-5 bg-gradient-card">
              <AccordionTrigger className="font-display font-semibold text-sm hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
