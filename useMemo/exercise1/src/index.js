import React from 'react';
import ReactDOM from 'react-dom/client';
import { FilteredList } from './filteredList';
const users = [
  {id:1, name:"Tuna", age:35},
  {id:2, name:"Huseyin", age:35},
  {id:3, name:"Toprak", age:13}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FilteredList users={users}/>);

