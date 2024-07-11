import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home/Home';
import './app.css'
import store from './store';

const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </Provider>
        </React.StrictMode>
    );
};

export default App;