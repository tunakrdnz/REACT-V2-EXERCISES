import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./clickCounter";
import { Welcome } from "./welcome";


export function App() {
    return(
        <Routes>
            <Route path="/" element={<Welcome/>}></Route>
            <Route path="/counter" element={<ClickCounter/>}></Route>
        </Routes>
    )
}