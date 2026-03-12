import { useState, useEffect } from "react";

const STORAGE_KEY = "pack_autocad_timer";
const DURATION = 24 * 60 * 60 * 1000; // 24h in ms

function getTargetTime(): number {
  if (typeof window === "undefined") return Date.now() + DURATION;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const target = parseInt(stored, 10);
    if (target > Date.now()) return target;
  }
  const newTarget = Date.now() + DURATION;
  localStorage.setItem(STORAGE_KEY, String(newTarget));
  return newTarget;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const target = getTargetTime();
    return Math.max(0, target - Date.now());
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const target = getTargetTime();
      const remaining = Math.max(0, target - Date.now());
      if (remaining === 0) {
        // Reset timer
        const newTarget = Date.now() + DURATION;
        localStorage.setItem(STORAGE_KEY, String(newTarget));
        setTimeLeft(DURATION);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-background/80 border-b border-primary/20 py-3 text-center">
      <p className="font-display text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary/70 mb-1">
        ⚡ OFERTA EXPIRA EM
      </p>
      <p
        className="font-display text-2xl sm:text-3xl font-extrabold tracking-widest"
        style={{ color: "#c8a96e" }}
      >
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </p>
    </div>
  );
};

export default CountdownTimer;
