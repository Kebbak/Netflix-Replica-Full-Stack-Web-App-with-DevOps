import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Login, Register, Home, Subscribe, MovieDetails, Navbar, Landing, Profiles,
  TVShows, Games, MyList, MoviesPage, NewPopularPage, LanguagesPage,
  ChangePlan, ManagePayment, BackupPayment, Redeem, Devices, SignOut,
  Language, Playback, Subtitles, ParentalControls, ManageProfile, Overview,
  Membership, Security, Profile, HelpCenter, TransferProfile, Account
} from './pages'; // Adjust this import if needed
import AccountLayout from './layouts/AccountLayout';

function AppWrapper() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem('user');
      setIsAuthenticated(!!user);
    };

    checkAuth(); // Initial check
    window.addEventListener('authChanged', checkAuth);

    return () => {
      window.removeEventListener('authChanged', checkAuth);
    };
  }, []);

  const hideNavbarRoutes = [
    '/membership', '/change-plan', '/manage-payment', '/backup-payment',
    '/redeem', '/devices', '/signout', '/language', '/playback', '/subtitles',
    '/parental-controls', '/manage-profile', '/overview', '/membership-details',
    '/security', '/profile', '/help', '/transfer',
  ];

  const shouldShowNavbar = isAuthenticated && !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Landing />} />
        <Route path="/movie/:id" element={isAuthenticated ? <MovieDetails /> : <Navigate to="/login" />} />
        <Route path="/subscribe" element={isAuthenticated ? <Subscribe /> : <Navigate to="/login" />} />
        <Route path="/profiles" element={isAuthenticated ? <Profiles /> : <Navigate to="/login" />} />
        <Route path="/tv-shows" element={isAuthenticated ? <TVShows /> : <Navigate to="/login" />} />
        <Route path="/games" element={isAuthenticated ? <Games /> : <Navigate to="/login" />} />
        <Route path="/my-list" element={isAuthenticated ? <MyList /> : <Navigate to="/login" />} />
        <Route path="/movies" element={isAuthenticated ? <MoviesPage /> : <Navigate to="/login" />} />
        <Route path="/new-popular" element={isAuthenticated ? <NewPopularPage /> : <Navigate to="/login" />} />
        <Route path="/languages" element={isAuthenticated ? <LanguagesPage /> : <Navigate to="/login" />} />

        <Route element={<AccountLayout />}>
          <Route path="/change-plan" element={isAuthenticated ? <ChangePlan /> : <Navigate to="/login" />} />
          <Route path="/manage-payment" element={isAuthenticated ? <ManagePayment /> : <Navigate to="/login" />} />
          <Route path="/backup-payment" element={isAuthenticated ? <BackupPayment /> : <Navigate to="/login" />} />
          <Route path="/redeem" element={isAuthenticated ? <Redeem /> : <Navigate to="/login" />} />
          <Route path="/devices" element={isAuthenticated ? <Devices /> : <Navigate to="/login" />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/language" element={isAuthenticated ? <Language /> : <Navigate to="/login" />} />
          <Route path="/playback" element={isAuthenticated ? <Playback /> : <Navigate to="/login" />} />
          <Route path="/subtitles" element={isAuthenticated ? <Subtitles /> : <Navigate to="/login" />} />
          <Route path="/parental-controls" element={isAuthenticated ? <ParentalControls /> : <Navigate to="/login" />} />
          <Route path="/manage-profile" element={isAuthenticated ? <ManageProfile /> : <Navigate to="/login" />} />
          <Route path="/overview" element={isAuthenticated ? <Overview /> : <Navigate to="/login" />} />
          <Route path="/membership" element={isAuthenticated ? <Account /> : <Navigate to="/login" />} />
          <Route path="/membership-details" element={isAuthenticated ? <Membership /> : <Navigate to="/login" />} />
          <Route path="/security" element={isAuthenticated ? <Security /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/help" element={isAuthenticated ? <HelpCenter /> : <Navigate to="/login" />} />
          <Route path="/transfer" element={isAuthenticated ? <TransferProfile /> : <Navigate to="/login" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default AppWrapper;
