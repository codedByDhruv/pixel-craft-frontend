
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-navy leading-tight mb-4">
              We Design
              <span className="block">
                <span className="heading-highlight">Digital Experiences</span>
              </span>
              That Matter
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Award-winning digital agency helping brands stand out in the digital landscape with creative design, strategic marketing, and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base border-agency-navy text-agency-navy hover:bg-agency-navy/5"
              >
                <Link to="/#services">Explore Services</Link>
              </Button>
            </div>
            
            <div className="mt-12">
              <p className="text-sm uppercase font-medium text-gray-500 mb-4">Trusted by leading brands</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70">
                <div className="h-8 w-auto">Google</div>
                <div className="h-6 w-auto">Adobe</div>
                <div className="h-8 w-auto">Microsoft</div>
                <div className="h-7 w-auto">Shopify</div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="animate-fade-in-right">
              <div className="w-full h-[500px] bg-gradient-to-br from-agency-blue to-blue-700 rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center mix-blend-multiply opacity-70"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-2 bg-agency-blue mb-4"></div>
                  <h3 className="font-bold text-lg text-agency-navy">Creative Solutions</h3>
                  <p className="text-gray-600 mt-2">Innovative approaches for modern business challenges</p>
                </div>
                <div className="flex items-center text-agency-blue font-medium">
                  Learn More →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="hidden md:block absolute top-20 right-0 w-96 h-96 bg-agency-blue/10 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-10 left-0 w-64 h-64 bg-agency-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
