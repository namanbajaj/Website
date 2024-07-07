import { React, useEffect } from 'react'


import 'animate.css';

import { Route, Routes, useNavigate } from 'react-router-dom';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Snake from './Pages/Snake';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = new URLSearchParams(window.location.search).get('redirect');
    if (redirect) {
      navigate(redirect);
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App