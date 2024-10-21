import React, { useState } from 'react';

const App = () => {
  
  const [name, setName] = useState('Sofía');
  const [newName, setNewName] = useState('');


  const handleClick = (professorName) => {
    setName(professorName);
  };


  const changeName = (event) => {
    event.preventDefault();
    if (newName.trim()) {
      setName(newName);
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Teacher Name: {name}</h2>
      <ul>
        <li onClick={() => handleClick('Data')}>Data</li>
        <li onClick={() => handleClick('Reyes')}>Reyes</li>
        <li onClick={() => handleClick('Yolanda')}>Yolanda</li>
      </ul>
      
      <form onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Add a name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;