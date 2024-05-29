import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { auth } from '../../firebase';


import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';


const Add = ({ pets, setPets, setIsAdding }) => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [petBreed, setPetBreed] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();


    const user = auth.currentUser;
    if (!user) {
      return Swal.fire({
        icon: 'error',
        title: 'Not logged in',
        text: 'You must be logged in to add a pet.',
        showConfirmButton: true,
      });
    }
    const uid = user.uid;

    // check if all components of the form are filled in
    if (!petName || !petType || !petBreed) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    // construct new pet object and store in pets array
    const newPet = {
      petName,
      petType,
      petBreed
    };

    pets.push(newPet);


    // Add a new document with a generated id
    // const docRef = await addDoc(collection(db, "pets"), {
    //   ...newPet
    // });

    const docRef = await addDoc(collection(db, "users", uid, "pets"), {
      ...newPet
    });


    setPets(pets);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${petName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Pet</h1>
        <label htmlFor="petName">Pet Name</label>
        <input
          id="petName"
          type="text"
          name="petName"
          value={petName}
          onChange={e => setPetName(e.target.value)}
        />
        <label htmlFor="petType">Pet Type</label>
        <input
          id="petType"
          type="text"
          name="petType"
          value={petType}
          onChange={e => setPetType(e.target.value)}
        />
        <label htmlFor="petBreed">Pet Breed</label>
        <input
          id="petBreed"
          type="text"
          name="petBreed"
          value={petBreed}
          onChange={e => setPetBreed(e.target.value)}
        />

        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;