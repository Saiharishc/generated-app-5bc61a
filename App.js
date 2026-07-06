import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/items')
      .then(res => res.json())
      .then(data => setItems(data.message));
  }, []);

  return (
    <div className="App">
      <h1>Generated App</h1>
      <p>{items}</p>
    </div>
  );
}

export default App;
