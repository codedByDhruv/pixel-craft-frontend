
import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-agency-navy mb-6">
              Get in <span className="heading-highlight">Touch</span>
            </h1>
            <p className="text-xl text-gray-600">
              Have a project in mind? Let's talk about how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-agency-navy mb-6">
                Contact <span className="heading-highlight">Information</span>
              </h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-agency-blue/10 rounded-full flex items-center justify-center text-agency-blue shrink-0 mr-4">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Visit Our Office</h3>
                    <p className="text-gray-600">
                      123 Design Street<br />
                      Creative City, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-agency-blue/10 rounded-full flex items-center justify-center text-agency-blue shrink-0 mr-4">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:hello@pixelcraft.com" className="hover:text-agency-blue transition-colors">
                        hello@pixelcraft.com
                      </a><br />
                      <a href="mailto:info@pixelcraft.com" className="hover:text-agency-blue transition-colors">
                        info@pixelcraft.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-agency-blue/10 rounded-full flex items-center justify-center text-agency-blue shrink-0 mr-4">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+1234567890" className="hover:text-agency-blue transition-colors">
                        (123) 456-7890
                      </a><br />
                      <a href="tel:+1098765432" className="hover:text-agency-blue transition-colors">
                        (109) 876-5432
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-bold text-lg mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-agency-blue hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-agency-blue hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-agency-blue hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                  <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-agency-blue hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-agency-navy mb-6">
                Send Us a <span className="heading-highlight">Message</span>
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Map */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-agency-navy mb-4">
              Our <span className="heading-highlight">Location</span>
            </h2>
            <p className="text-gray-600">
              Visit our office to meet the team and discuss your project in person.
            </p>
          </div>
          
          <GoogleMap />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-agency-navy mb-4">
              Frequently Asked <span className="heading-highlight">Questions</span>
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-agency-navy mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on scope and complexity. A standard website design might take 4-8 weeks, while a comprehensive branding project could take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-agency-navy mb-3">What does your design process look like?</h3>
              <p className="text-gray-600">
                Our process includes discovery, strategy, design, development, testing, and launch phases. We believe in collaboration and keep clients involved at every stage with regular updates and feedback sessions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-agency-navy mb-3">Do you offer website maintenance services?</h3>
              <p className="text-gray-600">
                Yes, we offer various maintenance packages to keep your website secure, updated, and performing optimally. These can be tailored to your specific needs and budget.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-agency-navy mb-3">What information do you need to provide a quote?</h3>
              <p className="text-gray-600">
                To provide an accurate quote, we need to understand your project goals, target audience, desired features, timeline, and any existing brand assets. The more details you can provide, the more precise our estimate will be.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
