import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from './welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
//when we want to pass a value different from a strig we use curly bracket
const element = <Welcome name={<strong>Tuna</strong>} age={35}/>
root.render(element);

