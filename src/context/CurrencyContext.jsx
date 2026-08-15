import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('USD');

  const toggleCurrency = (newCurrency) => {
    setCurrency(newCurrency);
  };

  const formatPrice = (usdAmount, kesAmount) => {
    if (currency === 'KES') {
      return `KES ${Number(kesAmount).toLocaleString()}`;
    }
    return `USD ${Number(usdAmount).toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
