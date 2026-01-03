interface TeamMemberProps {
  image: string;
  name: string;
  title: string;
  bio?: string;
}

const TeamMember = ({ image, name, title, bio }: TeamMemberProps) => {
  return (
    <div className="group text-center">
      <div className="relative mb-6 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="font-serif text-xl font-bold text-foreground mb-1">
        {name}
      </h3>
      <p className="text-accent font-medium text-sm uppercase tracking-wider mb-3">
        {title}
      </p>
      {bio && (
        <p className="text-muted-foreground text-sm leading-relaxed">
          {bio}
        </p>
      )}
    </div>
  );
};

export default TeamMember;
