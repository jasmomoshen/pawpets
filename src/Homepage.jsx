import React from 'react'
import Sidenav from './navbar/Sidenav';
import Chathome from './components/chat/Chathome';

export const Homepage = () => {
    return (
        <div>This is supposed be the homepage btw
            <Sidenav />

            <Chathome />
        </div>
    )
}

export default Homepage;
