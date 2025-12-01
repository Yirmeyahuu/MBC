import { ImageWithFallback } from './figma/ImageWithFallback';
import { Plus, TrendingUp, Home, Users, Calendar, MapPin, Edit, Trash2, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface AgentDashboardProps {
  onPropertyClick?: (propertyId: number) => void;
}

export function AgentDashboard({ onPropertyClick }: AgentDashboardProps) {
  const stats = [
    { label: 'Total Listings', value: '12', icon: Home, color: 'bg-blue-100 text-blue-600' },
    { label: 'Active Leads', value: '28', icon: Users, color: 'bg-green-100 text-green-600' },
    { label: 'Appointments', value: '8', icon: Calendar, color: 'bg-purple-100 text-purple-600' },
    { label: 'This Month', value: '₱2.4M', icon: TrendingUp, color: 'bg-orange-100 text-orange-600' }
  ];

  const myListings = [
    {
      id: 1,
      title: 'Modern Luxury Penthouse',
      location: 'Bacolod City Center',
      price: '₱12,500,000',
      image: 'https://images.unsplash.com/photo-1758448756350-3d0eec02ba37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2NDU3MTY3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'Active',
      views: 342,
      inquiries: 12
    },
    {
      id: 2,
      title: 'Premium Hotel Suite',
      location: 'Lacson Street',
      price: '₱8,750,000',
      image: 'https://images.unsplash.com/photo-1695706807850-8c66b24b3413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NTcwODA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'Active',
      views: 287,
      inquiries: 8
    },
    {
      id: 3,
      title: 'Designer Kitchen Condo',
      location: 'Villamonte',
      price: '₱7,300,000',
      image: 'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NTQ4ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'Reserved',
      views: 156,
      inquiries: 5
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      client: 'John Rivera',
      property: 'Modern Luxury Penthouse',
      date: 'Dec 2, 2025',
      time: '10:00 AM',
      type: 'Property Viewing'
    },
    {
      id: 2,
      client: 'Sarah Chen',
      property: 'Premium Hotel Suite',
      date: 'Dec 2, 2025',
      time: '2:00 PM',
      type: 'Property Viewing'
    },
    {
      id: 3,
      client: 'Mark Lopez',
      property: 'Designer Kitchen Condo',
      date: 'Dec 3, 2025',
      time: '11:00 AM',
      type: 'Contract Signing'
    },
    {
      id: 4,
      client: 'Lisa Garcia',
      property: 'Modern Luxury Penthouse',
      date: 'Dec 4, 2025',
      time: '3:00 PM',
      type: 'Property Viewing'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-[#0056D2] px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-white text-xl">Agent Dashboard</h1>
            <p className="text-white/80 text-sm mt-1">Welcome back, Maria!</p>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0056D2]">
            MS
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 -mt-8">
        <div className="grid grid-cols-2 gap-3 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-2`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-gray-900 text-lg">{stat.value}</p>
                <p className="text-gray-600 text-xs">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* My Listings */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900">My Listings</h2>
          <Button size="sm" className="bg-[#0056D2] hover:bg-[#004aad] text-white h-9">
            <Plus className="w-4 h-4 mr-1" />
            Add Listing
          </Button>
        </div>

        <div className="space-y-3">
          {myListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
            >
              <div className="flex gap-3 p-3">
                <ImageWithFallback
                  src={listing.image}
                  alt={listing.title}
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-gray-900 text-sm line-clamp-1">{listing.title}</h3>
                    <Badge 
                      className={`ml-2 flex-shrink-0 text-xs ${
                        listing.status === 'Active' 
                          ? 'bg-green-100 text-green-700 border-0' 
                          : 'bg-yellow-100 text-yellow-700 border-0'
                      }`}
                    >
                      {listing.status}
                    </Badge>
                  </div>
                  <div className="flex items-center text-gray-600 text-xs mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    {listing.location}
                  </div>
                  <p className="text-[#0056D2] text-sm mb-2">{listing.price}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {listing.views} views
                    </span>
                    <span>{listing.inquiries} inquiries</span>
                  </div>
                </div>
              </div>
              <div className="flex border-t border-gray-200">
                <button className="flex-1 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-1">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => onPropertyClick?.(listing.id)}
                  className="flex-1 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-1 border-l border-gray-200"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="flex-1 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center justify-center gap-1 border-l border-gray-200">
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900">Upcoming Appointments</h2>
          <button className="text-[#0056D2] text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-200"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-gray-900 text-sm mb-1">{appointment.client}</h3>
                  <p className="text-gray-600 text-xs mb-1">{appointment.property}</p>
                  <Badge className="bg-[#0056D2]/10 text-[#0056D2] border-0 text-xs">
                    {appointment.type}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 text-sm">{appointment.date}</p>
                  <p className="text-gray-600 text-xs">{appointment.time}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">
                  Reschedule
                </Button>
                <Button size="sm" className="flex-1 h-8 text-xs bg-[#0056D2] hover:bg-[#004aad] text-white">
                  Contact Client
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
