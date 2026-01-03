import { ReactNode } from "react";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  children?: ReactNode;
}

const SectionHeading = ({ 
  subtitle, 
  title, 
  description, 
  align = "center",
  light = false,
  children 
}: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const textColor = light ? "text-cream" : "text-foreground";
  const subtitleColor = light ? "text-accent" : "text-accent";
  const descColor = light ? "text-cream/80" : "text-muted-foreground";

  return (
    <div className={`max-w-3xl ${alignClass} mb-12 md:mb-16`}>
      {subtitle && (
        <span className={`${subtitleColor} text-sm font-semibold tracking-[0.2em] uppercase mb-4 block`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-4`}>
        {title}
      </h2>
      {description && (
        <p className={`${descColor} text-lg leading-relaxed`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
