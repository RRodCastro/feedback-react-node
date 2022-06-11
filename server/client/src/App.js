import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  return (
    <div>
      <input
      value={name}
      onChange={(event) => setName(event.target.value)}
      >
      </input>
      {name.split("").map((letter, index) => <span onClick={() => setName(name.split("").filter((_, i) => i !== index).join(""))  } key={letter + index}> {letter}</span>)}
    <button
      onClick={() => {
        setNames(names.concat(name)); setName("");
      }}
      style={{marginLeft: "10px", border: "1px solid black"}}
    >
      Save
    </button>
    <div style={{display: "flex"}}>


    {names.map((currentName, index) => <span
    onClick={() => setNames(names.filter((_, i) => i !== index))  }
    style={{margin: "20px"}} key={currentName + index}> {currentName} </span> )}
    </div>
    <a href="/auth/google"> Auth</a>
    </div>
  );
}

export default App;
