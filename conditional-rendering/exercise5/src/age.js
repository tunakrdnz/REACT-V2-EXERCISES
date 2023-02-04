import React from "react";


export class Age extends React.Component {
    render() {
        let result
        if(this.props.age>18) {
            result = <p>Your age is {this.props.age}!</p>
        } else {
            result = <p>You are very young!</p>
        }
        return <p>{result}</p>
    }
}
