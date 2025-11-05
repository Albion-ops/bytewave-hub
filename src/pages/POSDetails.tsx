import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Monitor, CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const POSDetails = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Retail Excellence",
      description: "Perfect for retail stores with inventory tracking, barcode scanning, and quick checkout processes.",
    },
    {
      title: "Restaurant & Hospitality",
      description: "Table management, kitchen display systems, and order tracking optimized for food service.",
    },
    {
      title: "Multi-Store Management",
      description: "Centralized control for multiple locations with real-time sync and reporting.",
    },
    {
      title: "Payment Integration",
      description: "Accept all payment methods including cash, cards, mobile payments, and digital wallets.",
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive sales reports, inventory insights, and business intelligence tools.",
    },
    {
      title: "Customer Management",
      description: "Build customer loyalty with integrated CRM and rewards programs.",
    },
  ];

  const benefits = [
    "Increase efficiency by up to 40% with streamlined operations",
    "Reduce errors with automated inventory management",
    "Real-time insights into your business performance",
    "Scalable solution that grows with your business",
    "24/7 technical support and regular updates",
    "Customizable to match your unique workflow",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <Monitor className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Custom POS Systems
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl">
              Transform your business operations with our tailored point-of-sale solutions. 
              Whether you run a retail store, restaurant, or service business, our POS systems 
              are designed to streamline your operations and boost profitability.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Industry-Specific Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-smooth">
                  <CheckCircle className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Why Choose Our POS Systems?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="p-8 gradient-hero">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our team will work with you to design a POS system that perfectly 
                  fits your business needs. Schedule a free consultation today.
                </p>
                <Link to="/#contact">
                  <Button 
                    size="lg" 
                    className="w-full"
                  >
                    Contact Us Today
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default POSDetails;