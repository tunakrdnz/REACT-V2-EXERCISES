import React from 'react';


export class LoginPage extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
        isDisable: true,
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;
        const disable = (event.target.value) ? false: true;
        
        this.setState({
            [name]: type === 'checkbox' ? checked :value,
            
           //Would you explain me how to get the same result with  a "[name]" as below equalty?
            isDisable: disable
        })
    }

    render() {
        return (
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
                 <button 
                 name = "isDisable"
                 disabled = {this.state.isDisable}
                 onChange = {this.handleInputChange}
                 >
                    Click!</button>
              </div>
        )
    }


}