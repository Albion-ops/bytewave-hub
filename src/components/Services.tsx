import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, HardDrive, Monitor, ArrowRight } from "lucide-react";
import cctvImage from "@/assets/cctv-service.jpg";
import hardwareImage from "@/assets/hardware-service.jpg";
import posImage from "@/assets/pos-service.jpg";

const Services = () => {
  const services = [
    {
      title: "CCTV Installation Services",
      description: "Professional installation of cutting-edge surveillance systems to protect your property and ensure complete security coverage.",
      icon: Camera,
      image: cctvImage,
      features: [
        "HD & 4K Camera Systems",
        "Remote Monitoring",
        "Motion Detection & Alerts",
        "Professional Installation",
      ],
    },
    {
      title: "Hardware & Software Solutions",
      description: "Complete computer hardware supply and software maintenance services to keep your business running smoothly and efficiently.",
      icon: HardDrive,
      image: hardwareImage,
      features: [
        "Computer Hardware Supply",
        "Software Installation & Updates",
        "System Maintenance",
        "Technical Support",
      ],
    },
    {
      title: "Custom POS Systems",
      description: "Tailored point-of-sale solutions designed specifically for your business operations, from retail to hospitality.",
      icon: Monitor,
      image: posImage,
      features: [
        "Custom-Built Systems",
        "Inventory Management",
        "Sales Analytics",
        "Multi-Location Support",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to elevate your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-elegant transition-smooth cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="group/btn w-full">
                    Learn More
                    <ArrowRight 
                      size={16} 
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform" 
                    />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
