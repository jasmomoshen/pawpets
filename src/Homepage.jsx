import React from 'react'
import Sidenav from './navbar/Sidenav';
import PetDashboard from './components/pet_details';

import MapDashboard from './components/map_feature/MapDashboard';

export const Homepage = () => {
    return (
        <div>This is supposed be the homepage btw
            <Sidenav />
            {/* <MapDashboard /> */}
            <PetDashboard />


        </div>
    )
}

export default Homepage;
