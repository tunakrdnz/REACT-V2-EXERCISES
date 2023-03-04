import React from 'react';
import ReactDOM from 'react-dom/client';
import { HookCounter } from './hookCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HookCounter iniitialValue={11}/>);
//I wanted to start with 11 on the counter but it did not work , would you tell me the reason ?


