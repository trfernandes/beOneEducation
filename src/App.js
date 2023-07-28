import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import SurveyWalkWithGod from './pages/WalkWithGod/SurveyWalkWithGod';
import SurveyGodGifts from './pages/GodGifts/SurveyGodGifts';
import ResultsSurveyWalkWithGod from './pages/WalkWithGod/ResultsSurveyWalkWithGod';
import Home from './pages/Home';
import ResultsSurveyGodGifts from './pages/GodGifts/ResultsSurveyGodGifts';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/HeaderBar.js';

function App() {
  return (
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/surveyWalkWithGod" element={<SurveyWalkWithGod />} />
        <Route exact path="/surveyGodGifts" element={<SurveyGodGifts />} />
        <Route exact path="/resultsSurveyWalkWithGod" element={<ResultsSurveyWalkWithGod />} />
        <Route exact path="/resultsSurveyGodGifts" element={<ResultsSurveyGodGifts />} />
      </Routes>
    </BrowserRouter  >
  );
}

export default App;
