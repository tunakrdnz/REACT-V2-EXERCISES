import React from "react";


export class ToDoList extends React.Component {
    state = {
        items: this.props.todos,
        addedItems: ""
    }
     componentDidUpdate() {
        console.log(this.state)
    } 
    handleOnchange = (event) => {
        const addValue=event.target.value;
        this.setState({
        addedItems: addValue
        })
    }
    
    handleOnclick = () => {
        this.setState(
            {
                items: [...this.state.items , {title: this.state.addedItems} ] ,
                addedItems: ""
            })                    
    }

    handleReset = () => {
        this.setState(
            {
                items: [],
                addedItems:""
            }
        )
    }
   
  
    render() {
        return(
            <div>
                <ul>
                 {this.props.todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                 ))}
                </ul>

                <input
                name= "items"
                value={this.state.addedItems}
                onChange= {this.handleOnchange}
                />

                <button 
                name= "addedItems"
                onClick= {this.handleOnclick}
                >Add Item
                </button>

                <button
                name= "reset"
                type="reset"
                onClick={this.handleReset}
                >Reset
                </button>



            </div>
        )
    }
}