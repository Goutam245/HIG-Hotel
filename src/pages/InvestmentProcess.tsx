import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Search, 
  FileText, 
  Handshake, 
  Building, 
  Key,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import suiteImage from "@/assets/hotel-suite.jpg";

const processSteps = [
  {
    icon: <Search size={32} />,
    title: "Initial Consultation",
    duration: "Week 1-2",
    description: "We begin with a confidential discussion to understand your investment objectives, risk tolerance, and preferred involvement level.",
    details: [
      "Investment goals assessment",
      "Risk profile evaluation",
      "Portfolio strategy discussion",
      "Preliminary opportunity review",
    ],
  },
  {
    icon: <FileText size={32} />,
    title: "Due Diligence",
    duration: "Week 3-6",
    description: "Comprehensive analysis of the opportunity including market research, financial modeling, and risk assessment.",
    details: [
      "Market demand analysis",
      "Competitive positioning study",
      "Financial projections review",
      "Legal and regulatory assessment",
      "Environmental due diligence",
    ],
  },
  {
    icon: <Handshake size={32} />,
    title: "Investment Structuring",
    duration: "Week 7-10",
    description: "We structure the investment to optimize returns while managing risk, including brand negotiations and financing arrangements.",
    details: [
      "Capital structure optimization",
      "Brand partnership negotiation",
      "Financing arrangement",
      "Legal documentation",
      "Tax planning strategies",
    ],
  },
  {
    icon: <Building size={32} />,
    title: "Development & Construction",
    duration: "12-36 Months",
    description: "Active management of the development process with regular progress updates and transparent reporting.",
    details: [
      "Design oversight",
      "Construction management",
      "Budget monitoring",
      "Quality assurance",
      "Regular investor updates",
    ],
  },
  {
    icon: <Key size={32} />,
    title: "Opening & Stabilization",
    duration: "6-18 Months",
    description: "We manage the transition to operations and work to achieve stabilized performance before considering exit options.",
    details: [
      "Pre-opening planning",
      "Grand opening execution",
      "Performance ramp-up management",
      "Stabilization achievement",
      "Exit strategy evaluation",
    ],
  },
];

const faqs = [
  {
    question: "What is the minimum investment amount?",
    answer: "Minimum investments typically range from $1 million to $5 million depending on the specific opportunity. We work with accredited investors and institutions to structure appropriate participation levels.",
  },
  {
    question: "What is the typical investment timeline?",
    answer: "Hotel development investments typically span 3-7 years from initial investment to exit. This includes 12-36 months of development and construction, followed by a stabilization period before considering exit options.",
  },
  {
    question: "How do you select development opportunities?",
    answer: "We apply rigorous criteria including market dynamics, location quality, brand potential, financial returns, and risk profile. Only opportunities meeting our strict underwriting standards are presented to investors.",
  },
  {
    question: "What returns can investors expect?",
    answer: "Historical returns have ranged from 15-25% IRR across our portfolio, though past performance does not guarantee future results. Returns depend on market conditions, project execution, and exit timing.",
  },
  {
    question: "How are investors kept informed?",
    answer: "Investors receive quarterly detailed reports including financial updates, construction progress, and market insights. Major milestones and decisions are communicated promptly, and annual investor meetings are held.",
  },
  {
    question: "What are the primary risks in hotel development?",
    answer: "Key risks include construction delays, market changes, interest rate fluctuations, and operational performance. We mitigate risks through conservative underwriting, experienced management, and strategic brand partnerships.",
  },
  {
    question: "Can international investors participate?",
    answer: "Yes, we welcome qualified international investors. Our team can assist with structuring investments to address tax and regulatory considerations for non-U.S. investors.",
  },
  {
    question: "What happens if I need to exit early?",
    answer: "While investments are generally illiquid, we can sometimes facilitate secondary market transactions or structured exits depending on the circumstances. Early exit options are discussed during the investment structuring phase.",
  },
];

const riskStrategies = [
  {
    title: "Conservative Underwriting",
    description: "We apply stress-tested assumptions and conservative projections to ensure investments can withstand market volatility.",
  },
  {
    title: "Brand Partnerships",
    description: "Strategic relationships with major hotel brands provide distribution, operational expertise, and market credibility.",
  },
  {
    title: "Experienced Team",
    description: "Our team brings decades of hotel development experience, having navigated multiple market cycles successfully.",
  },
  {
    title: "Diversified Approach",
    description: "We pursue opportunities across different markets, property types, and brands to reduce concentration risk.",
  },
  {
    title: "Active Management",
    description: "Hands-on oversight during development and operations allows us to address issues proactively and optimize performance.",
  },
  {
    title: "Capital Structure",
    description: "Conservative leverage levels and appropriate capital structures provide cushion against market downturns.",
  },
];

const InvestmentProcess = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${suiteImage})` }}
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Investment Process
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              A Clear Path to
              <span className="block text-accent">Hospitality Investment</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Our proven investment process guides you from initial consultation through exit, 
              with transparency and expertise at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Our Process"
            title="From Inquiry to Completion"
            description="A structured, transparent approach to hotel investment that prioritizes investor interests and risk management."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 mt-8 hidden md:block" />

                  <div className={`${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:col-start-2'}`}>
                    <div className={`bg-card p-8 shadow-soft ${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-lg`}>
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-16 h-16 bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                          {step.icon}
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <span className="text-accent text-sm font-semibold">{step.duration}</span>
                          <h3 className="font-serif text-xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {step.details.map((detail, i) => (
                          <li key={i} className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                            <span className="text-muted-foreground text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Risk Management"
            title="How We Protect Your Investment"
            description="Our multi-layered approach to risk mitigation helps safeguard investor capital while pursuing attractive returns."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskStrategies.map((strategy, index) => (
              <div key={index} className="bg-card p-8 shadow-soft border-l-4 border-accent">
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                  {strategy.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="FAQs"
            title="Investor Questions Answered"
            description="Common questions from prospective investors about our hotel development investments."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card shadow-soft border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5 font-serif text-lg text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading
            light
            subtitle="Start Your Journey"
            title="Ready to Explore Investment Opportunities?"
            description="Schedule a confidential consultation with our investment team to discuss your goals."
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

export default InvestmentProcess;
