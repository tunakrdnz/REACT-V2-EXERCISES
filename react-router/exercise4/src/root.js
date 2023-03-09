import { BrowserRouter } from "react-router-dom";
import { App } from "./app";

export function Root() {
    return(
        <BrowserRouter>
           <App name="Tuna" username="Tuna Karadeniz"/>
        </BrowserRouter>
    )
}
//I am not sure how I will get the username in here!