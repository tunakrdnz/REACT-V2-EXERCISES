import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./clickCounter";
import { ShowGithubUser } from "./showGithubUser";
import { Welcome } from "./welcome";


export function App({name,username}) {
    return(
        <Routes>
            <Route path="/" element={<Welcome name={name}/>}></Route>
            <Route path="/counter" element={<ClickCounter/>}></Route>
            <Route path="/user/:username" element={<ShowGithubUser/>}></Route>
        </Routes>
    )
}