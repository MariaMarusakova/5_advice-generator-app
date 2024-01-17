import { ReactComponent as Dice } from './images/icon-dice.svg';
import { ReactComponent as Divider } from './images/pattern-divider-desktop.svg';

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
      setAdvice(data.slip);

    } catch (error) {
      console.error('Error happened:', error);
    }

  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <body>
      <div className="main-container">
        <div className="advice-container">
          {advice && <h2>Advice #{advice.id}</h2>}
          {advice && <div className='advice'>"{advice.advice}"</div>}
          <div className='bottom-part'>
            <div className='divider'><Divider /></div>
            <button><Dice /></button>
          </div>

        </div>
      </div>
    </body>
  );
}

export default App;
