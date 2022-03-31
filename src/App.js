import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import WebPage from './pages/WebPage';
import OtroWebPage from "./pages/OtroWebPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WebPage />} />
        <Route path='/otra' element={<OtroWebPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
