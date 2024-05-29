import React, { useState } from 'react'
import "./Signup.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../../firebase";
import Add from "./addImageIcon.png"

function Signup() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // auto sign in the user
                return signInWithEmailAndPassword(auth, email, password);
            })
            .then(() => {
                // update user profile
                if (auth.currentUser) {
                    return updateProfile(auth.currentUser, { displayName: username });
                } else {
                    throw new Error("No current user to update profile for");
                }
            })
            .then(() => {
                console.log('User signed up and profile updated');
            })
            .catch((err) => {
                console.error('Error during signup:', err.message);
                alert(err.message);
            });
    };

    return <div className='signup'>
        <span className='logo'>PawPets</span>
        <span className='title'>Sign Up</span>
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
        <input style={{display:"none"}} type="file" id="file"/>
        <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
        </label>
        <button onClick={handleSignup}>Sign up</button>
    </div>
}

export default Signup