import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/AdviceGenerator.css';
import divider from '../assets/pattern-divider-desktop.svg';
import diceIcon from '../assets/icon-dice.svg';

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState(null);

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center advice-box">
        {adviceId && <p className="advice-id">ADVICE #{adviceId}</p>}
        <p className="card-text advice-text">"{advice}"</p>
        <img className="divider mb-4" src={divider} alt="divider" />
        <button className="btn dice-button position-absolute" onClick={fetchAdvice}>
          <img src={diceIcon} alt='dice' />
        </button>
      </div>
    </div>
  );
};

export default AdviceGenerator;
