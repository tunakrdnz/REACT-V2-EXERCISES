import { Routes, Route } from "react-router-dom";
import { Welcome } from "./welcome";


export function App({name}) {
    return(
        <Routes>
            <Route path="/" element={<Welcome name={name}/>}></Route>
        </Routes>
    )
}