import React from 'react';
import { Home, Search, MessageCircle, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'search' | 'messages' | 'profile';
  onTabChange: (tab: 'home' | 'search' | 'messages' | 'profile') => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home' as const, icon: Home, label: 'Home' },
    { id: 'search' as const, icon: Search, label: 'Search' },
    { id: 'messages' as const, icon: MessageCircle, label: 'Messages' },
    { id: 'profile' as const, icon: User, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-around px-2 py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center flex-1 py-2 px-3 rounded-lg transition-colors ${
                  isActive ? 'text-[#0056D2]' : 'text-gray-500'
                }`}
              >
                <Icon className={`w-6 h-6 mb-1 ${isActive ? 'fill-current' : ''}`} />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
