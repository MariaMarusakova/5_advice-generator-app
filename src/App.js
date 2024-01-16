import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [advice, setAdvice] = useState(null);
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then((data) => {
        console.log(data);

        setAdvice(data.slip.advice);
      })
      .catch(error => console.error(error));
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
