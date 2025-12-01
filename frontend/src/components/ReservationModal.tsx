import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
  propertyPrice: string;
}

export function ReservationModal({ isOpen, onClose, propertyTitle, propertyPrice }: ReservationModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    moveInDate: ''
  });
  const [confirmationCode, setConfirmationCode] = useState('');

  // Calculate costs
  const propertyPriceNum = parseFloat(propertyPrice.replace(/[₱,]/g, ''));
  const reservationFee = propertyPriceNum * 0.05; // 5% reservation fee
  const processingFee = 5000;
  const total = reservationFee + processingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate and set a stable confirmation code
    const newCode = `MBC-${Math.random().toString(36).substring(2, 11).toUpperCase()}`;
    setConfirmationCode(newCode);
    setStep('success');
  };

  const handleClose = () => {
    // Delay state reset to allow for closing animation
    setTimeout(() => {
      setStep('form');
      setFormData({ fullName: '', email: '', phone: '', moveInDate: '' });
      setConfirmationCode('');
    }, 200);
    onClose();
  };
  
  // Use a different handler for onOpenChange to prevent immediate reset
  const onOpenChange = (open: boolean) => {
    if (!open) {
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm mx-auto max-h-[90vh] overflow-y-auto bg-white p-6">
        {step === 'form' ? (
          <>
            <DialogHeader className="text-left">
              <DialogTitle className="text-lg text-gray-900">Make Reservation</DialogTitle>
              <p className="text-sm text-gray-600 pt-1">{propertyTitle}</p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-700 text-sm">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="h-11 text-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 text-sm">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-11 text-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 text-sm">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+63 XXX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-11 text-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="moveInDate" className="text-gray-700 text-sm">Preferred Move-in Date</Label>
                <Input
                  id="moveInDate"
                  type="date"
                  value={formData.moveInDate}
                  onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                  className="h-11 text-sm"
                  required
                />
              </div>

              {/* Cost Breakdown */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2.5">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">Cost Summary</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Property Price</span>
                  <span className="font-medium text-gray-800">{propertyPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Reservation Fee (5%)</span>
                  <span className="font-medium text-gray-800">₱{reservationFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-medium text-gray-800">₱{processingFee.toLocaleString()}</span>
                </div>
                <div className="pt-3 mt-1 border-t border-gray-200 flex justify-between">
                  <span className="font-semibold text-gray-900">Total Due Now</span>
                  <span className="font-bold text-[#0056D2]">₱{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-[#0056D2] hover:bg-[#004aad] text-white">
                  Confirm Reservation
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-lg font-bold text-gray-900">Reservation Complete!</h2>

            <div className="py-4 space-y-4">
              <p className="text-center text-gray-600 text-sm">
                Your reservation for <span className="font-semibold text-gray-800">{propertyTitle}</span> has been confirmed.
              </p>

              <div className="bg-[#0056D2]/5 border border-[#0056D2]/20 text-left rounded-lg p-4 space-y-3">
                <div className="text-sm">
                  <p className="text-gray-600">Confirmation Code:</p>
                  <p className="font-semibold text-[#0056D2] tracking-wider">{confirmationCode}</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-600">Amount Paid:</p>
                  <p className="font-semibold text-[#0056D2]">₱{total.toLocaleString()}</p>
                </div>
              </div>

              <p className="text-xs text-gray-500 px-4">
                You will receive an email with further instructions. Please save your confirmation code.
              </p>

              <Button onClick={handleClose} className="w-full bg-[#0056D2] hover:bg-[#004aad] text-white mt-4">
                Done
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}