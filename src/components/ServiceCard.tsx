import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="group bg-card p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border-b-2 border-transparent hover:border-accent">
      <div className="w-14 h-14 bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
