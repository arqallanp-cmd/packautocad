import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingCta = () => {
  const isMobile = useIsMobile();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#pricing"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-3 animate-pulse"
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(200,169,110,0.4)",
            borderRadius: 100,
            padding: "14px 24px",
          }}
        >
          <span className="text-lg">🚀</span>
          <span style={{ color: "#fff", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14 }}>
            Quero Acesso Imediato
          </span>
          <span
            style={{
              background: "#c8a96e",
              color: "#000",
              borderRadius: 100,
              padding: "5px 12px",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            GARANTIDO
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingCta;
