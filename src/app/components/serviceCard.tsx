import { Heart } from 'lucide-react';
import React from 'react';
import Link from 'next/link';


// Define the properties (props) that our card component will accept.
// This makes the component reusable for any service.
interface ServiceCardProps {
  title: string;
  description: string;
  href: string; // The URL the "Know more" link will point to.
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, href }) => {
  return (
    // Main container for the card
    // Using a very light shade of our primary color for the background tint.
    // You can adjust the opacity (e.g., bg-primary/10) to get the exact color.
    <div className="bg-secondary p-8 rounded-xl shadow-m text-center flex flex-col border-solid-black-4">
      
      {/* Service Title */}
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      {/* Service Description */}
      <p className="text-foreground/70 mb-6 leading-relaxed">
        {description}
      </p>
      
      {/* "Know more" Link */}
      {/* The `mt-auto` class pushes the link to the bottom, which is useful
          if cards in a row have different amounts of text and you want the
          links to align. */}
      <div className="mt-auto">
        <Link href="www.google.com">
          <span className="font-medium text-primary hover:text-primary/80 transition-colors">
            Know more
          </span>
        </Link>
      </div>

    </div>
  );
};

export default ServiceCard;