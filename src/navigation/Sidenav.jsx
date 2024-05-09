// build more buttons inside here like blablabla maps bla

import React from 'react'
import './Sidenav.css';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { loginUser, logoutUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';


function Sidenav() {
    const user = useSelector(state => state.data.user.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(loginUser());
        signOut(auth);

    }

    return (
        <div>Sidenav
            <button className='sidenav__button'>
                <Avatar>J</Avatar>
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
