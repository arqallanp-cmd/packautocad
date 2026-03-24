import { motion } from "framer-motion";

const tickerText = "✦ LICENÇA VITALÍCIA ✦ +4.500 BLOCOS DWG ✦ ACESSO PERMANENTE ✦ GARANTIA 14 DIAS ";

const MarqueeTicker37 = () => {
  return (
    <div className="bg-primary/10 border-b border-primary/20 overflow-hidden py-2.5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="text-primary font-display text-xs font-bold tracking-widest mx-0">
            {tickerText}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeTicker37;
