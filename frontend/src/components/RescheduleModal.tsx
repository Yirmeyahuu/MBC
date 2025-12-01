import { useState } from 'react';
import { X, Calendar, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface RescheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  appointment: {
    id: number;
    client: string;
    property: string;
    date: string;
    time: string;
    type: string;
  };
}

export function RescheduleModal({ isOpen, onClose, onSuccess, appointment }: RescheduleModalProps) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({
      appointmentId: appointment.id,
      ...formData,
    });
    onSuccess();
    setFormData({ date: '', time: '', reason: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-md overflow-hidden flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Reschedule Appointment</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Current Appointment Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Current Appointment</h3>
              <div className="space-y-1 text-sm">
                <p className="text-gray-700">
                  <span className="font-medium">Client:</span> {appointment.client}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Property:</span> {appointment.property}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Type:</span> {appointment.type}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Current Date:</span> {appointment.date} at {appointment.time}
                </p>
              </div>
            </div>

            {/* New Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="pl-10"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {/* New Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Time *
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Rescheduling (Optional)
              </label>
              <textarea
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                placeholder="Enter reason for rescheduling..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0056D2]/50 focus:border-[#0056D2] outline-none resize-none text-sm"
              />
            </div>

            {/* Info Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-800">
                <span className="font-medium">Note:</span> The client will be automatically notified about the reschedule request via email and SMS.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-3 mt-6">
            <Button 
              type="button" 
              onClick={onClose} 
              variant="outline" 
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 bg-[#0056D2] hover:bg-[#004aad] text-white"
            >
              Confirm Reschedule
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}