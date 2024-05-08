import React from 'react';
import './Authentication.css';
import Login from './Login';


import images from '../../constants/images';

function Authentication() {
    return <div className="authentication">
        <div className="auth__left">
            <img src={images.loginphoto} alt="erguhjrgeherghjk" />

        </div>
        <div className="auth__right">
            <Login />
            <div className='auth__more'>
                <span>Dont have an account? <button>Sign up</button></span>

            </div>
        </div>

    </div>;

}

export default Authentication;