import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Snake from './Pages/Snake/Snake';
import Games from './Pages/Games/Games';
import Lib from './Pages/Lib/Lib';

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirect');
    if(redirectPath) {
      sessionStorage.removeItem(redirectPath);
      navigate(redirectPath, {replace: true});
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Lib" element={<Lib />} />
      <Route path="/games" element={<Games />} />
      <Route path="/snake" element={<Snake />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}