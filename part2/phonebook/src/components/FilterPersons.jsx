import React from 'react';

const FilterPersons = ({ persons, searchQuery, handleDelete }) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    filteredPersons.map(person => (
      <li className='person' key={person.id}>
        {person.name} - {person.number}
        <button onClick={() => handleDelete(person.id)}>Delete</button>
      </li>
    ))
  );
};

export default FilterPersons;