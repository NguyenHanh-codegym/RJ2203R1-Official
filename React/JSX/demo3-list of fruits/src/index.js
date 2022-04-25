import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry']

const listFruits = (
  <div>
    <h1>List of fruits</h1>
    <ul>
      {fruits.map((item) => (
        <li>{ item }</li>
      )) }
    </ul>
 </div>

)
ReactDOM.render(
<div>
    <h1>List of fruits</h1>
    <ul>
      { fruits.map((item) => (
        <li>{ item }</li>
      )) }
    </ul>
 </div>,
  document.getElementById('root')
);
reportWebVitals();
