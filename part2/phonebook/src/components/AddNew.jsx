import React from 'react';

const AddNew = ({ newName, newNum, handleNameChange, handleNumChange, addPerson }) => {
  return (
    <div>
      <h2>Add New</h2>
      <form onSubmit={addPerson}>
        Name:
        <input
          value={newName}
          onChange={handleNameChange}
        />
        <br />
        Number:
        <input
          value={newNum}
          onChange={handleNumChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default AddNew;