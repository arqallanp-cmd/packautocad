import { BadgeCheck } from "lucide-react";

interface AutodeskBadgeProps {
  variant?: "default" | "compact" | "inline";
  className?: string;
}

const AutodeskBadge = ({ variant = "default", className = "" }: AutodeskBadgeProps) => {
  if (variant === "inline") {
    return (
      <span className={`inline-flex items-center gap-1.5 text-primary text-[10px] sm:text-xs font-display font-semibold tracking-wide ${className}`}>
        <BadgeCheck className="w-3.5 h-3.5" />
        Compatível com Autodesk® AutoCAD®
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`inline-flex items-center gap-2 bg-card border border-primary/20 rounded-lg px-3 py-1.5 ${className}`}>
        <BadgeCheck className="w-4 h-4 text-primary" />
        <span className="text-[10px] sm:text-xs font-display font-semibold text-muted-foreground tracking-wide">
          Autodesk® AutoCAD® <span className="text-primary">Certificado</span>
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="inline-flex items-center gap-3 bg-card/80 border border-primary/15 backdrop-blur-sm rounded-xl px-5 py-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
          <BadgeCheck className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-display font-bold text-xs text-foreground leading-tight">Produto Autodesk® AutoCAD®</p>
          <p className="text-[10px] text-muted-foreground leading-tight">Blocos 100% compatíveis com todas as versões</p>
        </div>
      </div>
    </div>
  );
};

export default AutodeskBadge;
