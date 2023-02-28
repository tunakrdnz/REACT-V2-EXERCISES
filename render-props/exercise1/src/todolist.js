import React from "react";


export class ToDoList extends React.Component {
    state = {
        items: 
               [
                {id:1, title:"Do some exercise"},
                {id:2, title:"Clean the house"},
                {id:3, title:"Take a walk"},
                {id:4, title:"Do some meditation"}
               ],

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
   
  
    render() {
        return(
            <div>
                <ul>{this.props.render(this.state.items)}</ul>

                <input
                name= "items"
                //value={this.state.addedItems}
                onChange= {this.handleOnchange}
                />

                <button 
                name= "addedItems"
                onClick= {this.handleOnclick}
                >Add Item
                </button>
            </div>
        )
    }
}