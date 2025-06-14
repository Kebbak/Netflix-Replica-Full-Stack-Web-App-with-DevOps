import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data
    localStorage.removeItem('user');
    localStorage.removeItem('activeProfile');

    // Notify app to update auth state
    window.dispatchEvent(new Event('authChanged'));

    // Optional: show a message or delay before redirect
    const timeout = setTimeout(() => {
      navigate('/login'); // or '/' if you want to go to landing
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Signing Out...</h1>
      <p className="mb-6 text-gray-700">Redirecting you to the login page.</p>
    </div>
  );
}
