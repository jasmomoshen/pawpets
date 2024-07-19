import React from 'react';
import Sidenav from './navbar/Sidenav';
import Chathome from './components/chat/Chathome';
import PetDashboard from './components/pet_details';
import MapDashboard from './components/map_feature/MapDashboard';
import Reminders from './components/reminders/reminder';
import { Route, Routes } from 'react-router-dom';

export const Homepage = () => {
    return (
        <div>
            <Sidenav />
            <Routes>
                <Route path="/" element={<PetDashboard />} />
                <Route path="/chat" element={<Chathome />} />
                <Route path="/map" element={<MapDashboard />} />
                <Route path="/reminders" element={<Reminders />} />
            </Routes>
        </div>
    )
}

export default Homepage;