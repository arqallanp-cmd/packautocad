import { motion } from "framer-motion";

import depo1 from "@/assets/depoimentos-1.png";
import depo2 from "@/assets/depoimentos-2.png";
import depo3 from "@/assets/depoimentos-3.png";
import depo4 from "@/assets/depoimentos-4.png";
import depo5 from "@/assets/depoimentos-5.png";

const screenshots = [depo1, depo2, depo3, depo4, depo5];

const SocialProofWall = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">
            Prova social
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Veja o que quem já comprou está dizendo
          </h2>
        </motion.div>

        {/* Screenshot grid — masonry-like with columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {screenshots.map((src, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid rounded-2xl overflow-hidden border border-border shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <img
                src={src}
                alt={`Depoimento de cliente ${i + 1}`}
                loading="lazy"
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold px-8 py-3 rounded-lg shadow-gold hover:scale-105 transition-transform"
          >
            → Quero ter o mesmo resultado
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofWall;
