import React from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { getCategoryTheme } from "../lib/themeUtils";

export interface CurriculumCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  categoryId?: string;
  className?: string;
}

export const CurriculumCard = ({
  title,
  description,
  icon: Icon,
  href,
  categoryId,
  className
}: CurriculumCardProps) => {
  const theme = categoryId ? getCategoryTheme(categoryId) : { primary: "var(--accent)" };

  return (
    <Link
      to={href}
      className={cn(
        "curriculum-card group relative flex flex-col h-full p-8 no-underline",
        className
      )}
    >
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 shadow-sm"
        style={{ 
          backgroundColor: `${theme.primary}10`,
          color: theme.primary,
          border: `1px solid ${theme.primary}20`
        }}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-headline font-semibold text-text-premium mb-3 tracking-tight">
        {title}
      </h3>
      
      <p className="text-sm text-muted-premium leading-relaxed opacity-80 font-normal">
        {description}
      </p>

      {/* Subtle indicator */}
      <div 
        className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
        style={{ color: theme.primary }}
      >
        Open Module
      </div>

      {/* Theme Accent Dot */}
      <div 
        className="absolute top-6 right-6 w-2 h-2 rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: theme.primary }}
      />
    </Link>
  );
};
