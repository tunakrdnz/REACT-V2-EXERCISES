import React from "react"

export class ClickCounter extends React.Component {
    state = { button:"Button"}

    clickButton = (event) => {
        this.setState((state) => {
            return {button: event.target.name}
        })
    }
    render() {
        return(
            <div>
                <h1>You have just clicked the {this.state.button}!</h1>
                <button name="Button1" onClick={this.clickButton}>1th Button</button>
                <button name="Button2" onClick={this.clickButton}>2th Button</button>
                <button name="Button3" onClick={this.clickButton}>3th Button</button>

            </div>
        )
    }
}

