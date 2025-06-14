import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../components/Logo'; 

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake register
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded shadow-md w-80"
      >
        <Logo />
        <h2 className="text-2xl text-white mb-6 font-bold">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 rounded bg-gray-800 text-white"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-3 py-2 rounded bg-gray-800 text-white"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
        >
          Sign Up
        </button>
        <p className="text-gray-400 mt-4 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-red-500 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}