import { Card } from "@/components/ui/card";
import { Award, Users, Clock, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Clock, label: "Support Hours", value: "24/7" },
    { icon: Target, label: "Projects Completed", value: "1000+" },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Bytewave Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a leading technology solutions provider, specializing in comprehensive 
              security systems, hardware & software services, and custom point-of-sale solutions. 
              With over a decade of experience, we've helped hundreds of businesses secure their 
              operations and optimize their technology infrastructure.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our team of certified technicians and engineers is committed to delivering 
              exceptional service and cutting-edge solutions tailored to your unique business needs. 
              We pride ourselves on staying ahead of technological trends to provide you with 
              the most reliable and innovative solutions available.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                <span className="text-accent font-semibold">Certified Technicians</span>
              </div>
              <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                <span className="text-accent font-semibold">Quality Assured</span>
              </div>
              <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                <span className="text-accent font-semibold">Customer Focused</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-elegant transition-smooth"
                >
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
