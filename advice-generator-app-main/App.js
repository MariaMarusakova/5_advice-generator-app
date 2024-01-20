import { ReactComponent as Dice } from './images/icon-dice.svg';
import { ReactComponent as DesktopDivider } from './images/pattern-divider-desktop.svg';
import { ReactComponent as MobileDivider } from './images/pattern-divider-mobile.svg';


import './App.css';
import React, { useState, useEffect } from "react";


function App() {

  const [advice, setAdvice] = useState(null);

  const fetchAdvice = async () => {
    try {

      const response = await fetch('https://api.adviceslip.com/advice?t=' + Math.random());
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

  const getDivider = (innerWidth) => {
    if (innerWidth <= 375) return <MobileDivider title='Divider Icon'/>
    return <DesktopDivider title='Divider Icon'/>
    
  }

  return (
    <div className="main-container">
      <div className="advice-container">
        {advice && <h2>Advice #{advice.id}</h2>}
        {advice && <div className='advice'>"{advice.advice}"</div>}
        <div className='bottom-part'>
          <div className='divider'>{getDivider(window.innerWidth)}</div>
          <button onClick={fetchAdvice}><Dice title='Dice Iconc'/></button>
        </div>

      </div>
    </div>
  );
}

export default App;
