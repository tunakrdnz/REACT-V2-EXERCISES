import React from 'react';
import ReactDOM from 'react-dom/client';
import { UseCallbackCounter } from './usecallbackCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseCallbackCounter initialValue={10}/>);


