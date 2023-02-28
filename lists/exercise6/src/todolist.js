import React from "react";


export class ToDoList extends React.Component {
    state = {
        items: this.props.todos,
        addedItems: "",
        removeItems: ""
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
    handleRemoveItems = (el,index) => {
        //console.log(el);
        //console.log(index);
        this.setState((state) => {
            if(state.items[index].title === el) {
                state.items.splice(index,1)
            }
            return state.items
        })

    }
   
  
    render() {
        const listItems = this.state.items.map(
            (todo,index) =>
            <li key={todo.id}>
                {todo.title}
                <button
                name="remove"
                type="reset"
                onClick={() => {this.handleRemoveItems(todo.title,index)}}>
                Remove Item
                </button>
            </li>

        );
        return(
            <div>
                <ul>
                    {listItems}
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