// src/layouts/AccountLayout.js
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import netflixLogo from '../assets/netflix-logo.svg'; // Ensure this file exists
import Footer from '../components/Footer'; // Ensure the Footer component is created

export default function AccountLayout() {
  const navigate = useNavigate();

  const handleBackToNetflix = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex flex-1">
        <aside className="w-64 p-6 bg-[#141414] space-y-6 border-r border-gray-700">
          {/* Netflix Logo */}
          <button onClick={handleBackToNetflix}>
            <img
              src={netflixLogo}
              alt="Netflix"
              className="w-28 mb-4 hover:opacity-80 transition duration-200"
            />
          </button>

          {/* Back to Netflix */}
          <button
            onClick={handleBackToNetflix}
            className="flex items-center text-red-500 hover:underline text-sm"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Netflix
          </button>

          {/* Navigation Links */}
          <nav className="space-y-2 text-sm mt-6">
            <NavLink to="/overview" className="block hover:text-red-500">Overview</NavLink>
            <NavLink to="/membership" className="block hover:text-red-500">Membership</NavLink>
            <NavLink to="/security" className="block hover:text-red-500">Security</NavLink>
            <NavLink to="/devices" className="block hover:text-red-500">Devices</NavLink>
            <NavLink to="/profiles" className="block hover:text-red-500">Profiles</NavLink>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
