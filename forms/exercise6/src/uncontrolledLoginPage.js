import React from "react";

export class UncontrolledLoginPage extends React.Component {

    componentDidMount() {
        this.refInput.focus();
    }



    handleFormSubmit = (event) => {
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked


        console.log({
            username,
            password,
            remember,
        })
    }

    render() {
        return(
            <div>
                <h3>Uncontrolled  Login Page</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <input name="username" ref={(input) => {this.refInput = input;}}></input>
                    <input name="password" type="password"></input>
                    <input name="remember" type="checkbox"></input>

                    
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}