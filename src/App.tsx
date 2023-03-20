import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      App goes here <br />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Count is: {count}</button>
    </div>
  );
}

export default App;
