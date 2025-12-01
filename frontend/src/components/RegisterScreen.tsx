import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Building2, Upload } from 'lucide-react';

interface RegisterScreenProps {
  onRegister: (userType: 'client' | 'agent') => void;
  onSwitchToLogin: () => void;
}

export function RegisterScreen({ onRegister, onSwitchToLogin }: RegisterScreenProps) {
  const [userType, setUserType] = useState<'client' | 'agent'>('client');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    prcLicense: '',
    agencyName: ''
  });
  const [licenseFile, setLicenseFile] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(userType);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col pb-6">
      {/* Header */}
      <div className="pt-12 pb-6 px-6 text-center">
        <div className="flex justify-center mb-3">
          <div className="w-14 h-14 rounded-2xl bg-[#0056D2] flex items-center justify-center">
            <Building2 className="w-7 h-7 text-white" />
          </div>
        </div>
        <h1 className="text-[#0056D2] mb-1">Create Account</h1>
        <p className="text-gray-600 text-sm">Join Metro Bacolod Connect</p>
      </div>

      {/* Registration Form */}
      <div className="flex-1 px-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* User Type Toggle */}
          <div className="space-y-2">
            <Label className="text-gray-700">I am a</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserType('client')}
                className={`py-2.5 px-4 rounded-lg border-2 transition-all text-sm ${
                  userType === 'client'
                    ? 'border-[#0056D2] bg-[#0056D2]/5 text-[#0056D2]'
                    : 'border-gray-200 text-gray-600'
                }`}
              >
                Client
              </button>
              <button
                type="button"
                onClick={() => setUserType('agent')}
                className={`py-2.5 px-4 rounded-lg border-2 transition-all text-sm ${
                  userType === 'agent'
                    ? 'border-[#0056D2] bg-[#0056D2]/5 text-[#0056D2]'
                    : 'border-gray-200 text-gray-600'
                }`}
              >
                Real Estate Agent
              </button>
            </div>
          </div>

          {/* Full Name */}
          <div className="space-y-1.5">
            <Label htmlFor="fullName" className="text-gray-700 text-sm">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="h-11 rounded-lg border-gray-300"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-gray-700 text-sm">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="h-11 rounded-lg border-gray-300"
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-gray-700 text-sm">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+63 XXX XXX XXXX"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="h-11 rounded-lg border-gray-300"
              required
            />
          </div>

          {/* Agent-Specific Fields */}
          {userType === 'agent' && (
            <>
              <div className="space-y-1.5">
                <Label htmlFor="prcLicense" className="text-gray-700 text-sm">PRC License Number</Label>
                <Input
                  id="prcLicense"
                  type="text"
                  placeholder="Enter PRC license number"
                  value={formData.prcLicense}
                  onChange={(e) => handleChange('prcLicense', e.target.value)}
                  className="h-11 rounded-lg border-gray-300"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="agencyName" className="text-gray-700 text-sm">Agency Name</Label>
                <Input
                  id="agencyName"
                  type="text"
                  placeholder="Enter your agency name"
                  value={formData.agencyName}
                  onChange={(e) => handleChange('agencyName', e.target.value)}
                  className="h-11 rounded-lg border-gray-300"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-gray-700 text-sm">Upload PRC License Document</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, JPG, or PNG (max. 5MB)</p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    id="license-upload"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setLicenseFile(e.target.files[0].name);
                      }
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-3 text-sm"
                    onClick={() => document.getElementById('license-upload')?.click()}
                  >
                    Choose File
                  </Button>
                  {licenseFile && (
                    <p className="text-sm text-[#0056D2] mt-2">{licenseFile}</p>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Password */}
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-gray-700 text-sm">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="h-11 rounded-lg border-gray-300"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <Label htmlFor="confirmPassword" className="text-gray-700 text-sm">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              className="h-11 rounded-lg border-gray-300"
              required
            />
          </div>

          {/* Register Button */}
          <Button
            type="submit"
            className="w-full h-11 bg-[#0056D2] hover:bg-[#004aad] text-white rounded-lg mt-6"
          >
            Create Account
          </Button>

          {/* Login Link */}
          <div className="text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-[#0056D2]"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
