
import { useEffect } from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-agency-navy mb-4">
              <span className="heading-highlight">Services</span> We Offer
            </h2>
            <p className="text-gray-600">
              We deliver comprehensive solutions to help your business thrive in the digital world with creative design and strategic marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Design & Development"
              description="Custom websites that engage visitors, drive conversions, and showcase your brand's unique value proposition."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
              }
              id="web-design"
            />
            
            <ServiceCard
              title="Branding & Identity"
              description="Strategic brand development including logos, style guides, and messaging that resonates with your audience."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m14.5 9-5 5"></path><path d="m9.5 9 5 5"></path></svg>
              }
              id="branding"
            />
            
            <ServiceCard
              title="Digital Marketing"
              description="Data-driven marketing strategies that increase visibility, engagement, and conversion rates across channels."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
              }
              id="digital-marketing"
            />
            
            <ServiceCard
              title="SEO Optimization"
              description="Improve your search ranking and drive organic traffic with our comprehensive SEO strategies."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
              }
              id="seo"
            />
            
            <ServiceCard
              title="App Development"
              description="Custom mobile and web applications designed to enhance user experience and streamline operations."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
              }
              id="app-development"
            />
            
            <ServiceCard
              title="UI/UX Design"
              description="User-centered design that balances aesthetics with functionality to create intuitive digital experiences."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h7"></path><path d="M9 3v4"></path><path d="M4 12h7"></path><path d="M7 10v4"></path><path d="M4 19h8"></path><path d="M8 17v4"></path><path d="M13 3h7"></path><path d="M17 7v12"></path></svg>
              }
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Work Showcase Section */}
      <section id="work" className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-agency-navy mb-4">
              Our <span className="heading-highlight">Portfolio</span>
            </h2>
            <p className="text-gray-600">
              Take a look at some of our recent projects that showcase our expertise and creative approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="E-Commerce Website" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-agency-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-3 bg-white text-agency-blue font-medium rounded-lg">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-agency-navy">FreshMarket E-Commerce</h3>
                <p className="text-gray-600 mt-2">
                  A full-featured e-commerce platform for an organic grocery business with custom product filters and secure checkout.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Web Development</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">UI/UX Design</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">E-Commerce</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Brand Identity" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-agency-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-3 bg-white text-agency-blue font-medium rounded-lg">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-agency-navy">Elevate Media Branding</h3>
                <p className="text-gray-600 mt-2">
                  Complete brand identity redesign for a media company, including logo, style guide, and marketing materials.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Branding</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Logo Design</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Identity Systems</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Mobile App" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-agency-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-3 bg-white text-agency-blue font-medium rounded-lg">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-agency-navy">NomadTrack App</h3>
                <p className="text-gray-600 mt-2">
                  Travel planning mobile app that helps users discover hidden gems and organize itineraries on-the-go.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Mobile App</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">UX Design</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Development</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Digital Marketing" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-agency-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-3 bg-white text-agency-blue font-medium rounded-lg">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-agency-navy">TechSphere Marketing Campaign</h3>
                <p className="text-gray-600 mt-2">
                  Integrated digital marketing campaign that increased client's online presence by 200% and drove 150% more leads.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Digital Marketing</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">SEO</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Analytics</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild size="lg" className="border-agency-navy text-agency-navy hover:bg-agency-navy/5">
              <Link to="#">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-agency-navy mb-4">
              Client <span className="heading-highlight">Testimonials</span>
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          {/* In a real implementation, this would be a proper carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The team at PixelCraft exceeded all of our expectations. They delivered a website that perfectly captures our brand essence and has significantly improved our conversion rates."
              author="Sarah Johnson"
              role="Marketing Director"
              company="TechNova"
            />
            
            <TestimonialCard
              quote="Working with PixelCraft transformed our digital presence. Their strategic approach to our marketing campaign delivered measurable results that far surpassed our goals."
              author="Michael Chen"
              role="CEO"
              company="Horizon Innovations"
            />
            
            <TestimonialCard
              quote="The branding work PixelCraft did for us has been instrumental in our growth. They truly understood our vision and brought it to life in a way that resonates with our audience."
              author="Emma Rodriguez"
              role="Creative Director"
              company="Lunar Studios"
            />
          </div>
          
          {/* CTA Section */}
          <div className="mt-24 bg-agency-navy rounded-2xl p-8 md:p-12 text-center md:text-left">
            <div className="md:flex items-center justify-between">
              <div className="mb-8 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to start your project?</h3>
                <p className="text-gray-300 max-w-xl">
                  Let's work together to bring your vision to life with creative design, strategic thinking, and cutting-edge technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button 
                  variant="outline" 
                  asChild 
                  size="lg"
                  className="text-base border-white text-white hover:bg-white/10"
                >
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
