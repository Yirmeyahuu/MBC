import { useState } from 'react';
import { X, Upload, MapPin, Home, DollarSign, Bed, Bath, Maximize, Car, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface AddListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AddListingModal({ isOpen, onClose, onSuccess }: AddListingModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    type: 'House',
    beds: '',
    baths: '',
    sqft: '',
    parking: '',
    yearBuilt: '',
    description: '',
    status: 'Available',
  });

  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [newAmenity, setNewAmenity] = useState('');
  const [features, setFeatures] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState('');

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageUrls: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          imageUrls.push(reader.result as string);
          if (imageUrls.length === files.length) {
            setSelectedImages([...selectedImages, ...imageUrls]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const addAmenity = () => {
    if (newAmenity.trim() && !amenities.includes(newAmenity.trim())) {
      setAmenities([...amenities, newAmenity.trim()]);
      setNewAmenity('');
    }
  };

  const removeAmenity = (amenity: string) => {
    setAmenities(amenities.filter(a => a !== amenity));
  };

  const addFeature = () => {
    if (newFeature.trim() && !features.includes(newFeature.trim())) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature('');
    }
  };

  const removeFeature = (feature: string) => {
    setFeatures(features.filter(f => f !== feature));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({
      ...formData,
      images: selectedImages,
      amenities,
      features,
    });
    onSuccess();
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      title: '',
      price: '',
      location: '',
      type: 'House',
      beds: '',
      baths: '',
      sqft: '',
      parking: '',
      yearBuilt: '',
      description: '',
      status: 'Available',
    });
    setSelectedImages([]);
    setAmenities([]);
    setFeatures([]);
    setNewAmenity('');
    setNewFeature('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Add New Listing</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Property Images
              </label>
              <div className="grid grid-cols-3 gap-3 mb-3">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Property ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0056D2] hover:bg-gray-50 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900">Basic Information</h3>
              
              <div>
                <label className="block text-sm text-gray-700 mb-1">Property Title *</label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Modern Luxury Penthouse"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Price *</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="₱12,500,000"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Property Type *</label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056D2]/50 focus:border-[#0056D2] outline-none"
                  >
                    <option value="House">House</option>
                    <option value="Condominium">Condominium</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Studio">Studio</option>
                    <option value="Loft">Loft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Location *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., Bacolod City Center"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056D2]/50 focus:border-[#0056D2] outline-none"
                >
                  <option value="Available">Available</option>
                  <option value="Reserved">Reserved</option>
                  <option value="Sold">Sold</option>
                </select>
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900">Property Details</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Bedrooms</label>
                  <div className="relative">
                    <Bed className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="number"
                      value={formData.beds}
                      onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                      placeholder="3"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Bathrooms</label>
                  <div className="relative">
                    <Bath className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="number"
                      value={formData.baths}
                      onChange={(e) => setFormData({ ...formData, baths: e.target.value })}
                      placeholder="2"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Floor Area (m²)</label>
                  <div className="relative">
                    <Maximize className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="number"
                      value={formData.sqft}
                      onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                      placeholder="150"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Parking Spaces</label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="number"
                      value={formData.parking}
                      onChange={(e) => setFormData({ ...formData, parking: e.target.value })}
                      placeholder="2"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Year Built</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="number"
                    value={formData.yearBuilt}
                    onChange={(e) => setFormData({ ...formData, yearBuilt: e.target.value })}
                    placeholder="2023"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the property..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056D2]/50 focus:border-[#0056D2] outline-none resize-none"
              />
            </div>

            {/* Amenities */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Amenities</label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={newAmenity}
                  onChange={(e) => setNewAmenity(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAmenity())}
                  placeholder="Add amenity (e.g., Swimming Pool)"
                />
                <Button type="button" onClick={addAmenity} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity) => (
                  <Badge key={amenity} className="bg-[#0056D2]/10 text-[#0056D2] border-0 flex items-center gap-1">
                    {amenity}
                    <button type="button" onClick={() => removeAmenity(amenity)} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Features</label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                  placeholder="Add feature (e.g., Smart Home System)"
                />
                <Button type="button" onClick={addFeature} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {features.map((feature) => (
                  <Badge key={feature} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200 flex items-center gap-1">
                    {feature}
                    <button type="button" onClick={() => removeFeature(feature)} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-gray-200">
          <Button type="button" onClick={onClose} variant="outline" className="flex-1">
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            className="flex-1 bg-[#0056D2] hover:bg-[#004aad] text-white"
          >
            Add Listing
          </Button>
        </div>
      </div>
    </div>
  );
}