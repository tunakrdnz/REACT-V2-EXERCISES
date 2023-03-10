import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./clickCounter";
import { Welcome } from "./welcome";


export function App({name}) {
    return(
        <Routes>
            <Route path="/" element={<Welcome name={name}/>}></Route>
            <Route path="/counter" element={<ClickCounter/>}></Route>
        </Routes>
    )
}