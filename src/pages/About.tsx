
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TeamMember from "@/components/TeamMember";

const About = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Alex Smith",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Alex has 15+ years of experience in digital design and marketing, having worked with Fortune 500 companies before founding PixelCraft.",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "alex@pixelcraft.com",
      },
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Sarah leads our creative team with her innovative vision and extensive experience in brand identity and visual design.",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "sarah@pixelcraft.com",
      },
    },
    {
      name: "David Chen",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "David brings technical expertise to our projects, ensuring we deliver cutting-edge solutions that perform flawlessly.",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "david@pixelcraft.com",
      },
    },
    {
      name: "Maya Rodriguez",
      role: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Maya's data-driven approach helps our clients achieve measurable results through strategic marketing campaigns.",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "maya@pixelcraft.com",
      },
    },
    {
      name: "James Wilson",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "James creates intuitive, user-centered designs that enhance the user experience and drive engagement.",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "james@pixelcraft.com",
      },
    },
    {
      name: "Emma Patel",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      bio: "Emma ensures projects run smoothly, keeping everything on schedule and exceeding client expectations.",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "emma@pixelcraft.com",
      },
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-agency-navy mb-6">
              About <span className="heading-highlight">PixelCraft</span>
            </h1>
            <p className="text-xl text-gray-600">
              We're a team of creative thinkers and technical experts on a mission to craft exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-agency-navy mb-6">
                Our <span className="heading-highlight">Story</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, PixelCraft began with a simple yet powerful vision: to bridge the gap between stunning design and technical excellence in the digital realm. Our founder, Alex Smith, noticed that many agencies excelled in either creativity or technical implementation, but rarely both.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of three passionate individuals has grown into a diverse collective of designers, developers, strategists, and marketers – all united by our commitment to crafting digital experiences that drive real results for our clients.
              </p>
              <p className="text-gray-600">
                Today, we're proud to partner with businesses of all sizes, from ambitious startups to established enterprises, helping them stand out in an increasingly crowded digital landscape with thoughtful strategy, beautiful design, and flawless execution.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Team working together"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-agency-blue/10 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-agency-blue/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-agency-navy mb-4">
              Our Mission & <span className="heading-highlight">Values</span>
            </h2>
            <p className="text-gray-600">
              The principles that guide our work and shape our approach to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-agency-blue/10 rounded-lg flex items-center justify-center text-agency-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-agency-navy mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We embrace creative thinking and stay at the forefront of technological advancements to deliver forward-thinking solutions for our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-agency-blue/10 rounded-lg flex items-center justify-center text-agency-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"></path><path d="m2 19 1.3.8A5.8 5.8 0 0 0 7 21c1.5 0 3-.4 4.1-1.2"></path><path d="M5 10.3c0-.5 0-.9.2-1.3L12 5l6 3.5"></path><path d="M12 22a10 10 0 0 0 10-10"></path><path d="M18 14 8 21"></path><path d="M9 7v6h6"></path><path d="M4 14a7 7 0 0 0 5 0"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-agency-navy mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                Every design choice and line of code serves a purpose. We focus on creating measurable impact and meaningful returns for our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-agency-blue/10 rounded-lg flex items-center justify-center text-agency-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-agency-navy mb-3">Collaborative Spirit</h3>
              <p className="text-gray-600">
                We believe the best work happens through open communication and partnership, both within our team and with our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-agency-blue/10 rounded-lg flex items-center justify-center text-agency-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6.5"></path><path d="M17.24 13.89c.37.99-.09 2.19-1.13 2.67l-5.61 2.6a5.5 5.5 0 0 1-4.5 0l-1.8-.83c-1.81-.84-1.65-3.76.3-4.29 3.7-1.02 5.8-1.69 8.9-3.24 1.77-.89 2.58 1.7.59 2.5-3.55 1.42-5.96 2.38-10.06 3.68"></path><path d="m12 9-1-1h3c1.05 0 2.1.33 2.86 1.1.76.76 1.14 1.9 1.14 3.08 0 1.79-.96 3.43-2.52 4.3"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-agency-navy mb-3">Integrity & Transparency</h3>
              <p className="text-gray-600">
                We conduct business with honesty, provide clear communication, and deliver on our promises without exception.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-agency-blue/10 rounded-lg flex items-center justify-center text-agency-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v5"></path><path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M22 22 19.5 19.5"></path><path d="M2 7h16"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-agency-navy mb-3">Continuous Growth</h3>
              <p className="text-gray-600">
                We invest in developing our skills and knowledge, staying current with industry trends to provide cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-agency-blue/10 rounded-lg flex items-center justify-center text-agency-blue mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8l4 4v12z"></path><line x1="12" y1="13" x2="12" y2="17"></line><line x1="12" y1="9" x2="12" y2="9.01"></line></svg>
              </div>
              <h3 className="text-xl font-bold text-agency-navy mb-3">Quality Obsessed</h3>
              <p className="text-gray-600">
                We never cut corners. Our dedication to excellence means attention to detail at every stage of the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-agency-navy mb-4">
              Meet Our <span className="heading-highlight">Team</span>
            </h2>
            <p className="text-gray-600">
              The talented individuals behind PixelCraft's success, bringing diverse skills and perspectives to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="bg-agency-navy rounded-2xl p-8 md:p-12">
            <div className="lg:flex items-center justify-between">
              <div className="mb-8 lg:mb-0 lg:max-w-xl">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to bring your ideas to life?</h2>
                <p className="text-gray-300">
                  Let's collaborate to create something exceptional that perfectly aligns with your business goals and resonates with your audience.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 text-base"
                >
                  <Link to="/#services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
