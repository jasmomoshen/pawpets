import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase';

const Edit = ({ pets, selectedPet, setPets, setIsEditing }) => {
  const id = selectedPet.id;

  const [petName, setPetName] = useState(selectedPet.petName);
  const [petType, setPetType] = useState(selectedPet.petType);
  const [petBreed, setPetBreed] = useState(selectedPet.petBreed);


  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!petName || !petType || !petBreed) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const pet = {
      id,
      petName,
      petType,
      petBreed,
    };


    // update doc
    await setDoc(doc(db, "pets", id), {
      ...pets
    });


    setPets(pets);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${pet.petName} ${pet.petType}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit pet</h1>
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
