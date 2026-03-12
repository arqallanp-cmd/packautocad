import { motion } from "framer-motion";

import depo1 from "@/assets/depoimentos-1.png";
import depo2 from "@/assets/depoimentos-2.png";
import depo3 from "@/assets/depoimentos-3.png";
import depo4 from "@/assets/depoimentos-4.png";
import depo5 from "@/assets/depoimentos-5.png";

/* ── WhatsApp-style chat cards ── */
const whatsappChats = [
  {
    name: "Arq. Camila S.",
    time: "14:32",
    messages: [
      { from: "them", text: "Oii! Acabei de baixar o pack e já tô usando 😍" },
      { from: "them", text: "Economizei 4 horas no meu primeiro projeto!" },
      { from: "me", text: "Showww! Fico feliz demais!! 🙌" },
      { from: "them", text: "Melhor R$9,90 que já gastei na vida kkkk" },
    ],
  },
  {
    name: "Felipe R.",
    time: "09:15",
    messages: [
      { from: "them", text: "Bom dia! Os blocos são incríveis" },
      { from: "them", text: "Nunca mais desenhei bloco do zero. Abro a pasta, arrasto e pronto 🔥" },
      { from: "me", text: "Que bom! Obrigado pela confiança ❤️" },
    ],
  },
  {
    name: "Eng. Lucas P.",
    time: "21:47",
    messages: [
      { from: "them", text: "Cara, já recuperei o valor no primeiro projeto. Sem exagero." },
      { from: "them", text: "O acesso é vitalício mesmo né?" },
      { from: "me", text: "Sim! Acesso vitalício, pode usar sem preocupação 😊" },
      { from: "them", text: "Perfeito! 👏" },
    ],
  },
];

/* ── Instagram comment cards ── */
const instaComments = [
  { user: "arq.camila", text: "Material top demais! Vale muito a pena 🔥", time: "1 min" },
  { user: "tamia.bringel", text: "Material bom, facilita bastante o trabalho e a um preço acessível!", time: "4 d" },
  { user: "erika.teixeira", text: "amei os blocos!! vai me ajudar bastante", time: "5 d" },
  { user: "junior_arqui", text: "Blocos são muito tooop! Ansioso para ter acesso aos blocos dinâmicos!!!", time: "5 d" },
  { user: "estevam_eng", text: "Material muito bom que vai facilitar muito o serviço", time: "1 sem" },
  { user: "mateus.marques", text: "Blocos excelentes, ajuda demais na rotina", time: "12 min" },
];

/* ── Real screenshot images ── */
const screenshots = [depo1, depo2, depo3, depo4, depo5];

/* ── Sub-components ── */

const WhatsAppCard = ({ chat }: { chat: typeof whatsappChats[0] }) => (
  <div className="break-inside-avoid rounded-2xl overflow-hidden border border-border bg-[#111b21] shadow-card">
    {/* Header */}
    <div className="flex items-center gap-3 px-4 py-3 bg-[#1f2c34] border-b border-white/5">
      <div className="w-9 h-9 rounded-full bg-[#2a3942] flex items-center justify-center text-sm text-white/70">
        {chat.name.charAt(0)}
      </div>
      <div>
        <p className="text-white text-sm font-medium">{chat.name}</p>
        <p className="text-white/40 text-[10px]">online</p>
      </div>
    </div>
    {/* Messages */}
    <div className="px-3 py-3 space-y-1.5">
      {chat.messages.map((msg, j) => (
        <div key={j} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
          <div
            className={`max-w-[85%] px-3 py-1.5 rounded-lg text-[13px] leading-relaxed ${
              msg.from === "me"
                ? "bg-[#005c4b] text-white rounded-tr-none"
                : "bg-[#202c33] text-white/90 rounded-tl-none"
            }`}
          >
            {msg.text}
            <span className="text-[9px] text-white/30 ml-2 float-right mt-1">
              {chat.time} {msg.from === "me" && "✓✓"}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const InstaCommentsCard = () => (
  <div className="break-inside-avoid rounded-2xl overflow-hidden border border-border bg-[#000] shadow-card">
    {/* Header */}
    <div className="px-4 py-3 border-b border-white/10">
      <p className="text-white text-sm font-semibold">Comentários</p>
      <div className="flex gap-2 mt-2">
        <span className="text-lg">❤️❤️🥰</span>
      </div>
    </div>
    {/* Comments */}
    <div className="px-4 py-2 space-y-3">
      {instaComments.map((c, j) => (
        <div key={j} className="flex gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 mt-0.5" />
          <div className="min-w-0">
            <p className="text-white text-[13px] leading-snug">
              <span className="font-semibold">{c.user}</span>{" "}
              <span className="text-white/80">{c.text}</span>
            </p>
            <div className="flex items-center gap-3 mt-0.5">
              <span className="text-white/30 text-[10px]">{c.time}</span>
              <span className="text-white/30 text-[10px]">Responder</span>
              <span className="text-red-400 text-[10px]">❤️</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex gap-2 px-4 py-2 border-t border-white/10">
      {["❤️", "👍", "👏", "🔥", "😍", "🤩"].map((e) => (
        <span key={e} className="text-lg cursor-pointer">{e}</span>
      ))}
    </div>
  </div>
);

const ScreenshotCard = ({ src }: { src: string }) => (
  <div className="break-inside-avoid rounded-2xl overflow-hidden border border-border shadow-card">
    <img src={src} alt="Depoimento de cliente" loading="lazy" className="w-full h-auto" />
  </div>
);

/* ── Main Component ── */

const SocialProofWall = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">
            Prova social
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Veja o que quem já comprou está dizendo
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ScreenshotCard src={screenshots[0]} />
          <WhatsAppCard chat={whatsappChats[0]} />
          <ScreenshotCard src={screenshots[1]} />
          <InstaCommentsCard />
          <ScreenshotCard src={screenshots[2]} />
          <WhatsAppCard chat={whatsappChats[1]} />
          <ScreenshotCard src={screenshots[3]} />
          <WhatsAppCard chat={whatsappChats[2]} />
          <ScreenshotCard src={screenshots[4]} />
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-display font-bold text-base sm:text-lg px-10 py-5 sm:py-3 rounded-xl shadow-gold hover:scale-105 transition-transform animate-pulse-gold"
          >
            ⚡ EU TAMBÉM QUERO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofWall;
