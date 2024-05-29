// build more buttons inside here like blablabla maps bla

import React from 'react'
import './Sidenav.css';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logoutUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';


function Sidenav() {
    const user = useSelector(state => state.data.user.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
        signOut(auth);

    };

    return (
        <div>
            <div>


            </div>
            <button className='sidenav__button'>
                <Avatar>{user.username ? user.username.charAt(0).toUpperCase() : "A"}</Avatar>
                <span>{user.username}
                    <button onClick={handleLogout} className="logout__button">
                        Log out
                    </button>

                </span>

            </button>
        </div>
    )
}

export default Sidenav;
