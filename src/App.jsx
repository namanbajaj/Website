import React from 'react'


import 'animate.css';

import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Snake from './Pages/Snake';

const App = () => {
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