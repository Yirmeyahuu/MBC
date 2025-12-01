import { ImageWithFallback } from './figma/ImageWithFallback';

interface Conversation {
  id: string;
  name: string;
  message: string;
  time: string;
  unread: number;
  avatar: string;
  email: string;
}

const conversations: Conversation[] = [
  { 
    id: '1',
    name: 'Agent John Doe', 
    message: 'Yes, the unit is still available for viewing.', 
    time: '10:42 AM', 
    unread: 2, 
    avatar: 'https://i.pravatar.cc/150?img=68',
    email: 'john.doe@mbc.com'
  },
  { 
    id: '2',
    name: 'Property Inquiries', 
    message: 'You have a new inquiry about the Suburban Home.', 
    time: '9:15 AM', 
    unread: 0, 
    avatar: 'https://i.pravatar.cc/150?img=60',
    email: 'inquiries@mbc.com'
  },
  { 
    id: '3',
    name: 'Agent Mary Ann', 
    message: 'Great! I will send you the documents shortly.', 
    time: 'Yesterday', 
    unread: 0, 
    avatar: 'https://i.pravatar.cc/150?img=32',
    email: 'mary.ann@mbc.com'
  },
  { 
    id: '4',
    name: 'Metro Bacolod Connect', 
    message: 'Welcome! How can we help you find your dream home?', 
    time: 'Dec 28', 
    unread: 0, 
    avatar: 'https://cdn-icons-png.flaticon.com/512/993/993633.png',
    email: 'support@mbc.com'
  },
];

interface MessagesScreenProps {
  selectedAgentEmail?: string | null;
  onConversationClick?: (conversation: Conversation) => void;
}

export function MessagesScreen({ selectedAgentEmail, onConversationClick }: MessagesScreenProps) {
  // If an agent email is provided, find and auto-open that conversation
  const handleConversationClick = (convo: Conversation) => {
    if (onConversationClick) {
      onConversationClick(convo);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-900 mb-4">Messages</h1>
        
        <div className="space-y-2">
          {conversations.map((convo) => (
            <div 
              key={convo.id} 
              onClick={() => handleConversationClick(convo)}
              className="flex items-start p-3 rounded-lg hover:bg-gray-50 cursor-pointer space-x-3 transition-colors"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <ImageWithFallback 
                  src={convo.avatar} 
                  alt={convo.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-gray-800 truncate">{convo.name}</p>
                  <p className="text-xs text-gray-400 flex-shrink-0 ml-2">{convo.time}</p>
                </div>
                <div className="flex justify-between items-start mt-0.5">
                  <p className="text-xs text-gray-500 truncate flex-1 pr-2">{convo.message}</p>
                  {convo.unread > 0 && (
                    <span className="bg-[#0056D2] text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full flex-shrink-0">
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