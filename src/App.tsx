import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Snake from './Pages/Snake/Snake';
import Games from './Pages/Games/Games';
import OMSCS from './Pages/OMSCS/OMSCS';
import Portfolio from './Pages/Projects/components/Portfolio';
import Languages from './Pages/Tools/components/Languages';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirect');
    if (redirectPath && redirectPath !== location.pathname) {
      sessionStorage.removeItem('redirect');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/snake" element={<Snake />} />
      <Route path="/omscs" element={<OMSCS />} />
      <Route path="/projects" element={<Portfolio />} />
      <Route path="/tools" element={<Languages />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}