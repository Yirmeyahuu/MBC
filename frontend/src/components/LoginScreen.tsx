import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Building2 } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (userType: 'client' | 'agent') => void;
  onSwitchToRegister: () => void;
}

export function LoginScreen({ onLogin, onSwitchToRegister }: LoginScreenProps) {
  const [userType, setUserType] = useState<'client' | 'agent'>('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(userType);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="pt-16 pb-8 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-[#0056D2] flex items-center justify-center">
            <Building2 className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-[#0056D2] mb-2">Metro Bacolod Connect</h1>
        <p className="text-gray-600">Your Professional Real Estate Platform</p>
      </div>

      {/* Login Form */}
      <div className="flex-1 px-6">
        <form onSubmit={handleLogin} className="space-y-6">
          {/* User Type Toggle */}
          <div className="space-y-3">
            <Label className="text-gray-700">I am a</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserType('client')}
                className={`py-3 px-4 rounded-lg border-2 transition-all ${
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
                className={`py-3 px-4 rounded-lg border-2 transition-all ${
                  userType === 'agent'
                    ? 'border-[#0056D2] bg-[#0056D2]/5 text-[#0056D2]'
                    : 'border-gray-200 text-gray-600'
                }`}
              >
                Real Estate Agent
              </button>
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-lg border-gray-300"
              required
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 rounded-lg border-gray-300"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button type="button" className="text-[#0056D2] text-sm">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-[#0056D2] hover:bg-[#004aad] text-white rounded-lg"
          >
            Log In
          </Button>

          {/* Register Link */}
          <div className="text-center text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-[#0056D2]"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
