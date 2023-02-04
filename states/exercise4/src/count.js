import React from "react";
import { CounterDisplay } from "./count-display";

export class Counter extends React.Component {
    state = {
        count: 0
    }
    constructor(props) {
        super(props)
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + 1,
                }
            })
        }, 1000)
    }
    render() {
        return(
            <div>
                <CounterDisplay count={this.state.count}/>
            </div>
        )
    }
}