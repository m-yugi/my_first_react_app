import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
function App(props) {

  const [mode, setmode] = useState('light')
  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
    }
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage home="about" togglemode={togglemode} mode={mode} />} />
          <Route path='/' element={<Homepage home="about" togglemode={togglemode} mode={mode} />} />
          <Route path='about' element={<Aboutpage home="about" togglemode={togglemode} mode={mode} />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;