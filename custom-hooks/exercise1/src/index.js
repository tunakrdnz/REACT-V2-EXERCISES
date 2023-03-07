import React from 'react';
import ReactDOM from 'react-dom/client';
import { HookCounter } from './hookCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HookCounter initialValue={17}/>);



