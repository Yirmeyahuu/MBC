import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { ClientHome } from './components/ClientHome';
import { PropertyDetails } from './components/PropertyDetails';
import { AgentDashboard } from './components/AgentDashboard';
import { BottomNav } from './components/BottomNav';
import { MeetingModal } from './components/MeetingModal';
import {ReservationModal} from './components/ReservationModal';
import { toast, Toaster } from 'sonner';
import { SearchScreen } from './components/SearchScreen';
import { MessagesScreen } from './components/MessagesScreen';
import { ProfileScreen } from './components/ProfileScreen';ProfileScreen

type Screen = 
  | 'login'
  | 'register' 
  | 'client-home' 
  | 'property-details' 
  | 'agent-dashboard'
  | 'search'
  | 'messages'
  | 'profile';

type UserType = 'client' | 'agent' | null;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [userType, setUserType] = useState<UserType>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'search' | 'messages' | 'profile'>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  // Handle login
  const handleLogin = (type: 'client' | 'agent') => {
    setUserType(type);
    if (type === 'client') {
      setCurrentScreen('client-home');
    } else {
      setCurrentScreen('agent-dashboard');
    }
    toast.success(`Welcome back! Logged in as ${type === 'client' ? 'Client' : 'Agent'}`);
  };

  // Handle registration
  const handleRegister = (type: 'client' | 'agent') => {
    setUserType(type);
    if (type === 'client') {
      setCurrentScreen('client-home');
    } else {
      setCurrentScreen('agent-dashboard');
    }
    toast.success(`Account created successfully! Welcome to Metro Bacolod Connect`);
  };

  // Handle property click
  const handlePropertyClick = (propertyId: number) => {
    setSelectedPropertyId(propertyId);
    setCurrentScreen('property-details');
  };

  // Handle back from property details
  const handleBackFromProperty = () => {
    if (userType === 'client') {
      setCurrentScreen('client-home');
    } else {
      setCurrentScreen('agent-dashboard');
    }
  };

  // Handle inquire
  const handleInquire = () => {
    setIsMeetingModalOpen(true);
  };

  // Handle reserve
  const handleReserve = () => {
    setIsReservationModalOpen(true);
  };

  // Handle meeting confirmation
  const handleMeetingConfirm = (date: Date, time: string) => {
    toast.success(`Meeting scheduled for ${date.toLocaleDateString()} at ${time}`);
  };

  // Handle bottom nav tab change
  const handleTabChange = (tab: 'home' | 'search' | 'messages' | 'profile') => {
    setActiveTab(tab);
    
    if (tab === 'home') {
      if (userType === 'client') {
        setCurrentScreen('client-home');
      } else {
        setCurrentScreen('agent-dashboard');
      }
    } else {
      setCurrentScreen(tab);
    }
  };

  // Check if bottom nav should be shown
  const showBottomNav = 
    currentScreen !== 'login' && 
    currentScreen !== 'register' && 
    currentScreen !== 'property-details';

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl relative">
        {/* Render current screen */}
        {currentScreen === 'login' && (
          <LoginScreen
            onLogin={handleLogin}
            onSwitchToRegister={() => setCurrentScreen('register')}
          />
        )}

        {currentScreen === 'register' && (
          <RegisterScreen
            onRegister={handleRegister}
            onSwitchToLogin={() => setCurrentScreen('login')}
          />
        )}

        {currentScreen === 'client-home' && userType === 'client' && (
          <ClientHome onPropertyClick={handlePropertyClick} />
        )}

        {currentScreen === 'property-details' && selectedPropertyId && (
          <PropertyDetails
            propertyId={selectedPropertyId}
            onBack={handleBackFromProperty}
            onInquire={handleInquire}
            onReserve={handleReserve}
          />
        )}

        {currentScreen === 'agent-dashboard' && userType === 'agent' && (
          <AgentDashboard onPropertyClick={handlePropertyClick} />
        )}

        {currentScreen === 'search' && <SearchScreen />}
        {currentScreen === 'messages' && <MessagesScreen />}
        {currentScreen === 'profile' && <ProfileScreen />}

        {/* Bottom Navigation */}
        {showBottomNav && (
          <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
        )}

        {/* Modals */}
        <MeetingModal
          isOpen={isMeetingModalOpen}
          onClose={() => setIsMeetingModalOpen(false)}
          onConfirm={handleMeetingConfirm}
        />

        <ReservationModal
          isOpen={isReservationModalOpen}
          onClose={() => setIsReservationModalOpen(false)}
          propertyTitle="Modern Luxury Penthouse"
          propertyPrice="₱12,500,000"
        />
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-center" richColors />
    </div>
  );
}