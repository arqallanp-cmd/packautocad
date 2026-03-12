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
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-3"
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 100,
            padding: "14px 28px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          <span style={{ fontSize: 16 }}>⚡</span>
          <span style={{ color: "#fff", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, whiteSpace: "nowrap" }}>
            Quero Acesso Imediato
          </span>
          <span
            style={{
              background: "#e53e3e",
              color: "#fff",
              borderRadius: 100,
              padding: "4px 14px",
              fontSize: 13,
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            +4500
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingCta;
