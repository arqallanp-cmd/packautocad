import { motion } from "framer-motion";

const checkItems = [
  "Tudo do Pacote Básico",
  "+15.000 Blocos Extras",
  "Pack de Hachuras Profissionais",
  "Template de Plotagem .ctb",
  "Anotações e Legendas Pro",
];

const bonusItems = [
  { emoji: "🎁", text: "5 Prompts de IA para Arquitetos", value: "R$47" },
  { emoji: "⚡", text: "Acesso Vitalício a Atualizações", value: "R$37" },
  { emoji: "🛡️", text: "Garantia Ampliada de 14 dias", value: "R$27" },
  { emoji: "🎓", text: "Acesso prioritário a novos packs", value: "R$57" },
];

const Upsell = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-8"
      style={{
        background: "#0a0a0a",
        backgroundImage:
          "radial-gradient(ellipse at top, rgba(200,169,110,0.06) 0%, transparent 60%)",
      }}
    >
      <div className="w-full max-w-[480px] flex flex-col gap-6">
        {/* Warning bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          style={{
            background: "rgba(200,169,110,0.1)",
            border: "1px solid rgba(200,169,110,0.3)",
            borderRadius: 10,
            padding: "12px 16px",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              textTransform: "uppercase",
              color: "rgba(200,169,110,0.7)",
              letterSpacing: "0.05em",
              marginBottom: 6,
            }}
          >
            ⚠️ ESPERA! VOCÊ ESTÁ PRESTES A PEGAR A VERSÃO BÁSICA
          </p>
          <p
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "#fff",
            }}
          >
            Garanta o Pack Pro por apenas R$10 a mais
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            background: "#141414",
            border: "1px solid rgba(200,169,110,0.3)",
            borderRadius: 16,
            padding: 24,
          }}
        >
          {/* Top badges */}
          <div className="flex items-center justify-between mb-6">
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#c8a96e",
                fontWeight: 600,
              }}
            >
              PRO VERSION
            </span>
            <span
              style={{
                background: "#c8a96e",
                color: "#0a0a0a",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                borderRadius: 100,
                padding: "4px 12px",
                textTransform: "uppercase",
              }}
            >
              MELHOR ESCOLHA 🔥
            </span>
          </div>

          {/* Checklist */}
          <p
            className="mb-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontWeight: 600,
            }}
          >
            Incluso no Pro
          </p>
          <div className="flex flex-col gap-2.5 mb-6">
            {checkItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span style={{ color: "#c8a96e", fontSize: 16, fontWeight: 700 }}>✓</span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Divider with label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px" style={{ background: "rgba(200,169,110,0.2)" }} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#c8a96e",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              BÔNUS EXCLUSIVOS
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(200,169,110,0.2)" }} />
          </div>

          {/* Bonus items */}
          <div className="flex flex-col gap-3 mb-8">
            {bonusItems.map((b) => (
              <div
                key={b.text}
                className="flex items-center justify-between"
                style={{
                  borderLeft: "2px solid rgba(200,169,110,0.4)",
                  paddingLeft: 12,
                  paddingTop: 6,
                  paddingBottom: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  {b.emoji} {b.text}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "rgba(200,169,110,0.5)",
                    textDecoration: "line-through",
                    whiteSpace: "nowrap",
                    marginLeft: 8,
                  }}
                >
                  {b.value}
                </span>
              </div>
            ))}
          </div>

          {/* Value stack */}
          <div className="text-center mb-6">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Valor total:{" "}
              <span style={{ textDecoration: "line-through" }}>R$268,00</span>
            </p>
            <p
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: 52,
                color: "#c8a96e",
                lineHeight: 1.1,
                margin: "8px 0 4px",
              }}
            >
              R$17,90
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              hoje — pagamento único
            </p>
          </div>

          {/* CTA button */}
          <a
            href="#"
            className="animate-pulse-gold"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              background: "linear-gradient(135deg, hsl(45 100% 55%), hsl(35 100% 45%))",
              color: "#0a0a0a",
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textTransform: "uppercase",
              borderRadius: 100,
              padding: "18px 24px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            🚀&nbsp; SIM, QUERO O PACK PRO &nbsp;✦
          </a>

          {/* Below button text */}
          <p
            className="text-center mt-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Acesso imediato · 14 dias de garantia · Sem mensalidade
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* Decline link */}
        <a
          href="#"
          className="text-center block"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "#555",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Não, prefiro continuar com o básico
        </a>
      </div>
    </div>
  );
};

export default Upsell;
