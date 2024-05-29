import React from 'react';
import Sidenav from './navbar/Sidenav';
import Chathome from './components/chat/Chathome';
import PetDashboard from './components/pet_details';

import MapDashboard from './components/map_feature/MapDashboard';

export const Homepage = () => {
    return (
        <div>This is supposed to be the homepage btw
            <Sidenav />
            <Chathome />
            {/* <MapDashboard /> Uncomment if needed */}
            <PetDashboard />
        </div>
    )
}

export default Homepage;