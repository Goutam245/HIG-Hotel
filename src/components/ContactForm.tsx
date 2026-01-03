import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentLevel: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      investmentLevel: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="investmentLevel" className="block text-sm font-medium text-foreground mb-2">
            Investment Interest Level
          </label>
          <select
            id="investmentLevel"
            name="investmentLevel"
            value={formData.investmentLevel}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground"
          >
            <option value="">Select investment range</option>
            <option value="1-5m">$1M - $5M</option>
            <option value="5-10m">$5M - $10M</option>
            <option value="10-25m">$10M - $25M</option>
            <option value="25-50m">$25M - $50M</option>
            <option value="50m+">$50M+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground resize-none"
          placeholder="Tell us about your investment goals and interests..."
        />
      </div>

      <Button 
        type="submit" 
        variant="gold" 
        size="lg" 
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  );
};

export default ContactForm;
