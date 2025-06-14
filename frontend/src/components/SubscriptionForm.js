import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../api/axios';
import { useState } from 'react';
export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [priceId, setPriceId] = useState('price_basic_id'); // from Stripe dashboard
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async e => {
    e.preventDefault();
    const { paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: { email }
    });
    const res = await axios.post('/create-subscription', {
      paymentMethodId: paymentMethod.id,
      email,
      priceId
    });
    const confirm = await stripe.confirmCardPayment(res.data.clientSecret);
    if (confirm.error) alert(confirm.error.message);
    else alert('Subscription successful!');
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className="block w-full p-2 border rounded"/>
      <select onChange={e => setPriceId(e.target.value)} className="block w-full p-2 border rounded">
        <option value="price_basic_id">Basic - $5/mo</option>
        <option value="price_premium_id">Premium - $15/mo</option>
      </select>
      <CardElement className="p-2 border rounded" />
      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded" disabled={!stripe}>
        Subscribe
      </button>
    </form>
  );
}