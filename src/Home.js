import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHeader from './Components/AppHeader';
import Bio from './Components/Bio';
import LandingPage from './Components/LandingPage';

function Home() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* You can add more routes here as needed */}
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </>
  );
}

export default Home;