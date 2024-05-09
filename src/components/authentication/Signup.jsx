import React, { useState } from 'react'
import "./Signup.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../../firebase";


function Signup() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSignup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(
            signInWithEmailAndPassword(auth, email, password).then(
                updateProfile(auth.currentUser, { displayName: username })
            )
        ).catch(err => {
            alert(err);
        })
    };

    return <div className='signup'>
        <img src="" alt="pawpwets logo" />
        <input
            onChange={event => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            value={email}
        />
        <input
            onChange={event => setUsername(event.target.value)}
            type="text"
            placeholder="Username"
            value={username}
        />
        <input
            onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder='Password'
            value={password}
        />
        <button onClick={handleSignup}>Sign up</button>
    </div>

}

export default Signup