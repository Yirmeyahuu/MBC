import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  LayoutDashboard,
  Building2,
  MessageSquare,
  User,
  Plus,
  Eye,
  Edit,
  MapPin,
  Clock,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AgentHomeProps {
  onLogout: () => void;
}

interface Listing {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  status: "Active" | "Pending" | "Sold";
  views: number;
  postedDays: number;
}

interface Lead {
  id: number;
  name: string;
  propertyInterest: string;
  message: string;
  time: string;
  unread: boolean;
}

const myListings: Listing[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1723465308831-29da05e011f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NDU3Njk4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Luxury Hotel & Resort",
    price: "₱45,000,000",
    location: "Bacolod City Center",
    status: "Active",
    views: 1245,
    postedDays: 3,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1694595437436-2ccf5a95591f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NDUzMzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Modern Hotel Complex",
    price: "₱38,500,000",
    location: "Downtown Bacolod",
    status: "Active",
    views: 987,
    postedDays: 7,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1731446294563-e492c2a54dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwZmFjYWRlfGVufDF8fHx8MTc2NDU3Njk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Premium Boutique Hotel",
    price: "₱52,000,000",
    location: "Bacolod North",
    status: "Pending",
    views: 654,
    postedDays: 12,
  },
];

const recentLeads: Lead[] = [
  {
    id: 1,
    name: "Maria Santos",
    propertyInterest: "Luxury Hotel & Resort",
    message: "Interested in viewing the property this weekend...",
    time: "10 min ago",
    unread: true,
  },
  {
    id: 2,
    name: "John Dela Cruz",
    propertyInterest: "Modern Hotel Complex",
    message: "What are the financing options available?",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    name: "Anna Reyes",
    propertyInterest: "Premium Boutique Hotel",
    message: "Can we schedule a meeting to discuss?",
    time: "3 hours ago",
    unread: false,
  },
];

export default function AgentHome({ onLogout }: AgentHomeProps) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-primary px-6 pt-12 pb-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white/80">Agent Dashboard</h3>
            <h2 className="text-white">Good Morning, Agent!</h2>
          </div>
          <button
            onClick={onLogout}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
          >
            <User className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
            <p className="text-white/70 text-xs mb-1">Active</p>
            <p className="text-white">12</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
            <p className="text-white/70 text-xs mb-1">Leads</p>
            <p className="text-white">24</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
            <p className="text-white/70 text-xs mb-1">Sold</p>
            <p className="text-white">8</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto pb-20">
        {/* Quick Actions */}
        <div className="px-6 py-6 bg-white border-b">
          <Button className="w-full h-12 bg-primary hover:bg-primary/90">
            <Plus className="w-5 h-5 mr-2" />
            Add New Listing
          </Button>
        </div>

        {/* My Listings */}
        <div className="px-6 py-6 bg-white mb-4">
          <div className="flex items-center justify-between mb-4">
            <h3>My Listings</h3>
            <button className="text-primary text-sm">View All</button>
          </div>

          <div className="space-y-4">
            {myListings.map((listing) => (
              <Card
                key={listing.id}
                className="overflow-hidden border-0 shadow-sm"
              >
                <div className="flex gap-3 p-3">
                  <div className="relative flex-shrink-0">
                    <ImageWithFallback
                      src={listing.image}
                      alt={listing.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <Badge
                      className={`absolute top-2 left-2 text-xs ${
                        listing.status === "Active"
                          ? "bg-green-500"
                          : listing.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {listing.status}
                    </Badge>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="truncate mb-1">{listing.title}</h4>
                    <p className="text-primary mb-1">{listing.price}</p>
                    <div className="flex items-center gap-1 text-gray-600 mb-2">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs truncate">
                        {listing.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600 text-xs">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{listing.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{listing.postedDays}d ago</span>
                      </div>
                    </div>
                  </div>

                  <button className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Edit className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Leads */}
        <div className="px-6 py-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3>Recent Leads</h3>
            <button className="text-primary text-sm">View All</button>
          </div>

          <div className="space-y-3">
            {recentLeads.map((lead) => (
              <Card
                key={lead.id}
                className={`p-4 border-0 shadow-sm ${
                  lead.unread ? "bg-blue-50" : "bg-white"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="truncate">{lead.name}</h4>
                      {lead.unread && (
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 ml-2" />
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-1">
                      {lead.propertyInterest}
                    </p>
                    <p className="text-sm text-gray-700 truncate mb-2">
                      {lead.message}
                    </p>
                    <p className="text-xs text-gray-500">{lead.time}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 shadow-lg">
        <div className="flex items-center justify-around">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "dashboard" ? "text-primary" : "text-gray-400"
            }`}
          >
            <LayoutDashboard className="w-6 h-6" />
            <span className="text-xs">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab("listings")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "listings" ? "text-primary" : "text-gray-400"
            }`}
          >
            <Building2 className="w-6 h-6" />
            <span className="text-xs">Listings</span>
          </button>
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex flex-col items-center gap-1 relative transition-colors ${
              activeTab === "leads" ? "text-primary" : "text-gray-400"
            }`}
          >
            <MessageSquare className="w-6 h-6" />
            <span className="text-xs">Leads</span>
            <div className="absolute -top-1 right-3 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "profile" ? "text-primary" : "text-gray-400"
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}