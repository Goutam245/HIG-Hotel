import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  LineChart, 
  FileSearch, 
  Handshake, 
  RefreshCcw,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

import lobbyImage from "@/assets/hotel-lobby.jpg";

const services = [
  {
    icon: <Building2 size={28} />,
    title: "Hotel Development & Construction",
    description: "Full-service development from ground-up construction to hotel opening, managing every aspect of the development lifecycle.",
    features: [
      "Site selection and acquisition",
      "Design and construction management",
      "Pre-opening planning",
      "Quality assurance",
    ],
    process: [
      "Market analysis and site identification",
      "Feasibility assessment",
      "Brand selection and negotiation",
      "Design development and permitting",
      "Construction oversight",
      "Pre-opening and operational handoff",
    ],
  },
  {
    icon: <LineChart size={28} />,
    title: "Investment Advisory",
    description: "Strategic guidance for hospitality investments, helping investors navigate opportunities and maximize returns.",
    features: [
      "Investment strategy development",
      "Portfolio optimization",
      "Transaction advisory",
      "Exit strategy planning",
    ],
    process: [
      "Investment objectives assessment",
      "Market opportunity analysis",
      "Deal sourcing and evaluation",
      "Due diligence coordination",
      "Transaction execution",
      "Ongoing portfolio monitoring",
    ],
  },
  {
    icon: <FileSearch size={28} />,
    title: "Feasibility Studies & Market Analysis",
    description: "Comprehensive research and analysis to validate investment opportunities and inform strategic decisions.",
    features: [
      "Market demand analysis",
      "Competitive positioning",
      "Financial projections",
      "Risk assessment",
    ],
    process: [
      "Market research and data collection",
      "Supply and demand analysis",
      "Competitive set evaluation",
      "Financial modeling",
      "Sensitivity analysis",
      "Executive summary and recommendations",
    ],
  },
  {
    icon: <Handshake size={28} />,
    title: "Brand Partnership & Franchise Development",
    description: "Leverage our relationships with major hotel brands to secure optimal franchise agreements and brand partnerships.",
    features: [
      "Brand selection advisory",
      "Franchise negotiation",
      "Management contract review",
      "Brand standards compliance",
    ],
    process: [
      "Brand fit assessment",
      "Competitive brand analysis",
      "RFP process management",
      "Term sheet negotiation",
      "Agreement finalization",
      "Ongoing brand relationship management",
    ],
  },
  {
    icon: <RefreshCcw size={28} />,
    title: "Asset Repositioning",
    description: "Transform underperforming properties through strategic renovations, rebranding, and operational improvements.",
    features: [
      "Property assessment",
      "Repositioning strategy",
      "Renovation management",
      "Performance optimization",
    ],
    process: [
      "Current performance analysis",
      "Market repositioning strategy",
      "Renovation scope development",
      "Brand transition planning",
      "Implementation oversight",
      "Stabilization and performance tracking",
    ],
  },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${lobbyImage})` }}
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Hotel
              <span className="block text-accent">Development Solutions</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              From initial concept to stabilized operations, we provide end-to-end services 
              for hotel development and investment, backed by decades of industry expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="What We Do"
            title="Full-Service Hotel Development"
            description="Our integrated approach ensures seamless execution and maximum value creation across all phases of hotel development and investment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {services.slice(3).map((service, index) => (
              <ServiceCard key={index + 3} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Our Process"
            title="How We Deliver Results"
            description="Each service follows a proven methodology designed to minimize risk and maximize returns."
          />

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-card p-8 shadow-soft ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
                    Process Overview
                  </h4>
                  <ol className="space-y-4">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="w-8 h-8 bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading
            light
            subtitle="Get Started"
            title="Ready to Discuss Your Project?"
            description="Our team is ready to help you explore hotel development and investment opportunities."
          />
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              Contact Our Team <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
