import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Label } from './ui/label';
import { Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';


interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (date: Date, time: string) => void;
}

export function MeetingModal({ isOpen, onClose, onConfirm }: MeetingModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleConfirm = () => {
    if (selectedDate) {
      onConfirm(selectedDate, selectedTime);
      setStep('success');
    }
  };


  const handleClose = () => {
    setTimeout(() => {
      setStep('form');
      setSelectedDate(new Date());
      setSelectedTime('10:00 AM');
    }, 200);
    onClose();
  };
  
  const onOpenChange = (open: boolean) => {
    if (!open) {
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm mx-auto bg-white p-6 rounded-2xl">
        {step === 'form' ? (
          <>
            <DialogHeader className="text-left">
              <DialogTitle className="text-xl font-bold text-gray-900">Schedule a Viewing</DialogTitle>
            </DialogHeader>

            <div className="space-y-6 pt-5">
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-800 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-gray-500" />
                  Select a Date
                </Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-xl border border-gray-200"
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                />
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  Select a Time
                </Label>
                <div className="grid grid-cols-3 gap-2.5">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-colors ${
                        selectedTime === time
                          ? 'bg-[#0056D2] border-[#0056D2] text-white'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={handleClose} className="flex-1 h-12">Cancel</Button>
                <Button onClick={handleConfirm} className="flex-1 bg-[#0056D2] hover:bg-[#004aad] text-white h-12" disabled={!selectedDate}>
                  Confirm Meeting
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-lg font-bold text-gray-900">Meeting Set!</h2>
            <p className="text-sm text-gray-600 mt-2 mb-4">Your viewing has been confirmed.</p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-left space-y-2">
                <p className="text-xs text-gray-500">Scheduled for:</p>
                <p className="font-semibold text-sm text-gray-800">
                  {selectedDate?.toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })} at {selectedTime}
                </p>
            </div>

            <p className="text-xs text-gray-500 mt-4 px-4">
              You will receive a confirmation email and a reminder shortly.
            </p>

            <Button onClick={handleClose} className="w-full bg-[#0056D2] hover:bg-[#004aad] text-white mt-6">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}