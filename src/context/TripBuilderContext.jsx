import React, { createContext, useContext, useState } from 'react';

const TripBuilderContext = createContext();

export function TripBuilderProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [quizData, setQuizData] = useState({
    country: 'Kenya',
    interest: 'Kenya',
    selectedPlaces: ['Maasai Mara', 'Amboseli'],
    itineraryType: 'Classic Wildlife Safari',
    startDate: '',
    endDate: '',
    durationDays: 7,
    isFlexible: false,
    groupSize: 'Couple',
    accommodation: 'Luxury Tented Camps',
    budgetAmount: '',
    notes: ''
  });

  const openDrawer = (initialInterest = '') => {
    if (initialInterest) {
      setQuizData(prev => ({ 
        ...prev, 
        country: initialInterest.includes('Tanzania') ? 'Tanzania' : 'Kenya',
        interest: initialInterest 
      }));
      setActiveStep(4);
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
      country: 'Kenya',
      interest: 'Kenya',
      selectedPlaces: ['Maasai Mara', 'Amboseli'],
      itineraryType: 'Classic Wildlife Safari',
      startDate: '',
      endDate: '',
      durationDays: 7,
      isFlexible: false,
      groupSize: 'Couple',
      accommodation: 'Luxury Tented Camps',
      budgetAmount: '',
      notes: ''
    });
    setActiveStep(1);
  };

  const updateQuizData = (fields) => {
    setQuizData(prev => ({ ...prev, ...fields }));
  };

  const submitToWhatsapp = () => {
    const countryStr = quizData.country || quizData.interest || 'Kenya';
    const placesStr = Array.isArray(quizData.selectedPlaces) && quizData.selectedPlaces.length > 0
      ? quizData.selectedPlaces.join(', ')
      : (quizData.interest || 'Open to recommendations');

    const datesStr = quizData.startDate && quizData.endDate
      ? `${quizData.startDate} – ${quizData.endDate} (${quizData.durationDays} Days / ${Math.max(1, quizData.durationDays - 1)} Nights)`
      : (quizData.startDate || 'Flexible dates (planning ahead)');

    const groupStr = quizData.groupSize || 'Couple (2 travelers)';

    let message = `Hello Enkop Safaris,\n\n` +
      `I am planning a trip to ${countryStr} and would like to consult with your team on a tailored itinerary.\n\n` +
      `• Country: ${countryStr}\n` +
      `• Places of Interest: ${placesStr}\n` +
      `• Travel Dates: ${datesStr}\n` +
      `• Traveling Party: ${groupStr}\n`;

    if (quizData.accommodation) {
      message += `• Accommodation Style: ${quizData.accommodation}\n`;
    }

    if (quizData.notes && quizData.notes.trim()) {
      message += `\nSpecial Requests / Notes:\n"${quizData.notes.trim()}"\n`;
    }

    message += `\nCould you please share your recommended routing, availability, and next steps? Looking forward to hearing from you.`;

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
