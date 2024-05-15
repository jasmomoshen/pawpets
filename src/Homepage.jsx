import React from 'react'
import Sidenav from './navbar/Sidenav';

import Header from './components/map_feature/Header/Header';
import List from './components/map_feature/List/List';
import Map from './components/map_feature/Map/Map';
import MapDashboard from './components/map_feature/MapDashboard';

export const Homepage = () => {
    return (
        <div>This is supposed be the homepage btw
            <Sidenav />
            <MapDashboard />


        </div>
    )
}

export default Homepage;
