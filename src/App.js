import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';

const App= () =>{
    return(
      <div className='App'>
        Hello world 
        <button>test</button>
      </div>
    );
}
export default App;
