import React from 'react';


export class LoginPage extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;
        
        this.setState({
            [name]: type === 'checkbox' ? checked :value,
        })
    }

    handleResetState = () => {
        this.setState({
            username: '',
            password: '',
            remember: false
        })
    }


    render() {
        return (
            <div>
               <div>               
                  <button onClick={this.handleResetState}>Reset</button>
               </div>

               <div>
                 <input 
                    name = "username" 
                    value = {this.state.username} 
                    onChange = {this.handleInputChange}
                 />

                 <input 
                    name = "password" 
                    type = "password" 
                    value = {this.state.password}
                    onChange = {this.handleInputChange}
                 />
                 <input 
                    name = "remember" 
                    type = "checkbox" 
                    checked = {this.state.remember}
                    onChange = {this.handleInputChange}
                 />
               </div>
            </div>
        )
    }


}