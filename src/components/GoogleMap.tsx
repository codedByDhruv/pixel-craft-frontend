
import { useEffect, useRef } from 'react';

// In a real application, you would pass an API key
// This example will show a basic map without API key
const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create an element to display while the real map would load
    const createPlaceholderMap = () => {
      if (mapRef.current) {
        const container = mapRef.current;
        container.innerHTML = '';
        
        // Create placeholder content
        const placeholderDiv = document.createElement('div');
        placeholderDiv.className = 'w-full h-full flex items-center justify-center bg-gray-100 rounded-lg';
        
        const mapContent = document.createElement('div');
        mapContent.className = 'text-center p-8';
        
        const mapPin = document.createElement('div');
        mapPin.className = 'w-12 h-12 bg-agency-blue rounded-full flex items-center justify-center mx-auto mb-4';
        mapPin.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
        
        const title = document.createElement('h3');
        title.className = 'text-lg font-bold text-agency-navy';
        title.textContent = 'PixelCraft HQ';
        
        const address = document.createElement('p');
        address.className = 'text-gray-600';
        address.textContent = '123 Design Street, Creative City, CA 90210';
        
        mapContent.appendChild(mapPin);
        mapContent.appendChild(title);
        mapContent.appendChild(address);
        placeholderDiv.appendChild(mapContent);
        container.appendChild(placeholderDiv);
      }
    };
    
    // In a real implementation, this would load the Google Maps API
    // and initialize a real map with the agency's location
    createPlaceholderMap();
    
  }, []);
  
  return (
    <div ref={mapRef} className="w-full h-[400px] rounded-lg shadow-md overflow-hidden"></div>
  );
};

export default GoogleMap;
