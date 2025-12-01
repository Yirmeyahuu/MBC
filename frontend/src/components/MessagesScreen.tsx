import React from 'react';

const conversations = [
  { name: 'Agent John Doe', message: 'Yes, the unit is still available for viewing.', time: '10:42 AM', unread: 2, avatar: 'https://i.pravatar.cc/150?img=68' },
  { name: 'Property Inquiries', message: 'You have a new inquiry about the Suburban Home.', time: '9:15 AM', unread: 0, avatar: 'https://i.pravatar.cc/150?img=60' },
  { name: 'Agent Mary Ann', message: 'Great! I will send you the documents shortly.', time: 'Yesterday', unread: 0, avatar: 'https://i.pravatar.cc/150?img=32' },
  { name: 'Metro Bacolod Connect', message: 'Welcome! How can we help you find your dream home?', time: 'Dec 28', unread: 0, avatar: 'https://cdn-icons-png.flaticon.com/512/993/993633.png' },
];

export function MessagesScreen() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-900 mb-4">Messages</h1>
        
        <div className="space-y-2">
          {conversations.map((convo) => (
            <div key={convo.name} className="flex items-start p-3 rounded-lg hover:bg-gray-50 cursor-pointer space-x-3">
              <img src={convo.avatar} alt={convo.name} className="w-10 h-10 rounded-full bg-gray-200 object-cover" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-gray-800">{convo.name}</p>
                  <p className="text-xs text-gray-400">{convo.time}</p>
                </div>
                <div className="flex justify-between items-start mt-0.5">
                  <p className="text-xs text-gray-500 truncate w-52">{convo.message}</p>
                  {convo.unread > 0 && (
                    <span className="bg-[#0056D2] text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                      {convo.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}