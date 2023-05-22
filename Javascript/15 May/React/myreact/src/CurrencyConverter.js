import React, { useState } from 'react';

function CurrencyConverter() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const convertCurrency = () => {
        // API call or conversion logic goes here
        // You can use a currency conversion API like Open Exchange Rates or fixer.io

        // For demonstration purposes, let's assume the conversion rate is 0.85 (1 USD = 0.85 EUR)
        const conversionRate = 0.85;
        const result = amount * conversionRate;
        setConvertedAmount(result.toFixed(2));
    };

    return (
        <div>
            <h1>Currency Converter</h1>
            <div>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div>
                <label>From Currency:</label>
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}> <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    {/* Add more currency options as needed */}
                </select>
            </div>
            <div>
                <label>To Currency:</label>
                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    {/* Add more currency options as needed */}
                </select>
            </div>
            <button onClick={convertCurrency}>Convert</button>
            <div>
                <h2>Converted Amount:</h2>
                <p>{convertedAmount}</p>
            </div>
        </div>
    );
}

export default CurrencyConverter;