
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  company,
  image,
  className 
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-lg shadow-md border border-gray-100",
      className
    )}>
      <svg 
        width="45" 
        height="36" 
        className="text-agency-blue/20 mb-6"
        viewBox="0 0 45 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.05 36C9.45 36 6.45 34.725 4.05 32.175C1.35 29.325 0 25.8 0 21.6C0 17.4 1.2 13.575 3.6 10.125C6 6.675 9.975 3.6 15.525 0.9L18.975 6.3C14.775 8.4 11.7 10.5 9.75 12.6C7.8 14.7 6.825 16.8 6.825 18.9C6.825 19.5 6.9 20.025 7.05 20.475C7.5 20.175 8.25 20.025 9.3 20.025C11.4 20.025 13.2 20.7 14.7 22.05C16.2 23.4 16.95 25.275 16.95 27.675C16.95 30.075 16.125 32.025 14.475 33.525C12.825 35.175 10.95 36 13.05 36ZM34.05 36C30.45 36 27.45 34.725 25.05 32.175C22.35 29.325 21 25.8 21 21.6C21 17.4 22.2 13.575 24.6 10.125C27 6.675 30.975 3.6 36.525 0.9L39.975 6.3C35.775 8.4 32.7 10.5 30.75 12.6C28.8 14.7 27.825 16.8 27.825 18.9C27.825 19.5 27.9 20.025 28.05 20.475C28.5 20.175 29.25 20.025 30.3 20.025C32.4 20.025 34.2 20.7 35.7 22.05C37.2 23.4 37.95 25.275 37.95 27.675C37.95 30.075 37.125 32.025 35.475 33.525C33.825 35.175 31.95 36 34.05 36Z" 
          fill="currentColor"/>
      </svg>
      
      <p className="text-gray-600 mb-6">"{quote}"</p>
      
      <div className="flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-agency-blue/20 text-agency-blue flex items-center justify-center mr-4">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-agency-navy">{author}</h4>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
