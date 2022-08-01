import './App.css';
import * as React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';


function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route> 
          <Route path="login" element={<Login />}></Route>
          <Route path="logout" element={<Logout />}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    );
}

export default App;
