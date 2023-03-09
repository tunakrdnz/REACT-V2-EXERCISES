import { Routes, Route, Link} from "react-router-dom";
import { ClickCounter } from "./clickCounter";
import { ShowGithubUser } from "./showGithubUser";
import { Welcome } from "./welcome";


export function App({name,username}) {
    return(
        <div>
        
          <Link to="/"> Welcome </Link>
          <Link to="/counter">Counter</Link>
          <Link to ="/:username">Username</Link>
          <Routes>
            <Route path="/" element={<Welcome name={name}/>}/>
            <Route path="/counter" element={<ClickCounter/>}/>
            <Route path="/user/:username" element={<ShowGithubUser/>}/>
          </Routes>
        </div>
    )
}

//I can not see the usename ,and I can not find my wrong so please inform me about it!