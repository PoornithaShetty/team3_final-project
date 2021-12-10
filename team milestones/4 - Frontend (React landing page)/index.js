import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import FP_Header1 from './FP_Header1';
import Hero1 from './Hero1'
import Herotwo from './Herotwo';
//import RegistrationScreen from './RegistrationScreen';
//import CounterButton from './CounterButton';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    
  <FP_Header1></FP_Header1>
  <Hero1></Hero1>
  <Herotwo></Herotwo>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
