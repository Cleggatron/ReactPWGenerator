import './App.css';
import { useState } from 'react';
import { passwordGen } from './helperFuncs/helpers';

/*
Given any L, N, X, C return an L long string containing N numeric characters, X non alphabetic chars and C capital letters
*/

function App() {
  const [totalLen, setTotalLen] = useState(10);
  const [totalCaps, setTotalCaps] = useState(0);
  const [totalSpec, setTotalSpec] = useState(0);
  const [totalNums, setTotalNums] = useState(0);
  const [password, setPassword] = useState('');

  function handleIncrement(stateName) {
    if (stateName === 'totalLen') {
      setTotalLen(totalLen + 1);
      return;
    }

    if (stateName === 'totalCap') {
      if (totalCaps + totalSpec + totalNums === totalLen) {
        setTotalLen(totalLen + 1);
        setTotalCaps(totalCaps + 1);
      } else {
        setTotalCaps(totalCaps + 1);
      }
    }
    if (stateName === 'totalSpec') {
      if (totalCaps + totalSpec + totalNums === totalLen) {
        setTotalLen(totalLen + 1);
        setTotalSpec(totalSpec + 1);
      } else {
        setTotalSpec(totalSpec + 1);
      }
    }
    if (stateName === 'totalNums') {
      if (totalCaps + totalSpec + totalNums === totalLen) {
        setTotalLen(totalLen + 1);
        setTotalNums(totalNums + 1);
      } else {
        setTotalNums(totalNums + 1);
      }
    }
  }

  function handleDecrement(stateName) {
    if (stateName === 'totalLen') {
      if (totalLen === 1 || totalLen === totalCaps + totalNums + totalSpec) {
        return;
      } else {
        setTotalLen(totalLen - 1);
        return;
      }
    }

    if (stateName === 'totalCap') {
      if (totalCaps === 0) {
        return;
      } else {
        setTotalCaps(totalCaps - 1);
        return;
      }
    }

    if (stateName === 'totalSpec') {
      if (totalSpec === 0) {
        return;
      } else {
        setTotalSpec(totalSpec - 1);
        return;
      }
    }

    if (stateName === 'totalNums') {
      if (totalNums === 0) {
        return;
      } else {
        setTotalNums(totalNums - 1);
        return;
      }
    }
  }

  function createPassword() {
    setPassword(passwordGen(totalLen, totalCaps, totalSpec, totalNums));
  }

  return (
    <div className="App">
      <header>
        <h1>Generate a password:</h1>
      </header>
      <main>
        <div>
          <h2 className="optionsHeader">Select your options:</h2>
          <div className="optionsContainer">
            <div className="option">
              <label>Total Length:</label>
              <div id="passwordLength" className="stateSetter">
                <button onClick={() => handleDecrement('totalLen')}>-</button>
                <p>{totalLen}</p>
                <button onClick={() => handleIncrement('totalLen')}>+</button>
              </div>
            </div>

            <div className="option">
              <label>Number of Capitals:</label>
              <div id="CapitalLength" className="stateSetter">
                <button onClick={() => handleDecrement('totalCap')}>-</button>
                <p>{totalCaps}</p>
                <button onClick={() => handleIncrement('totalCap')}>+</button>
              </div>
            </div>

            <div className="option">
              <label>Number of Special Characters:</label>
              <div id="SpecialLength" className="stateSetter">
                <button onClick={() => handleDecrement('totalSpec')}>-</button>
                <p>{totalSpec}</p>
                <button onClick={() => handleIncrement('totalSpec')}>+</button>
              </div>
            </div>

            <div className="option">
              <label>Number of Numbers:</label>
              <div id="NumbersLength" className="stateSetter">
                <button onClick={() => handleDecrement('totalNums')}>-</button>
                <p>{totalNums}</p>
                <button onClick={() => handleIncrement('totalNums')}>+</button>
              </div>
            </div>
          </div>
          <div>
            <h2>Password Generator:</h2>
            <button onClick={createPassword}>Generate a password!</button>
            <p>{password}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
