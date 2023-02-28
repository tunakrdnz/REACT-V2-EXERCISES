import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sum } from './sumNumbers';

const numbers = [1,2,3,4]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sum numbers={numbers}/>);


