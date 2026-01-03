import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRight, Shield, TrendingUp, Users, Building2 } from "lucide-react";

import heroImage from "@/assets/hero-hotel.jpg";
import lobbyImage from "@/assets/hotel-lobby.jpg";
import poolImage from "@/assets/hotel-pool.jpg";
import suiteImage from "@/assets/hotel-suite.jpg";
import projectUrban from "@/assets/project-urban.jpg";
import projectResort from "@/assets/project-resort.jpg";
import projectConference from "@/assets/project-conference.jpg";
import boutiqueImage from "@/assets/hotel-boutique.jpg";

const Index = () => {
  const projects = [
    {
      image: projectUrban,
      name: "The Metropolitan Tower",
      location: "New York, NY",
      brand: "Marriott International",
      completionDate: "2024",
      investmentSize: "$185M",
    },
    {
      image: projectResort,
      name: "Azure Shores Resort",
      location: "Turks & Caicos",
      brand: "Four Seasons",
      completionDate: "2023",
      investmentSize: "$240M",
    },
    {
      image: projectConference,
      name: "Gateway Business Hotel",
      location: "Chicago, IL",
      brand: "Hilton Hotels",
      completionDate: "2023",
      investmentSize: "$95M",
    },
    {
      image: boutiqueImage,
      name: "Coastal Boutique Hotel",
      location: "San Diego, CA",
      brand: "Independent Luxury",
      completionDate: "2024",
      investmentSize: "$62M",
    },
  ];

  const testimonials = [
    {
      quote: "HIG's expertise in hotel development and their commitment to maximizing investor returns has been exceptional. Our partnership has yielded outstanding results.",
      author: "Richard Hartwell",
      title: "Managing Partner",
      company: "Hartwell Capital Partners",
    },
    {
      quote: "The team's deep understanding of the hospitality market and their hands-on approach to development gave us confidence in our investment from day one.",
      author: "Sarah Chen",
      title: "Chief Investment Officer",
      company: "Pacific Ventures",
    },
    {
      quote: "Working with HIG on our resort project exceeded all expectations. Their attention to detail and market insights are unparalleled in the industry.",
      author: "Michael Torres",
      title: "President",
      company: "Global Hospitality Investments",
    },
  ];

  const differentiators = [
    {
      icon: <TrendingUp size={28} />,
      title: "Proven Track Record",
      description: "Consistent double-digit returns across market cycles with strategic exit timing.",
    },
    {
      icon: <Shield size={28} />,
      title: "Risk Mitigation",
      description: "Comprehensive due diligence and conservative underwriting protect your investment.",
    },
    {
      icon: <Users size={28} />,
      title: "Industry Relationships",
      description: "Preferred partnerships with major hotel brands for exclusive opportunities.",
    },
    {
      icon: <Building2 size={28} />,
      title: "Full-Service Development",
      description: "End-to-end management from site selection to stabilized operations.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <span className="inline-block text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Premier Hotel Investment & Development
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
              Building Exceptional
              <span className="block text-accent">Hospitality Investments</span>
            </h1>
            <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with industry leaders to develop world-class hotels and resorts. 
              Strategic investments delivering superior returns for discerning investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule Consultation <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-cream/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Why Invest With Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Why HIG"
            title="Your Trusted Partner in Hotel Investment"
            description="With decades of combined experience and over $2 billion in successful developments, we deliver exceptional value through strategic hospitality investments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-card shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${lobbyImage})` }}
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Our Approach
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Strategic Investment
                <span className="block text-accent">Methodology</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                We identify prime hospitality opportunities in high-growth markets, 
                leveraging our extensive brand relationships and operational expertise 
                to create value at every stage of development.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Rigorous market analysis and site selection",
                  "Strategic brand partnerships and franchise agreements",
                  "Conservative financial structuring",
                  "Active asset management through stabilization",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="gold" size="lg" asChild>
                <Link to="/investment-process">Learn Our Process</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={poolImage} 
                alt="Luxury hotel amenities" 
                className="shadow-elevated"
              />
              <div className="absolute -bottom-8 -left-8 bg-accent p-6 shadow-gold hidden md:block">
                <div className="text-accent-foreground">
                  <span className="font-serif text-4xl font-bold block">18%</span>
                  <span className="text-sm uppercase tracking-wide">Avg. Annual ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <StatCounter end={47} suffix="+" label="Properties Developed" />
            <StatCounter end={2} prefix="$" suffix="B+" label="Total Investment Value" />
            <StatCounter end={18} suffix="%" label="Average ROI" />
            <StatCounter end={15} suffix="+" label="Years of Excellence" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Portfolio"
            title="Featured Developments"
            description="Explore our portfolio of successful hotel developments spanning luxury resorts, urban properties, and boutique hotels."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">
                View All Projects <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Testimonials"
            title="Trusted by Leading Investors"
            description="Our partners share their experience working with HIG Hotel Development."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${suiteImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionHeading
            light
            subtitle="Get Started"
            title="Ready to Invest in Hospitality?"
            description="Schedule a confidential consultation with our investment team to explore opportunities tailored to your objectives."
          />
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Schedule a Consultation <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
