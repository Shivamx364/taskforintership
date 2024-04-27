import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EventList from './components/EventList';
import UserEvents from './components/UserEvents';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/global">Global</Link>
                    <Link to="/user">User Specific</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <Routes>
                    <Route path="/global" element={<EventList />} />
                    <Route path="/user" element={<UserEvents />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
