import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Quando recebo o acesso após a compra?", a: "Na hora. Assim que o pagamento é confirmado, você recebe o link de download direto no e-mail cadastrado. Sem espera, sem fila." },
  { q: "Funciona em qual versão do AutoCAD?", a: "Qualquer uma. Os arquivos foram testados do AutoCAD 2014 até as versões mais recentes de 2026." },
  { q: "Preciso configurar alguma coisa antes de usar?", a: "Nenhuma. Descompacta a pasta, abre o AutoCAD e arrasta o bloco direto para o seu desenho. Simples assim." },
  { q: "Posso usar em trabalhos da faculdade e projetos pagos?", a: "Sim, sem restrição. Pessoal, acadêmico ou comercial. O pack é seu para usar como quiser, quantas vezes precisar." },
  { q: "E se eu não gostar ou tiver algum problema?", a: "Você tem 14 dias para testar tudo. Se não ficar satisfeito por qualquer motivo, manda uma mensagem e devolvemos 100% do valor. Sem questionamento, sem burocracia." },
  { q: "Os arquivos são pesados? Vão travar meu projeto?", a: "Não. Cada bloco foi otimizado para ser leve e eficiente. Você pode inserir dezenas deles no mesmo arquivo sem comprometer a performance do seu computador." },
];

const FaqSection = () => {
  return (
    <section className="py-12 lg:py-[60px] bg-card">
      <div className="container max-w-2xl lg:max-w-[800px] mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm lg:text-base font-semibold tracking-widest uppercase mb-3">Ainda tem dúvida?</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold">Perguntas frequentes</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-5 bg-background">
              <AccordionTrigger className="font-display font-semibold text-sm lg:text-base hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm lg:text-base leading-relaxed">
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold text-base sm:text-lg px-10 py-5 sm:py-3 rounded-xl shadow-gold hover:scale-105 transition-transform animate-pulse-gold max-w-[320px] mx-auto"
          >
            ✅ QUERO MEU PACK AGORA
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
