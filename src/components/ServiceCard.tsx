
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  id?: string; // Added optional id prop
}

const ServiceCard = ({ title, description, icon, className, id }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-8 rounded-lg shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
      id={id} // Added id to the div element
    >
      <div className="w-14 h-14 flex items-center justify-center bg-agency-blue/10 text-agency-blue rounded-lg mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-agency-navy mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href="#" className="inline-flex items-center mt-5 text-agency-blue font-medium">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>
  );
};

export default ServiceCard;
