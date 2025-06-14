// src/pages/PaymentHistory.js
import React from 'react';

export default function PaymentHistory() {
  const history = [
    { date: 'May 3, 2025', amount: '$15.99', method: 'VISA •••• 5565' },
    { date: 'April 3, 2025', amount: '$15.99', method: 'VISA •••• 5565' },
    { date: 'March 3, 2025', amount: '$15.99', method: 'VISA •••• 5565' },
  ];

  return (
    <div className="text-white max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold border-b border-gray-700 pb-4">Payment History</h1>
      <ul className="space-y-4">
        {history.map((item, index) => (
          <li key={index} className="border-b border-gray-800 pb-2">
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Amount:</strong> {item.amount}</p>
            <p><strong>Payment Method:</strong> {item.method}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}