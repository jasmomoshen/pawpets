import React, { useState } from 'react'
import "./Login.css";

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // every time they type their email/password can save the state inside the database or wtv is gg


    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password);
    }


    return <div className="login">
        <img src="" alt="pawpets logo" />
        <input
            onChange={event => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            value={email}
        />
        <input
            onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder='Password'
            value={password}
        />
        <button onClick={handleLogin}>Log in</button>
    </div>
};

export default Login;