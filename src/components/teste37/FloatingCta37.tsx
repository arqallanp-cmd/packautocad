import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingCta37 = () => {
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
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-3 glow-border-btn"
          style={{
            background: "#0a0a0a",
            borderRadius: 100,
            padding: "14px 28px",
          }}
        >
          <span style={{ fontSize: 16 }}>🚀</span>
          <span style={{ color: "#fff", fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: 14, whiteSpace: "nowrap" }}>
            Garantir por R$37
          </span>
          <span style={{ fontSize: 16 }}>🚀</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingCta37;
