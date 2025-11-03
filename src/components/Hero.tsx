import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, ShoppingCart } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-accent font-semibold text-sm">
              Professional Technology Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Empowering Your Business with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Expert CCTV installation, comprehensive hardware & software solutions, 
            and custom POS systems tailored to your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group">
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Contact Us
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg shadow-sm">
              <Shield className="text-accent" size={20} />
              <span className="text-sm font-medium">Security Systems</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg shadow-sm">
              <Cpu className="text-accent" size={20} />
              <span className="text-sm font-medium">Hardware & Software</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg shadow-sm">
              <ShoppingCart className="text-accent" size={20} />
              <span className="text-sm font-medium">POS Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
