import React from 'react';
import Sidenav from './navbar/Sidenav';
import Chathome from './components/chat/Chathome';
import PetDashboard from './components/pet_details';
import MapDashboard from './components/map_feature/MapDashboard';
import NewsDashboard from './components/news_feature/NewsDashboard';
import { Route, Routes } from 'react-router-dom';

export const Homepage = () => {
    return (
        <div>
            <Sidenav />
            <Routes>
                <Route path="/" element={<PetDashboard />} />
                <Route path="/chat" element={<Chathome />} />
                <Route path="/map" element={<MapDashboard />} />
                <Route path="/news" element={<NewsDashboard />} />

            </Routes>
        </div>
    )
}

export default Homepage;