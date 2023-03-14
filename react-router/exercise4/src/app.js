import { Routes, Route, Link} from "react-router-dom";
import { ClickCounter } from "./clickCounter";
import { ShowGithubUser } from "./showGithubUser";
import { Welcome } from "./welcome";


export function App() {
    return(
        <div>
        
          <Link to="/"> Welcome </Link>
          <Link to="/counter">Counter</Link>
          <Link to ="/:username">Username</Link>
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/counter" element={<ClickCounter/>}/>
            <Route path="/user/:username" element={<ShowGithubUser/>}/>
          </Routes>
        </div>
    )
}

