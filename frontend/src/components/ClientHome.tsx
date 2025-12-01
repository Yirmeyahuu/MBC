import { ImageWithFallback } from './figma/ImageWithFallback';
import { Bell, Search, MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { allProperties } from '../data/propertyData';

interface ClientHomeProps {
  onPropertyClick: (propertyId: number) => void;
}

export function ClientHome({ onPropertyClick }: ClientHomeProps) {
  // Get featured properties (first 3)
  const featuredProperties = allProperties.slice(0, 3);
  
  // Get recent listings (last 3)
  const recentListings = allProperties.slice(3, 6);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="bg-[#0056D2] px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white text-xl">Metro Bacolod Connect</h1>
            <p className="text-white/80 text-sm mt-1">Find your dream property</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search location, property type..."
            className="pl-11 pr-12 h-12 bg-white rounded-xl border-0"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#0056D2] rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900">Featured Properties</h2>
          <button className="text-[#0056D2] text-sm">View All</button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              onClick={() => onPropertyClick(property.id)}
              className="flex-shrink-0 w-72 cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden mb-3">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-white text-[#0056D2] border-0">
                  {property.status}
                </Badge>
              </div>
              <h3 className="text-gray-900 mb-1">{property.title}</h3>
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                {property.location}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#0056D2]">{property.price}</p>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <span className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {property.beds}
                  </span>
                  <span className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {property.baths}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Listings */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900">Recent Listings</h2>
          <button className="text-[#0056D2] text-sm">View All</button>
        </div>

        <div className="space-y-4">
          {recentListings.map((property) => (
            <div
              key={property.id}
              onClick={() => onPropertyClick(property.id)}
              className="flex gap-4 cursor-pointer bg-white rounded-xl border border-gray-200 p-3"
            >
              <div className="relative flex-shrink-0">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-gray-900 text-sm line-clamp-1">{property.title}</h3>
                  <Badge className="ml-2 flex-shrink-0 bg-[#0056D2]/10 text-[#0056D2] border-0 text-xs">
                    {property.status}
                  </Badge>
                </div>
                <div className="flex items-center text-gray-600 text-xs mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  {property.location}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[#0056D2] text-sm">{property.price}</p>
                  <div className="flex items-center gap-3 text-gray-600 text-xs">
                    <span className="flex items-center">
                      <Bed className="w-3 h-3 mr-1" />
                      {property.beds}
                    </span>
                    <span className="flex items-center">
                      <Bath className="w-3 h-3 mr-1" />
                      {property.baths}
                    </span>
                    <span className="flex items-center">
                      <Maximize className="w-3 h-3 mr-1" />
                      {property.sqft}m²
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}