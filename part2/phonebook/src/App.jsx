import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import AddNew from './components/AddNew';
import FilterPersons from './components/FilterPersons';
import personService from './services/persons';
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNum
    };

    if (newName === '' || newNum === '') {
      alert(`Please fill out both fields`);
    } else if (!persons.some(person => person.name === newName)) {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNum('')
        })
    } else {
      const existingPerson = persons.find(person => person.name === newName);
      const updatedPerson = { ...existingPerson, number: newNum };
      // Ask for confirmation before updating
      const isConfirmed = window.confirm(`${newName} is already added to the phonebook. Do you want to update the number?`);
      
      if (isConfirmed) {
        personService
          .update(existingPerson.id, updatedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person =>
              person.id === updatedPerson.id ? updatedPerson : person
            ));
            setNewName('');
            setNewNum('');
          })
          .catch(error => {
            console.log('Error updating person:', error);
          });
      }
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDelete = (id) => {
    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
      });
  };

  return (
    <div>
      <Header />
      <Search value={searchQuery} onChange={handleSearchChange} />
      <AddNew
        newName={newName}
        newNum={newNum}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <ul>
        {/* Ensure persons is always an array */}
        <FilterPersons persons={persons || []} searchQuery={searchQuery} handleDelete={handleDelete} />
      </ul>
    </div>
  );
}

export default App;