import { React, useEffect } from 'react'

import 'animate.css';

import { Route, Routes, useNavigate, useLocation, Link } from 'react-router-dom';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Snake from './Pages/Snake/Snake';
import Games from './Pages/Games/Games';
import Lib from './Pages/Lib/Lib';
import Sitemap from './Pages/Sitemap/Sitemap';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const redirect = searchParams.get('redirect');

    if (redirect) {
      searchParams.delete('redirect');
      const newUrl = `${location.pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
      window.history.replaceState({}, '', newUrl);
      navigate(redirect, { replace: true });
    }
  }, [navigate, location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lib" element={<Lib />} />
        <Route path="/games" element={<Games />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/sitemap.xml"
          element={<Sitemap/>}
        />
      </Routes>
    </>
  )
}

export default App