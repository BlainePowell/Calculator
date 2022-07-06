import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [ number, setNumber ] = useState('');

  const Update = (e) => {
    setNumber(number.concat(e.target.value));
  }

  const Clear = () => {
    setNumber('')
  }

  const Compute = () => {
    setNumber(eval(number).toString());
  }

  return (
    <div className="App">
      <div className='calculator'>
      <input readOnly value={number} />
      <div className="first">
      <button value={''} onClick={Clear} style={{
        backgroundColor: '#47476b'
      }}>C</button>
      <button value={'('} onClick={Update} style={{
        backgroundColor: '#47476b'
      }}>(</button>
      <button value={')'} onClick={Update} style={{
        backgroundColor: '#47476b'
      }}>)</button>
      <button value={'/'} onClick={Update} style={{
        backgroundColor: '#FF8C00'
      }}>/</button>
      </div>
      <div className='first'>
      <button value={'7'} onClick={Update}>7</button>
      <button value={'8'} onClick={Update}>8</button>
      <button value={'9'} onClick={Update}>9</button>
      <button value={'-'} onClick={Update} style={{
        backgroundColor: '#FF8C00'
      }}>-</button>
      </div>
      <div className='first'>
      <button value={'4'} onClick={Update}>4</button>
      <button value={'5'} onClick={Update}>5</button>
      <button value={'6'} onClick={Update}>6</button>
      <button value={'+'} onClick={Update} style={{
        backgroundColor: '#FF8C00'
      }}>+</button>
      </div>
      <div className='first'>
      <button value={'1'} onClick={Update}>1</button>
      <button value={'2'} onClick={Update}>2</button>
      <button value={'3'} onClick={Update}>3</button>
      <button value={'*'} onClick={Update} style={{
        backgroundColor: '#FF8C00'
      }}>x</button>
      </div>
      <div className='first'>
      <button value={'%'} onClick={Update}>%</button>
      <button value={'0'} onClick={Update}>0</button>
      <button value={'.'} onClick={Update}>.</button>
      <button value={'='} onClick={Compute} style={{
        backgroundColor: '#FF8C00'
      }}>=</button>
      </div>
      </div>
    </div>
  );
}

export default App;
