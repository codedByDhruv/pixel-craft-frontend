
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-agency-navy text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-agency-blue">Pixel</span>Craft
            </h3>
            <p className="text-gray-300 mb-4">
              We create digital experiences that matter. Elevate your brand with our award-winning design, development, and marketing services.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="hover:text-agency-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://facebook.com" className="hover:text-agency-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://instagram.com" className="hover:text-agency-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="https://linkedin.com" className="hover:text-agency-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-agency-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-agency-blue transition-colors">About</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-agency-blue transition-colors">Services</Link></li>
              <li><Link to="/#work" className="text-gray-300 hover:text-agency-blue transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-agency-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/#web-design" className="text-gray-300 hover:text-agency-blue transition-colors">Web Design</Link></li>
              <li><Link to="/#branding" className="text-gray-300 hover:text-agency-blue transition-colors">Branding</Link></li>
              <li><Link to="/#digital-marketing" className="text-gray-300 hover:text-agency-blue transition-colors">Digital Marketing</Link></li>
              <li><Link to="/#seo" className="text-gray-300 hover:text-agency-blue transition-colors">SEO Optimization</Link></li>
              <li><Link to="/#app-development" className="text-gray-300 hover:text-agency-blue transition-colors">App Development</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-agency-blue shrink-0 mt-1" size={18} />
                <span className="text-gray-300">123 Design Street, Creative City, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-agency-blue shrink-0" size={18} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-agency-blue transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-agency-blue shrink-0" size={18} />
                <a href="mailto:hello@pixelcraft.com" className="text-gray-300 hover:text-agency-blue transition-colors">
                  hello@pixelcraft.com
                </a>
              </li>
            </ul>
            <Button asChild className="mt-4">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-700 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} PixelCraft. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-agency-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-agency-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-agency-blue transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
