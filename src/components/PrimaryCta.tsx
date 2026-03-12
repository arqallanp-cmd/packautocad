import { motion } from "framer-motion";

interface PrimaryCtaProps {
  href?: string;
}

const trustItems = ["acesso imediato", "pagamento seguro", "garantia de 7 dias"];

const PrimaryCta = ({ href = "#pricing" }: PrimaryCtaProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <motion.a
        href={href}
        className="flex flex-col items-center justify-center bg-success text-white font-display rounded-2xl shadow-[0_4px_24px_-4px_hsl(145_60%_45%/0.4)] w-full max-w-sm mx-auto px-6 py-4 sm:py-5 transition-all hover:shadow-[0_4px_32px_-2px_hsl(145_60%_50%/0.5)] animate-pulse-btn"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span className="font-extrabold text-base sm:text-lg uppercase tracking-wide leading-tight">
          QUERO OS 4500 BLOCOS
        </span>
        <span className="text-white/80 text-xs sm:text-sm font-medium mt-0.5">
          CLIQUE AQUI
        </span>
      </motion.a>

      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-3">
        {trustItems.map((item) => (
          <span key={item} className="text-muted-foreground/60 text-[10px] sm:text-xs flex items-center gap-1">
            <span className="text-success text-[10px]">✔</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PrimaryCta;
