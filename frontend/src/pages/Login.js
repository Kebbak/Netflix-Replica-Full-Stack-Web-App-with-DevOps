import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../components/Logo'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();
  if (email && password) {
    // Save user
    localStorage.setItem('user', JSON.stringify({ email }));

    // Clear any previously selected profile
    localStorage.removeItem('activeProfile');

    // Notify app of auth change
    window.dispatchEvent(new Event('authChanged'));

    // Redirect to profile selector
    navigate('/profiles');
  }
};
  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
          backgroundImage: `url('/images/netflix-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
     }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0 pointer-events-none"></div>
      <Logo />
      <form
        onSubmit={handleSubmit}
        className="relative bg-black bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-md z-10 flex flex-col"
      >
        <h2 className="text-3xl text-white mb-8 font-bold text-center">Sign In</h2>
        <input
          type="email"
          placeholder="Email or mobile number"
          className="w-full mb-4 px-4 py-3 rounded bg-gray-800 text-white focus:outline-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 rounded bg-gray-800 text-white focus:outline-none"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold text-lg mb-4"
        >
          Sign In
        </button>
        <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link to="/forgot-password" className="hover:underline text-white">
            Forgot password?
          </Link>
        </div>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="mx-2 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>
         <Link
           to="/request-code"
           className="w-full block text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded font-semibold mb-4"
        >
          Use a Sign-In Code
        </Link>
        <p className="text-gray-400 text-center text-sm mt-2">
          New to Netflix?{' '}
          <Link to="/register" className="text-white hover:underline">
            Sign up now.
          </Link>
        </p>
        <p className="text-xs text-gray-500 mt-6 text-center">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
}
