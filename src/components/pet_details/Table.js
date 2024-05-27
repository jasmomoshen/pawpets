import React from 'react';

const Table = ({ pets, handleEdit, handleDelete }) => {

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Pet Breed</th>

            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {pets ? (
            pets.map((pet, i) => (
              <tr key={pet.id}>
                <td>{pet.id}</td>
                <td>{pet.petName}</td>
                <td>{pet.petType}</td>
                <td>{pet.petBreed}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(pet.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(pet.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
