import React from 'react';
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Wifi, Dumbbell, Car, Shield, Wind, Zap, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface PropertyDetailsProps {
  propertyId: number;
  onBack: () => void;
  onInquire: () => void;
  onReserve: () => void;
}

export function PropertyDetails({ propertyId, onBack, onInquire, onReserve }: PropertyDetailsProps) {
  // Mock property data
  const property = {
    id: propertyId,
    title: 'Modern Luxury Penthouse',
    price: '₱12,500,000',
    location: 'Bacolod City Center, Negros Occidental',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
    beds: 3,
    baths: 2,
    sqft: '120',
    status: 'Available',
    description: 'Experience luxury living at its finest in this stunning penthouse located in the heart of Bacolod City. This modern unit features floor-to-ceiling windows, premium finishes, and breathtaking city views. Perfect for those seeking elegance and comfort in a prime location.',
    amenities: [
      { icon: Wifi, name: 'High-Speed WiFi' },
      { icon: Dumbbell, name: 'Fitness Gym' },
      { icon: Car, name: 'Parking Space' },
      { icon: Shield, name: '24/7 Security' },
      { icon: Wind, name: 'Air Conditioning' },
      { icon: Zap, name: 'Backup Generator' }
    ],
    agent: {
      name: 'Maria Santos',
      license: 'PRC-12345',
      avatar: 'https://i.pravatar.cc/150?img=32'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Hero Image Section */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <button
          onClick={onBack}
          className="absolute top-5 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md"
        >
          <ArrowLeft className="w-5 h-5 text-gray-800" />
        </button>
        <Badge variant="secondary" className="absolute top-6 right-4 bg-white/90 text-gray-800">
          {property.status}
        </Badge>
      </div>

      {/* Content Section */}
      <div className="relative bg-gray-50 -mt-8 rounded-t-3xl px-4 pt-6 space-y-6">
        
        {/* Title and Price */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
            <span>{property.location}</span>
          </div>
          <p className="text-2xl font-bold text-[#0056D2] mt-3">{property.price}</p>
        </div>

        {/* Property Stats */}
        <div className="grid grid-cols-3 gap-3 text-center bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex flex-col items-center gap-1">
            <Bed className="w-5 h-5 text-gray-500" />
            <p className="text-sm font-semibold text-gray-800">{property.beds} Beds</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bath className="w-5 h-5 text-gray-500" />
            <p className="text-sm font-semibold text-gray-800">{property.baths} Baths</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Maximize className="w-5 h-5 text-gray-500" />
            <p className="text-sm font-semibold text-gray-800">{property.sqft} m²</p>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Amenities */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Amenities</h2>
          <div className="grid grid-cols-2 gap-3">
            {property.amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="w-9 h-9 bg-[#0056D2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#0056D2]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{amenity.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Agent Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Listed by</h2>
          <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
            <img src={property.agent.avatar} alt={property.agent.name} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{property.agent.name}</p>
              <p className="text-xs text-gray-500">License: {property.agent.license}</p>
            </div>
            <Button variant="outline" size="sm" className="h-9">
              <Phone className="w-3.5 h-3.5 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 p-3 safe-area-bottom">
        <div className="max-w-md mx-auto flex gap-3">
          <Button
            onClick={onInquire}
            variant="outline"
            className="flex-1 h-12 text-base"
          >
            Inquire
          </Button>
          <Button
            onClick={onReserve}
            className="flex-1 h-12 bg-[#0056D2] hover:bg-[#004aad] text-white text-base"
          >
            Reserve Now
          </Button>
        </div>
      </div>
    </div>
  );
}