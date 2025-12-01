import { User, Heart, Settings, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

const menuItems = [
  { icon: User, text: 'Account Information' },
  { icon: Heart, text: 'Favorites' },
  { icon: Settings, text: 'Settings' },
  { icon: HelpCircle, text: 'Help Center' },
];

export function ProfileScreen() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="p-4 space-y-5">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <img src="https://i.pravatar.cc/150?img=5" alt="Profile" className="w-14 h-14 rounded-full bg-gray-300 object-cover" />
          <div>
            <h1 className="text-lg font-bold text-gray-900">Jeremiah Pantaras</h1>
            <p className="text-xs text-gray-600">jeremiah.client@email.com</p>
          </div>
        </div>
        
        {/* Menu */}
        <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button key={item.text} className="w-full flex items-center justify-between p-3.5 text-left hover:bg-gray-50">
                <div className="flex items-center">
                  <Icon className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="text-sm text-gray-800">{item.text}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            );
          })}
        </div>
        
        {/* Logout Button */}
        <div className="bg-white rounded-lg border border-gray-200">
           <button className="w-full flex items-center p-3.5 text-left text-red-600 hover:bg-red-50">
             <LogOut className="w-5 h-5 mr-3" />
             <span className="text-sm">Logout</span>
           </button>
        </div>
      </div>
    </div>
  );
}