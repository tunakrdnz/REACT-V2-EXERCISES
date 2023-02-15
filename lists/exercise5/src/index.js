import React from 'react';
import ReactDOM from 'react-dom/client';
import {ToDoList} from './todolist';

const toDoList=[
  {id:1, title:"Do some exercise"},
  {id:2, title:"Clean the house"},
  {id:3, title:"Take a walk"},
  {id:4, title:"Do some meditation"}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToDoList todos={toDoList}/>);