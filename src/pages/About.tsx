import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import TeamMember from "@/components/TeamMember";
import StatCounter from "@/components/StatCounter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Building2, Globe, Users } from "lucide-react";

import lobbyImage from "@/assets/hotel-lobby.jpg";
import teamCeo from "@/assets/team-ceo.jpg";
import teamCfo from "@/assets/team-cfo.jpg";
import teamCoo from "@/assets/team-coo.jpg";
import teamVp from "@/assets/team-vp.jpg";

const team = [
  {
    image: teamCeo,
    name: "James Richardson",
    title: "Chief Executive Officer",
    bio: "30+ years in hospitality development. Former EVP at Marriott International. MBA from Harvard Business School.",
  },
  {
    image: teamCfo,
    name: "Elizabeth Monroe",
    title: "Chief Financial Officer",
    bio: "25+ years in hospitality finance. Previously CFO at Host Hotels & Resorts. CPA with extensive capital markets experience.",
  },
  {
    image: teamCoo,
    name: "Michael Chen",
    title: "Chief Operating Officer",
    bio: "20+ years in hotel development and operations. Former VP of Development at Hyatt Hotels Corporation.",
  },
  {
    image: teamVp,
    name: "Sarah Williams",
    title: "VP of Investor Relations",
    bio: "15+ years in institutional investor relations. Previously at Blackstone Real Estate. MBA from Wharton.",
  },
];

const timeline = [
  { year: "2009", event: "HIG Hotel Development founded in Miami, FL" },
  { year: "2012", event: "First major development: 300-room Marriott in Miami Beach" },
  { year: "2015", event: "Expanded to Caribbean markets with Four Seasons partnership" },
  { year: "2018", event: "Surpassed $1 billion in total development value" },
  { year: "2021", event: "Launched boutique hotel division for independent properties" },
  { year: "2024", event: "Portfolio exceeds 45 properties across 15 markets" },
];

const partners = [
  "Marriott International",
  "Hilton Hotels & Resorts",
  "Four Seasons Hotels",
  "Hyatt Hotels Corporation",
  "IHG Hotels & Resorts",
  "Accor Hotels",
];

const awards = [
  { year: "2024", award: "Best Hotel Developer - Americas", org: "World Travel Awards" },
  { year: "2023", award: "Excellence in Hospitality Development", org: "ALIS Conference" },
  { year: "2023", award: "Top 50 Hotel Developers", org: "Hotel Business Magazine" },
  { year: "2022", award: "Sustainability Leadership Award", org: "Green Lodging News" },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building Excellence in
              <span className="block text-accent">Hospitality Investment</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              For over 15 years, HIG Hotel Development has been a trusted partner for investors 
              seeking exceptional returns in the hospitality sector.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Creating Value Through Strategic Hospitality Development
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We believe that exceptional hotel developments are built on a foundation of 
                deep market knowledge, strong brand relationships, and unwavering commitment 
                to investor success.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is to identify, develop, and manage world-class hospitality 
                properties that deliver superior risk-adjusted returns while contributing 
                positively to the communities we serve.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Global Reach</h4>
                    <p className="text-muted-foreground text-sm">Properties across Americas and Caribbean</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Team</h4>
                    <p className="text-muted-foreground text-sm">150+ years combined experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={lobbyImage} 
                alt="Luxury hotel lobby" 
                className="shadow-elevated"
              />
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
            <StatCounter end={15} suffix="+" label="Markets Served" />
            <StatCounter end={150} suffix="+" label="Years Combined Experience" />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Leadership"
            title="Meet Our Executive Team"
            description="Industry veterans with decades of experience in hotel development, finance, and operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <SectionHeading
            light
            subtitle="Our Journey"
            title="A Legacy of Excellence"
            description="From our founding to becoming a leading hotel development firm."
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2" />
                    <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <span className="text-accent font-serif text-2xl font-bold">{item.year}</span>
                      <p className="text-primary-foreground/80 mt-1">{item.event}</p>
                    </div>
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Partnerships"
            title="Trusted Brand Relationships"
            description="Strategic partnerships with the world's leading hotel brands."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-card p-6 shadow-soft flex items-center justify-center text-center h-24 hover:shadow-elevated transition-shadow"
              >
                <span className="font-semibold text-muted-foreground text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Recognition"
            title="Awards & Accolades"
            description="Industry recognition for our commitment to excellence in hotel development."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-card p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                  <Award size={24} />
                </div>
                <span className="text-accent text-sm font-semibold">{award.year}</span>
                <h4 className="font-serif text-lg font-bold text-foreground mt-2 mb-2">
                  {award.award}
                </h4>
                <p className="text-muted-foreground text-sm">{award.org}</p>
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
            subtitle="Join Us"
            title="Partner With Industry Leaders"
            description="Let's discuss how we can help you achieve your hospitality investment goals."
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

export default About;
