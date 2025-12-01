import { Search, SlidersHorizontal } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

const properties = [
  { id: 1, title: 'Modern City Apartment', price: '₱15,000 / mo', location: 'Bacolod City', beds: 1, baths: 1, area: 45, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=400&auto=format&fit=crop' },
  { id: 2, title: 'Suburban Family Home', price: '₱5,500,000', location: 'Talisay City', beds: 3, baths: 2, area: 150, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=400&auto=format&fit=crop' },
  { id: 3, title: 'Cozy Studio Unit', price: '₱8,000 / mo', location: 'Bacolod City', beds: 1, baths: 1, area: 28, image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=400&auto=format&fit=crop' },
];

export function SearchScreen() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="p-4 space-y-4">
        <h1 className="text-xl font-bold text-gray-900">Search Properties</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by location, landmark..."
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0056D2]/50 focus:border-[#0056D2] outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <Badge variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">For Sale</Badge>
          <Badge variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">For Rent</Badge>
          <Badge variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">Price</Badge>
          <Badge variant="outline" className="flex items-center gap-1 text-xs cursor-pointer hover:bg-gray-100">
            <SlidersHorizontal className="w-3 h-3" /> More
          </Badge>
        </div>

        {/* Results */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-800">Results (3)</h2>
          {properties.map(prop => (
            <Card key={prop.id} className="flex p-3 gap-3 border border-gray-200 rounded-lg overflow-hidden cursor-pointer">
              <img src={prop.image} alt={prop.title} className="w-24 h-24 object-cover rounded-md bg-gray-200" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{prop.title}</p>
                <p className="text-xs text-gray-500 mb-1">{prop.location}</p>
                <p className="text-sm font-bold text-[#0056D2] mb-2">{prop.price}</p>
                <div className="flex items-center space-x-3 text-xs text-gray-600">
                  <span>{prop.beds} bed</span>
                  <span>•</span>
                  <span>{prop.baths} bath</span>
                  <span>•</span>
                  <span>{prop.area} m²</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}