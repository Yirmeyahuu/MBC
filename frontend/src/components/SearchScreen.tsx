import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { allProperties } from '../data/propertyData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SearchScreenProps {
  onPropertyClick?: (propertyId: number) => void;
}

export function SearchScreen({ onPropertyClick }: SearchScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Filter properties based on search query
  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch = 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Apply status filters if any
    if (activeFilters.length === 0) return matchesSearch;
    
    return matchesSearch && activeFilters.some(filter => {
      if (filter === 'For Sale') return property.status === 'Available' || property.status === 'Sold';
      if (filter === 'Available') return property.status === 'Available';
      if (filter === 'Reserved') return property.status === 'Reserved';
      return true;
    });
  });

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const handlePropertyClick = (propertyId: number) => {
    if (onPropertyClick) {
      onPropertyClick(propertyId);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="p-4 space-y-4">
        <h1 className="text-xl font-bold text-gray-900">Search Properties</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by location, landmark, or property name..."
            className="w-full pl-9 pr-10 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0056D2]/50 focus:border-[#0056D2] outline-none"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          <Badge 
            variant={activeFilters.includes('For Sale') ? 'default' : 'outline'}
            onClick={() => toggleFilter('For Sale')}
            className={`text-xs cursor-pointer whitespace-nowrap ${
              activeFilters.includes('For Sale') 
                ? 'bg-[#0056D2] text-white' 
                : 'hover:bg-gray-100'
            }`}
          >
            For Sale
          </Badge>
          <Badge 
            variant={activeFilters.includes('Available') ? 'default' : 'outline'}
            onClick={() => toggleFilter('Available')}
            className={`text-xs cursor-pointer whitespace-nowrap ${
              activeFilters.includes('Available') 
                ? 'bg-[#0056D2] text-white' 
                : 'hover:bg-gray-100'
            }`}
          >
            Available
          </Badge>
          <Badge 
            variant={activeFilters.includes('Reserved') ? 'default' : 'outline'}
            onClick={() => toggleFilter('Reserved')}
            className={`text-xs cursor-pointer whitespace-nowrap ${
              activeFilters.includes('Reserved') 
                ? 'bg-[#0056D2] text-white' 
                : 'hover:bg-gray-100'
            }`}
          >
            Reserved
          </Badge>
          <Badge 
            variant="outline" 
            className="flex items-center gap-1 text-xs cursor-pointer hover:bg-gray-100 whitespace-nowrap"
          >
            <SlidersHorizontal className="w-3 h-3" /> More
          </Badge>
        </div>

        {/* Active Filters Display */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeFilters.map(filter => (
              <Badge 
                key={filter}
                className="bg-[#0056D2]/10 text-[#0056D2] border-0 flex items-center gap-1"
              >
                {filter}
                <button
                  onClick={() => toggleFilter(filter)}
                  className="ml-1 hover:bg-[#0056D2]/20 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}

        {/* Search Status */}
        {searchQuery && (
          <p className="text-sm text-gray-600">
            {filteredProperties.length === 0 ? (
              <span className="text-red-600">No properties found for "{searchQuery}"</span>
            ) : (
              <span>Showing {filteredProperties.length} result{filteredProperties.length !== 1 ? 's' : ''} for "{searchQuery}"</span>
            )}
          </p>
        )}

        {/* Results */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-800">
            {searchQuery || activeFilters.length > 0 ? 'Results' : 'All Properties'} ({filteredProperties.length})
          </h2>
          
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">No properties found</p>
              <p className="text-gray-400 text-xs mt-1">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredProperties.map(prop => (
              <Card 
                key={prop.id} 
                onClick={() => handlePropertyClick(prop.id)}
                className="flex p-3 gap-3 border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow active:scale-[0.99]"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <ImageWithFallback
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <Badge 
                    className={`absolute top-1 right-1 text-[10px] px-1.5 py-0.5 ${
                      prop.status === 'Available' 
                        ? 'bg-green-500' 
                        : prop.status === 'Reserved'
                        ? 'bg-yellow-500'
                        : 'bg-gray-500'
                    } text-white border-0`}
                  >
                    {prop.status}
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{prop.title}</p>
                  <p className="text-xs text-gray-500 mb-1 truncate">{prop.location}</p>
                  <p className="text-sm font-bold text-[#0056D2] mb-2">{prop.price}</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <span className="flex items-center">
                      <span className="font-medium">{prop.beds}</span>
                      <span className="ml-0.5">bed</span>
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center">
                      <span className="font-medium">{prop.baths}</span>
                      <span className="ml-0.5">bath</span>
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center">
                      <span className="font-medium">{prop.sqft}</span>
                      <span className="ml-0.5">m²</span>
                    </span>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}