import React from "react";
import { ToDoList } from "./todolist";

export class MyApp extends React.Component {
    render() {
        return(
            <ToDoList render= {items => {
                return items.map(
                (todo,index) =>
                    <li key={index}>
                        {todo.title}
                    </li>);
                 }} />
        )
    }

}