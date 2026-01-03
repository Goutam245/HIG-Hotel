interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
}

const TestimonialCard = ({ quote, author, title, company }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-8 md:p-10 shadow-soft relative">
      {/* Quote mark */}
      <div className="absolute top-6 left-8 text-accent/20 font-serif text-8xl leading-none">
        "
      </div>
      
      <div className="relative">
        <p className="text-foreground text-lg leading-relaxed mb-8 italic">
          "{quote}"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <span className="text-accent font-serif font-bold text-lg">
              {author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-muted-foreground text-sm">{title}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
