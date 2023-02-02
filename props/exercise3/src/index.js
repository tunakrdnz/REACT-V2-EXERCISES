import React from 'react';
import ReactDOM from 'react-dom/client';
import {Welcome} from './welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Tuna" age={35}/>
root.render(element);


