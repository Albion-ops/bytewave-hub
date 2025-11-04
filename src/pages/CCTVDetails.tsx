import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, CheckCircle, ArrowLeft, Shield, Eye, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CCTVDetails = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Eye,
      title: "HD & 4K Resolution",
      description: "Crystal clear video quality with support for HD and 4K cameras for maximum detail.",
    },
    {
      icon: Shield,
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance with motion detection and instant alerts.",
    },
    {
      icon: Clock,
      title: "Cloud Recording",
      description: "Secure cloud storage with easy access to footage from anywhere, anytime.",
    },
  ];

  const solutions = [
    {
      title: "Residential Security",
      description: "Protect your home and family with comprehensive surveillance coverage, doorbell cameras, and smart home integration.",
      benefits: [
        "Indoor & outdoor cameras",
        "Mobile app access",
        "Smart motion detection",
        "Two-way audio communication",
      ],
    },
    {
      title: "Commercial Solutions",
      description: "Safeguard your business with enterprise-grade security systems designed for offices, retail, and warehouses.",
      benefits: [
        "Multi-location management",
        "Employee monitoring",
        "Loss prevention",
        "Integration with access control",
      ],
    },
    {
      title: "Industrial Applications",
      description: "Heavy-duty surveillance for construction sites, manufacturing facilities, and large-scale operations.",
      benefits: [
        "Weatherproof systems",
        "Night vision capability",
        "Wide-area coverage",
        "Vandal-resistant cameras",
      ],
    },
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
                <Camera className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                CCTV Installation Services
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl">
              Advanced surveillance solutions to protect what matters most. Our professional 
              CCTV systems provide complete security coverage with cutting-edge technology 
              and expert installation.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Why Our CCTV Systems Stand Out
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-elegant transition-smooth">
                    <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Solutions for Every Need
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12 gradient-hero text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Professional Installation & Support
              </h2>
              <p className="text-muted-foreground mb-8">
                Our certified technicians ensure perfect installation with minimal disruption. 
                We provide comprehensive training and ongoing support to keep your system 
                running flawlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate("/#contact")}
                >
                  Get a Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/#contact")}
                >
                  Schedule Consultation
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CCTVDetails;