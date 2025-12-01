import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Send, Paperclip, Image as ImageIcon, Phone, Video } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'agent';
  timestamp: string;
  type?: 'text' | 'image';
  imageUrl?: string;
}

interface ChatConversationProps {
  agentName: string;
  agentAvatar: string;
  onBack: () => void;
}

export function ChatConversation({ agentName, agentAvatar, onBack }: ChatConversationProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm interested in the Modern Luxury Penthouse. Is it still available?",
      sender: 'me',
      timestamp: '10:30 AM',
      type: 'text'
    },
    {
      id: 2,
      text: "Yes, it's still available! Would you like to schedule a viewing?",
      sender: 'agent',
      timestamp: '10:32 AM',
      type: 'text'
    },
    {
      id: 3,
      text: "That would be great! What times are available this week?",
      sender: 'me',
      timestamp: '10:33 AM',
      type: 'text'
    },
    {
      id: 4,
      text: "I have openings on Tuesday and Thursday afternoon. Which day works better for you?",
      sender: 'agent',
      timestamp: '10:35 AM',
      type: 'text'
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        type: 'text'
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3 flex-1">
          <button
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            <ImageWithFallback
              src={agentAvatar}
              alt={agentName}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-sm font-semibold text-gray-900">{agentName}</h2>
            <p className="text-xs text-green-600">Active now</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <Phone className="w-5 h-5 text-gray-700" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <Video className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-24">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-[75%] ${message.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
              {message.sender === 'agent' && (
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <ImageWithFallback
                    src={agentAvatar}
                    alt={agentName}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="flex flex-col">
                <div
                  className={`rounded-2xl px-4 py-2 ${
                    message.sender === 'me'
                      ? 'bg-[#0056D2] text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                  }`}
                >
                  {message.type === 'image' && message.imageUrl && (
                    <img src={message.imageUrl} alt="Shared" className="rounded-lg mb-2 max-w-full" />
                  )}
                  <p className="text-sm">{message.text}</p>
                </div>
                <p className={`text-xs text-gray-400 mt-1 ${message.sender === 'me' ? 'text-right' : 'text-left'}`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <Paperclip className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
            <ImageIcon className="w-5 h-5 text-gray-600" />
          </button>

          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 rounded-full border-gray-300 focus:border-[#0056D2] focus:ring-[#0056D2]"
          />

          <Button
            onClick={handleSendMessage}
            className="w-9 h-9 rounded-full bg-[#0056D2] hover:bg-[#004aad] p-0"
            disabled={!newMessage.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}