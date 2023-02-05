import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue ?? 0,
    }
    //There is no need to define constructor method 
    componentDidMount() {
        this._internal = setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementBy ?? 1),
                }
            })
        }, this.props.timeout ?? 1000)
    }
    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
            </div>
        )
    }
}