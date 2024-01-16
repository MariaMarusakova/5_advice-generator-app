import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [advice, setAdvice] = useState(null);

  const fetchAdvice = async () => {
    try {

      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setAdvice(data.slip.advice);

    } catch (error) {
      console.error('Error:', error);
    }

  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">

      <div>
        <h2>Advice of the day:</h2>
        {advice && <p>{advice}</p>}
      </div>
    </div>
  );
}

export default App;
