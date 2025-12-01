import { X, Phone, Mail, Award, Building2, Calendar, MapPin, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AgentInfo {
  name: string;
  phone: string;
  email: string;
  photo: string;
  prcLicense: string;
  yearsExperience: number;
  specialization: string[];
  totalSales: number;
  officeLocation: string;
  bio: string;
}

interface AgentModalProps {
  agent: AgentInfo;
  isOpen: boolean;
  onClose: () => void;
  onMessage?: () => void; // Add callback for message action
}

export function AgentModal({ agent, isOpen, onClose, onMessage }: AgentModalProps) {
  if (!isOpen) return null;

  const handleMessageClick = () => {
    if (onMessage) {
      onMessage();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Agent Photo & Header */}
        <div className="bg-gradient-to-br from-[#0056D2] to-[#004aad] px-6 pt-8 pb-20">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden mb-3">
              <ImageWithFallback
                src={agent.photo}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-white text-xl mb-1">{agent.name}</h2>
            <p className="text-white/80 text-sm">Licensed Real Estate Agent</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 -mt-16">
          {/* PRC License Card */}
          <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-[#0056D2] mr-2" />
                <h3 className="text-gray-900 font-medium">PRC License</h3>
              </div>
              <Badge className="bg-green-100 text-green-700 border-0">Verified</Badge>
            </div>
            <p className="text-2xl font-mono text-gray-900">{agent.prcLicense}</p>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <h3 className="text-gray-900 mb-2">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{agent.bio}</p>
          </div>

          {/* Experience & Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <Calendar className="w-5 h-5 text-[#0056D2] mb-2" />
              <p className="text-2xl text-gray-900 mb-1">{agent.yearsExperience}</p>
              <p className="text-xs text-gray-600">Years Experience</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <Building2 className="w-5 h-5 text-[#0056D2] mb-2" />
              <p className="text-2xl text-gray-900 mb-1">{agent.totalSales}</p>
              <p className="text-xs text-gray-600">Properties Sold</p>
            </div>
          </div>

          {/* Specialization */}
          <div className="mb-6">
            <h3 className="text-gray-900 mb-3">Specialization</h3>
            <div className="flex flex-wrap gap-2">
              {agent.specialization.map((spec, index) => (
                <Badge key={index} variant="outline" className="bg-[#0056D2]/5 text-[#0056D2] border-[#0056D2]/20">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>

          {/* Office Location */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-gray-900 text-sm mb-1">Office Location</h3>
                <p className="text-gray-600 text-sm">{agent.officeLocation}</p>
              </div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-3 pb-6">
            <Button 
              onClick={handleMessageClick}
              className="w-full bg-[#0056D2] hover:bg-[#004aad] text-white h-12"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            
            <a href={`tel:${agent.phone}`} className="block">
              <Button variant="outline" className="w-full h-12">
                <Phone className="w-4 h-4 mr-2" />
                Call {agent.phone}
              </Button>
            </a>
            
            <a href={`mailto:${agent.email}`} className="block">
              <Button variant="outline" className="w-full h-12">
                <Mail className="w-4 h-4 mr-2" />
                Email Agent
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}