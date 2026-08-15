import React, { createContext, useContext, useState } from 'react';

const TripBuilderContext = createContext();

export function TripBuilderProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [quizData, setQuizData] = useState({
    interest: '',
    startDate: '',
    endDate: '',
    durationDays: 7,
    groupSize: '',
    accommodation: '',
    budgetAmount: '',
    customItinerary: '',
    transferType: 'Airport Transfer',
    transferRoute: '',
    transferVehicle: '4x4 Safari Land Cruiser',
    corporateType: 'Executive Retreat',
    delegatesCount: '10-20 Delegates',
    notes: ''
  });

  const openDrawer = (initialInterest = '') => {
    if (initialInterest) {
      setQuizData(prev => ({ ...prev, interest: initialInterest }));
      setActiveStep(2);
    } else {
      setActiveStep(1);
    }
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const resetQuiz = () => {
    setQuizData({
      interest: '',
      startDate: '',
      endDate: '',
      durationDays: 7,
      groupSize: '',
      accommodation: '',
      budgetAmount: '',
      customItinerary: '',
      transferType: 'Airport Transfer',
      transferRoute: '',
      transferVehicle: '4x4 Safari Land Cruiser',
      corporateType: 'Executive Retreat',
      delegatesCount: '10-20 Delegates',
      notes: ''
    });
    setActiveStep(1);
  };

  const updateQuizData = (fields) => {
    setQuizData(prev => ({ ...prev, ...fields }));
  };

  const submitToWhatsapp = () => {
    let message = '';

    if (quizData.interest === 'Transfers & Ticketing') {
      message = `🦁 *SAFARI DIRECT KENYA — TRANSFER & TICKETING INQUIRY*\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📍 *Service Category:* ${quizData.transferType || 'Transfer / Ticketing'}\n` +
        `🛣️ *Pickup & Destination:* ${quizData.transferRoute || 'Not specified'}\n` +
        `📅 *Travel Date:* ${quizData.startDate || 'Flexible'}\n` +
        `🚘 *Vehicle / Flight Class:* ${quizData.transferVehicle || '4x4 Safari Land Cruiser'}\n` +
        `👥 *Passenger Count:* ${quizData.groupSize || 'Not specified'}\n` +
        (quizData.notes ? `📝 *Flight / Train Details:* ${quizData.notes}\n` : '') +
        `\n━━━━━━━━━━━━━━━━━━━━━━\n` +
        `✨ *Hello! Could you please provide availability and a direct price quote? Thank you!*`;
    } else if (quizData.interest === 'Corporate Travel') {
      message = `👔 *SAFARI DIRECT KENYA — CORPORATE TRAVEL INQUIRY*\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `🏢 *Event Type:* ${quizData.corporateType || 'Corporate Event'}\n` +
        `👥 *Delegates / Attendees:* ${quizData.delegatesCount || 'Not specified'}\n` +
        `📅 *Target Travel Date:* ${quizData.startDate || 'Flexible'}\n` +
        `💰 *Estimated Budget:* ${quizData.budgetAmount || 'Flexible'}\n` +
        (quizData.notes ? `📝 *Logistics / AV Requirements:* ${quizData.notes}\n` : '') +
        `\n━━━━━━━━━━━━━━━━━━━━━━\n` +
        `✨ *Hello! I'd like to request a corporate safari proposal. Could you connect me with your travel coordinator?*`;
    } else {
      const datesStr = quizData.startDate && quizData.endDate
        ? `${quizData.startDate} to ${quizData.endDate} (${quizData.durationDays} Days / ${Math.max(1, quizData.durationDays - 1)} Nights)`
        : (quizData.startDate || 'Flexible Travel');

      message = `🌍 *SAFARI DIRECT KENYA — BESPOKE SAFARI INQUIRY*\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📍 *Destination / Interest:* ${quizData.interest || 'Kenya Safari Adventure'}\n` +
        `🗓️ *Travel Dates & Stay:* ${datesStr}\n` +
        `👥 *Travelers / Group:* ${quizData.groupSize || 'Not specified'}\n` +
        `⛺ *Accommodation Style:* ${quizData.accommodation || 'Flexible'}\n` +
        (quizData.budgetAmount ? `💰 *Target Budget:* ${quizData.budgetAmount}\n` : '') +
        (quizData.notes ? `📝 *Special Requests:* ${quizData.notes}\n` : '') +
        `\n━━━━━━━━━━━━━━━━━━━━━━\n` +
        `✨ *Jambo! I would like to consult with a licensed driver-guide to finalize a 100% custom safari itinerary. Asante!*`;
    }

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/254718396228?text=${encoded}`;
    window.open(waUrl, '_blank');
    closeDrawer();
  };

  return (
    <TripBuilderContext.Provider value={{
      isOpen,
      activeStep,
      setActiveStep,
      quizData,
      openDrawer,
      closeDrawer,
      resetQuiz,
      updateQuizData,
      submitToWhatsapp
    }}>
      {children}
    </TripBuilderContext.Provider>
  );
}

export function useTripBuilder() {
  const context = useContext(TripBuilderContext);
  if (!context) {
    throw new Error('useTripBuilder must be used within a TripBuilderProvider');
  }
  return context;
}
