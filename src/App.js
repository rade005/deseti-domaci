//import './App.css';
import PayPal from "./PayPal";
import { createContext, useState } from "react";
import { Currencies } from "./Utils/CurrencyUtil";

export const CurrencyContext = createContext("USD");
export const AmountContext = createContext(0);

function App() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);

  // Funkcije za update stanja
  const updateCurrency = (value) => {
    setCurrency(value);
  };

  const updateAmount = (value) => {
    setAmount(value);
  };

  return (
      <>
        {/* Provideri samo oko Payment komponente */}
        <CurrencyContext.Provider value={{ currency, updateCurrency }}>
          <AmountContext.Provider value={{ amount, updateAmount }}>
            <PayPal />
          </AmountContext.Provider>
        </CurrencyContext.Provider>

        {/* Input i select su van providera, direktno u App */}
        <input
            type="number"
            value={amount}
            onChange={e => updateAmount(Number(e.target.value))}
            placeholder="Unesi iznos"
        />

        <select
            value={currency}
            onChange={e => updateCurrency(e.target.value)}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="NOK">NOK</option>
          <option value="SEK">SEK</option>
          <option value="DKK">DKK</option>
        </select>
      </>
  );
}

export default App;
