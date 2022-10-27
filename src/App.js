import React from 'react'
import Home from './Pages/Home/Home';
import './App.css'
import BidAndDiscuss from './Pages/Events/BidAndDiscuss/BidAndDiscuss'
import GreenScreen from './Pages/Events/GreenScreen/GreenScreen'
import NeedForSpeed from './Pages/Events/NeedForSpeed/NeedForSpeed'
import PaperPresentation from './Pages/Events/PaperPresentation/PaperPresentation'
import TechHunt from './Pages/Events/TechHunt/TechHunt'
import UnwrapTheStory from './Pages/Events/UnwrapTheStory/UnwrapTheStory'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/bid-and-discuss" element={<BidAndDiscuss />}/>
          <Route path="/green-screen" element={<GreenScreen />}/>
          <Route path="/need-for-speed" element={<NeedForSpeed />}/>
          <Route path="/paper-presentation" element={<PaperPresentation />}/>
          <Route path="/tech-hunt" element={<TechHunt />}/>
          <Route path="/unwrap-the-story" element={<UnwrapTheStory />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
