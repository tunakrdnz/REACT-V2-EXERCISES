import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counter } from './count';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter initialValue={12} incremetBy={3} timeout={500}/>);
//this props does not work,would you explain me the reason?

