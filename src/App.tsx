import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import MissPoppins from "./components/MissPoppins";

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/misspoppins" element={<MissPoppins />} />
            </Routes>
        </Router>
    );
};

export default App;
