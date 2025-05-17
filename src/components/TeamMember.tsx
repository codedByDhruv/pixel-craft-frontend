
import { cn } from "@/lib/utils";

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
  className?: string;
}

const TeamMember = ({
  name,
  role,
  image,
  bio,
  socialLinks,
  className,
}: TeamMemberProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group",
      className
    )}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {socialLinks && (
          <div className="absolute inset-0 bg-agency-navy/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {socialLinks.twitter && (
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-agency-blue transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            )}
            
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-agency-blue transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            )}
            
            {socialLinks.email && (
              <a 
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-agency-blue transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </a>
            )}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-agency-navy">{name}</h3>
        <p className="text-agency-blue font-medium">{role}</p>
        {bio && <p className="mt-3 text-gray-600 text-sm">{bio}</p>}
      </div>
    </div>
  );
};

export default TeamMember;
