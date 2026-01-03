import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  name: string;
  location: string;
  brand: string;
  completionDate: string;
  investmentSize?: string;
  slug?: string;
}

const ProjectCard = ({ 
  image, 
  name, 
  location, 
  brand, 
  completionDate, 
  investmentSize,
  slug 
}: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden bg-card shadow-soft hover:shadow-elevated transition-all duration-500">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
        <div className="p-6 w-full">
          <Link 
            to={slug ? `/portfolio/${slug}` : "#"} 
            className="inline-flex items-center gap-2 text-cream hover:text-accent transition-colors font-medium"
          >
            View Case Study <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-accent text-xs font-semibold tracking-wider uppercase mb-2">
          {brand}
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {location}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-border">
          <div>
            <span className="text-muted-foreground text-xs uppercase tracking-wide">Completed</span>
            <p className="text-foreground font-medium text-sm">{completionDate}</p>
          </div>
          {investmentSize && (
            <div className="text-right">
              <span className="text-muted-foreground text-xs uppercase tracking-wide">Investment</span>
              <p className="text-accent font-semibold text-sm">{investmentSize}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
