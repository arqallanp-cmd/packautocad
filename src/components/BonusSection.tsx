import { motion } from "framer-motion";

const bonuses = [
  { num: "01", title: "+15.000 Blocos Extras", desc: "Acervo gigante com blocos extras organizados por categorias.", price: "R$ 97", free: true, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/BONUS_01_kaqiqo.jpg" },
  { num: "02", title: "Hachuras Profissionais", desc: "Madeira, pedra, concreto, cerâmica — hachuras que elevam qualquer prancheta.", price: "R$ 47", free: true, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/BONUS_02_mpl4k2.jpg" },
  { num: "03", title: "Template de Plotagem .ctb", desc: "Configure uma vez e plote com qualidade e consistência para sempre.", price: "R$ 57", free: true, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/BONUS_03_tdeyli.jpg" },
  { num: "04", title: "Anotações e Legendas Pro", desc: "Carimbos, legendas e símbolos com padrão de escritório profissional.", price: "R$ 67", free: true, img: "https://res.cloudinary.com/dxskz0q2z/image/upload/f_auto,q_auto,w_800/BONUS_04_oizxph.jpg" },
];

const BonusSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">🎁 Bônus exclusivos</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Você ainda leva <span className="text-gradient-gold">4 bônus grátis</span>
          </h2>
          <p className="text-muted-foreground">Incluídos apenas no Pacote Pro. Valor total: <span className="text-foreground font-bold line-through">R$ 168,00</span></p>
        </motion.div>

        <div className="space-y-4 mb-10">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.num}
              className="bg-gradient-card border border-border rounded-lg p-5 flex gap-4 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="font-display text-2xl font-bold text-primary/30 shrink-0">{b.num}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-display font-bold text-base">{b.title}</h3>
                  <span className="text-xs bg-success/20 text-success font-bold px-2 py-0.5 rounded">GRÁTIS</span>
                </div>
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  width="800"
                  height="200"
                  className="w-full h-[160px] sm:h-[200px] object-cover rounded-lg my-3"
                />
                <p className="text-muted-foreground text-sm leading-relaxed mb-1">{b.desc}</p>
                <span className="text-muted-foreground text-xs line-through">{b.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Super Bonus */}
        <motion.div
          className="border-2 border-primary/40 bg-gradient-card rounded-xl p-6 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display font-bold text-sm mb-2">★ SUPER BÔNUS EXCLUSIVO</p>
          <h3 className="font-display text-xl font-bold mb-3">5 Prompts de IA para Arquitetos</h3>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-4">
            Gere renders realistas, humanize plantas e crie imagens de apresentação que impressionam clientes — sem computador potente, sem software caro.
          </p>
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
            🔒 Exclusivo do Pack Pro · Não vendido separado
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
