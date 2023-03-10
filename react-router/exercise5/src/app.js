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
            <Route path="*" elememt={
                <div>
                  <p>Not Found</p>
                  <Link to="/">Go to Home Page</Link>
                </div>}/>                      
          </Routes>
        </div>
    )
}
//Again, I missing something but I could not find what it is so help me ,please!