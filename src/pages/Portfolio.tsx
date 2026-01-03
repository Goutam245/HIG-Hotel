import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/hero-hotel.jpg";
import projectUrban from "@/assets/project-urban.jpg";
import projectResort from "@/assets/project-resort.jpg";
import projectConference from "@/assets/project-conference.jpg";
import boutiqueImage from "@/assets/hotel-boutique.jpg";
import lobbyImage from "@/assets/hotel-lobby.jpg";
import poolImage from "@/assets/hotel-pool.jpg";
import suiteImage from "@/assets/hotel-suite.jpg";

const allProjects = [
  {
    image: projectUrban,
    name: "The Metropolitan Tower",
    location: "New York, NY",
    brand: "Marriott International",
    completionDate: "2024",
    investmentSize: "$185M",
    category: "urban",
    brandCategory: "marriott",
  },
  {
    image: projectResort,
    name: "Azure Shores Resort",
    location: "Turks & Caicos",
    brand: "Four Seasons",
    completionDate: "2023",
    investmentSize: "$240M",
    category: "resort",
    brandCategory: "four-seasons",
  },
  {
    image: projectConference,
    name: "Gateway Business Hotel",
    location: "Chicago, IL",
    brand: "Hilton Hotels",
    completionDate: "2023",
    investmentSize: "$95M",
    category: "urban",
    brandCategory: "hilton",
  },
  {
    image: boutiqueImage,
    name: "Coastal Boutique Hotel",
    location: "San Diego, CA",
    brand: "Independent Luxury",
    completionDate: "2024",
    investmentSize: "$62M",
    category: "boutique",
    brandCategory: "independent",
  },
  {
    image: heroImage,
    name: "Palm Vista Resort & Spa",
    location: "Miami Beach, FL",
    brand: "Marriott International",
    completionDate: "2022",
    investmentSize: "$175M",
    category: "resort",
    brandCategory: "marriott",
  },
  {
    image: lobbyImage,
    name: "The Grand Heritage",
    location: "Boston, MA",
    brand: "Hilton Hotels",
    completionDate: "2022",
    investmentSize: "$130M",
    category: "urban",
    brandCategory: "hilton",
  },
  {
    image: poolImage,
    name: "Skyline Suites",
    location: "Los Angeles, CA",
    brand: "Hyatt Hotels",
    completionDate: "2021",
    investmentSize: "$88M",
    category: "urban",
    brandCategory: "hyatt",
  },
  {
    image: suiteImage,
    name: "Oceanfront Residences",
    location: "Maldives",
    brand: "Four Seasons",
    completionDate: "2021",
    investmentSize: "$320M",
    category: "resort",
    brandCategory: "four-seasons",
  },
];

const caseStudies = [
  {
    image: projectUrban,
    name: "The Metropolitan Tower",
    location: "New York, NY",
    brand: "Marriott International",
    investmentSize: "$185M",
    roi: "22%",
    description: "A landmark 45-story mixed-use development in Manhattan's Financial District, featuring a 350-room luxury hotel with premium amenities and 200 residential units.",
    highlights: [
      "Secured preferred franchise terms with Marriott",
      "Completed 2 months ahead of schedule",
      "Achieved stabilization in 18 months",
      "22% IRR to investors",
    ],
  },
  {
    image: projectResort,
    name: "Azure Shores Resort",
    location: "Turks & Caicos",
    brand: "Four Seasons",
    investmentSize: "$240M",
    roi: "19%",
    description: "A world-class beachfront resort featuring 180 rooms, private villas, and extensive amenities including a championship golf course.",
    highlights: [
      "Exclusive beachfront location",
      "Four Seasons management agreement",
      "Award-winning design",
      "19% IRR to investors",
    ],
  },
  {
    image: boutiqueImage,
    name: "Coastal Boutique Hotel",
    location: "San Diego, CA",
    brand: "Independent Luxury",
    investmentSize: "$62M",
    roi: "25%",
    description: "Adaptive reuse of a historic building transformed into a 95-room boutique hotel, capturing the unique character of San Diego's Gaslamp Quarter.",
    highlights: [
      "Historic tax credits utilized",
      "Boutique positioning achieved premium ADR",
      "Completed renovation in 14 months",
      "25% IRR to investors",
    ],
  },
];

const filters = {
  location: ["All", "New York", "Florida", "California", "International"],
  brand: ["All", "Marriott", "Hilton", "Four Seasons", "Hyatt", "Independent"],
  size: ["All", "Under $100M", "$100M - $200M", "Over $200M"],
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(p => 
        p.brand.toLowerCase().includes(activeFilter.toLowerCase()) ||
        p.location.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Our Portfolio
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Proven Excellence in
              <span className="block text-accent">Hotel Development</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Explore our portfolio of successful hotel developments spanning luxury resorts, 
              urban properties, and boutique hotels across premier destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {["All", "Marriott", "Hilton", "Four Seasons", "Urban", "Resort", "Boutique"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-foreground hover:bg-accent/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Case Studies"
            title="Featured Success Stories"
            description="In-depth looks at our most impactful developments, showcasing our approach to value creation."
          />

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img 
                    src={study.image} 
                    alt={study.name}
                    className="w-full aspect-video object-cover shadow-elevated"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                    {study.brand}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-2 mb-2">
                    {study.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{study.location}</p>
                  <p className="text-foreground leading-relaxed mb-6">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-card p-4 shadow-soft">
                      <span className="text-muted-foreground text-sm">Investment</span>
                      <p className="font-serif text-xl font-bold text-accent">{study.investmentSize}</p>
                    </div>
                    <div className="bg-card p-4 shadow-soft">
                      <span className="text-muted-foreground text-sm">Investor IRR</span>
                      <p className="font-serif text-xl font-bold text-accent">{study.roi}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {study.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
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
            subtitle="Join Our Investors"
            title="Explore Current Opportunities"
            description="Contact our team to learn about upcoming developments and investment opportunities."
          />
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">
              Schedule a Consultation <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
