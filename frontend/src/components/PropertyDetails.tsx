import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Maximize, Calendar, Phone, Mail, Car } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { getPropertyById } from '../data/propertyData';
import { AgentModal } from './AgentModal';

interface PropertyDetailsProps {
  propertyId: number;
  onBack: () => void;
  onInquire: () => void;
  onReserve: () => void;
  onMessageAgent?: (agentEmail: string, agentName: string) => void;
}

export function PropertyDetails({ propertyId, onBack, onInquire, onReserve, onMessageAgent }: PropertyDetailsProps) {
  const property = getPropertyById(propertyId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Property not found</p>
      </div>
    );
  }

  const handleMessageAgent = () => {
    if (onMessageAgent) {
      onMessageAgent(property.agent.email, property.agent.name);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white pb-24">
        {/* Image Gallery */}
        <div className="relative">
          <ImageWithFallback
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-80 object-cover"
          />
          <button
            onClick={onBack}
            className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900" />
          </button>
          <Badge className="absolute top-6 right-6 bg-white text-[#0056D2] border-0">
            {property.status}
          </Badge>

          {/* Image indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImageIndex === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Property Info */}
        <div className="px-6 py-6">
          <h1 className="text-2xl text-gray-900 mb-2">{property.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </div>
          <p className="text-3xl text-[#0056D2] mb-6">{property.price}</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
            <div className="text-center">
              <Bed className="w-5 h-5 text-gray-600 mx-auto mb-1" />
              <p className="text-sm text-gray-900">{property.beds}</p>
              <p className="text-xs text-gray-500">Beds</p>
            </div>
            <div className="text-center">
              <Bath className="w-5 h-5 text-gray-600 mx-auto mb-1" />
              <p className="text-sm text-gray-900">{property.baths}</p>
              <p className="text-xs text-gray-500">Baths</p>
            </div>
            <div className="text-center">
              <Maximize className="w-5 h-5 text-gray-600 mx-auto mb-1" />
              <p className="text-sm text-gray-900">{property.sqft}m²</p>
              <p className="text-xs text-gray-500">Area</p>
            </div>
            <div className="text-center">
              <Car className="w-5 h-5 text-gray-600 mx-auto mb-1" />
              <p className="text-sm text-gray-900">{property.parking}</p>
              <p className="text-xs text-gray-500">Parking</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-gray-900 mb-3">Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{property.description}</p>
          </div>

          {/* Property Details */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <h3 className="text-gray-900 mb-3">Property Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="text-gray-900">{property.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Year Built:</span>
                <span className="text-gray-900">{property.yearBuilt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-gray-900">{property.status}</span>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h2 className="text-gray-900 mb-3">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, index) => (
                <Badge key={index} variant="outline" className="bg-[#0056D2]/5 text-[#0056D2] border-[#0056D2]/20">
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h2 className="text-gray-900 mb-3">Features</h2>
            <div className="flex flex-wrap gap-2">
              {property.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Agent Info */}
          <div 
            onClick={() => setIsAgentModalOpen(true)}
            className="mb-6 p-4 bg-gradient-to-r from-[#0056D2]/5 to-[#0056D2]/10 rounded-xl border border-[#0056D2]/20 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-gray-900">Contact Agent</h2>
              <ChevronRight className="w-5 h-5 text-[#0056D2]" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={property.agent.photo}
                  alt={property.agent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">{property.agent.name}</p>
                <p className="text-xs text-gray-600">Licensed Real Estate Agent</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-[#0056D2]/10 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                {property.agent.phone}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                {property.agent.email}
              </div>
            </div>
            <p className="text-xs text-[#0056D2] mt-3">Tap to view full profile</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="flex gap-3">
            <Button onClick={onInquire} variant="outline" className="flex-1 h-12">
              Inquire
            </Button>
            <Button onClick={onReserve} className="flex-1 bg-[#0056D2] hover:bg-[#004aad] text-white h-12">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Viewing
            </Button>
          </div>
        </div>
      </div>

      {/* Agent Modal */}
      <AgentModal
        isOpen={isAgentModalOpen}
        onClose={() => setIsAgentModalOpen(false)}
        agent={property.agent}
        onMessage={handleMessageAgent}
      />
    </>
  );
}