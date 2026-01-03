import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import suiteImage from "@/assets/hotel-suite.jpg";

const Contact = () => {
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
              Contact Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Discuss Your
              <span className="block text-accent">Investment Goals</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Schedule a confidential consultation with our investment team to explore 
              hotel development opportunities tailored to your objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionHeading
                align="left"
                subtitle="Get in Touch"
                title="Send Us a Message"
                description="Complete the form below and a member of our investment team will contact you within 24 hours."
              />
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-card p-8 shadow-soft sticky top-28">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office Location</h4>
                      <p className="text-muted-foreground text-sm">
                        1000 Brickell Avenue, Suite 1500<br />
                        Miami, FL 33131
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <a href="tel:+13055551234" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                        +1 (305) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a href="mailto:invest@highotels.com" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                        invest@highotels.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: By appointment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Schedule a Meeting</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Prefer to schedule directly? Book a consultation with our investment team.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-accent hover:text-gold-dark font-medium text-sm transition-colors"
                  >
                    View Calendar Availability →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-secondary relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
              <MapPin size={32} />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Visit Our Miami Office
            </h3>
            <p className="text-muted-foreground">
              1000 Brickell Avenue, Suite 1500, Miami, FL 33131
            </p>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-4">
            <span className="text-accent font-semibold">Investor Relations:</span>{" "}
            For existing investor inquiries, please contact{" "}
            <a href="mailto:ir@highotels.com" className="text-accent hover:underline">
              ir@highotels.com
            </a>
          </p>
          <p className="text-primary-foreground/60 text-sm">
            All investment inquiries are treated with strict confidentiality.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
