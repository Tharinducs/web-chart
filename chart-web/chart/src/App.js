import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Credit from './pages/Credit';
import Stock from './pages/Stock';


const App = () => {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<div>Home Page Chart</div>} />
                    <Route exact path="/credit" element={<Credit />} />
                    <Route exact path="/stock" element={<Stock />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
};


export default App;