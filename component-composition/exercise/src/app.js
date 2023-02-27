import React from "react";
import { Container } from "./container";

export class MyApp extends React.Component {
    render() {
        return(
            <Container>
                <p>This is the children!</p>
            </Container>
             
        )
    }
}