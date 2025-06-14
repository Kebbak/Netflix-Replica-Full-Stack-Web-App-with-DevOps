import React from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/payment-success',
      },
    });

    if (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
        Subscribe Now
      </button>
    </form>
  );
}

export default CheckoutForm;