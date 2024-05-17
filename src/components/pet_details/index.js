import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';
import { db } from '../../firebase';


import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";




const PetDashboard = ({ setIsAuthenticated }) => {
  const [pets, setPets] = useState();
  const [selectedPet, setSelectedPet] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const getPets = async () => {
    const querySnapshot = await getDocs(collection(db, "pets"));
    const pets = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    setPets(pets)

  }

  useEffect(() => {
    getPets()
  }, []);

  const handleEdit = id => {
    const [pet] = pets.filter(pet => pet.id === id);

    setSelectedPet(pet);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [pet] = pets.filter(pet => pet.id === id);

        deleteDoc(doc(db, "pets", id));


        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${pet.petName} ${pet.petType}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const petsCopy = pets.filter(pet => pet.id !== id);
        setPets(petsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            pets={pets}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          pets={pets}
          setPets={setPets}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          pets={pets}
          selectedPet={selectedPet}
          setPets={setPets}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default PetDashboard;
