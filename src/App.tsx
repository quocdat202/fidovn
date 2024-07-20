import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderApp } from 'components/Header';
import { Home } from 'pages/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <HeaderApp />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
