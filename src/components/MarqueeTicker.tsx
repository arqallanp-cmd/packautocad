import { motion } from "framer-motion";

const tickerText = "✦ ACESSO IMEDIATO ✦ 18.000+ BLOCOS ✦ 14 DIAS DE GARANTIA ✦ COMPATÍVEL COM TODAS AS VERSÕES ";

const MarqueeTicker = () => {
  return (
    <div className="bg-[hsl(220,20%,6%)] border-b border-border overflow-hidden py-2">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="text-primary font-display text-xs tracking-widest mx-0">
            {tickerText}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeTicker;
