import { motion } from "framer-motion";

const categories = [
  { icon: "🚪", title: "Portas e Janelas", desc: "O bloco mais inserido em qualquer planta — todos os modelos e ângulos de abertura" },
  { icon: "🛋️", title: "Mobiliário Completo", desc: "Sofás, poltronas, estantes, mesas e cadeiras para todos os ambientes" },
  { icon: "🛏️", title: "Camas / Dormitórios", desc: "Camas de solteiro, casal, beliche, criados-mudos e guarda-roupas" },
  { icon: "🍳", title: "Cozinhas + Gourmet", desc: "Bancadas, ilhas, eletrodomésticos, mesas integradas e áreas gourmet" },
  { icon: "🛁", title: "Banheiros / Sanitários", desc: "Louças, metais, box, banheiras e acessórios sanitários completos" },
  { icon: "🏊", title: "Área de Lazer / Churrasqueira", desc: "Piscinas, churrasqueiras, pergolados e espaços de lazer em condomínios" },
  { icon: "💻", title: "Home Office", desc: "Mesas, cadeiras ergonômicas, estantes e layouts de escritório residencial" },
  { icon: "🏢", title: "Escritório / Corporativo", desc: "Baias, salas de reunião, recepção e ambientes corporativos completos" },
  { icon: "🏋️", title: "Academia / Fitness", desc: "Equipamentos de musculação, cardio e áreas de lazer em condomínios" },
  { icon: "👤", title: "Pessoas / Humanização", desc: "Figuras humanas em planta e elevação para humanizar pranchetas" },
  { icon: "🌿", title: "Vegetação / Paisagismo", desc: "Árvores, arbustos, jardins e elementos de paisagismo em planta" },
  { icon: "🚗", title: "Automóveis / Veículos", desc: "Carros, motos, caminhões e ônibus para estacionamentos e implantações" },
  { icon: "🪜", title: "Escadas / Rampas", desc: "Retas, em L, caracol, com detalhamento técnico e corrimão" },
  { icon: "♿", title: "Acessibilidade / PNE", desc: "Blocos NBR 9050 atualizados — banheiros, rampas, vagas e sinalização" },
  { icon: "⚡", title: "Elétrica / Símbolos", desc: "Diagramas, quadros, tomadas, interruptores e instalações elétricas" },
  { icon: "💧", title: "Hidráulica", desc: "Tubulações, conexões, reservatórios e instalações hidrossanitárias" },
  { icon: "💡", title: "Iluminação / Luminárias", desc: "Spots, pendentes, arandelas e luminárias para projetos de interiores" },
  { icon: "🏠", title: "Cobertura / Telhados", desc: "Tipos de telha, calhas, rufos, estruturas e cortes de cobertura" },
  { icon: "🚨", title: "Sinalização / Rota de Fuga", desc: "Extintores, hidrantes, placas de emergência e rotas de evacuação" },
  { icon: "🏥", title: "Área Médica / Hospitalar", desc: "Consultórios, leitos, equipamentos hospitalares e plantas de clínicas" },
];

const BlocksSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">O que vem no pack</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            +4.500 blocos organizados,<br />
            <span className="text-gradient-gold">prontos para usar agora</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Arquivos .DWG leves, categorizados e testados do AutoCAD 2018 ao 2025. É só arrastar.
          </p>
        </motion.div>

        {/* Single container fade — no individual card stagger */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((c) => (
            <div
              key={c.title}
              className="bg-background border-l-[3px] border-l-primary border border-border rounded-xl p-5 hover:border-primary/40 transition-colors"
            >
              <span className="text-3xl block mb-3">{c.icon}</span>
              <p className="font-display font-bold text-sm text-foreground mb-1">{c.title}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold px-8 py-3 rounded-lg shadow-gold hover:scale-105 transition-transform"
          >
            → Quero todos os blocos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlocksSection;
