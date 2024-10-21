import React, { useState } from 'react';

const App = () => {
  // Define el estado inicial para el nombre del profesor
  const [name, setName] = useState('Sofía');
  const [newName, setNewName] = useState('');

  // Función para cambiar el nombre del profesor al hacer clic en un <li>
  const handleClick = (professorName) => {
    setName(professorName);
  };

  // Función para manejar el envío del formulario
  const changeName = (event) => {
    event.preventDefault();
    if (newName.trim()) {
      setName(newName);
      setNewName(''); // Restablece el input
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