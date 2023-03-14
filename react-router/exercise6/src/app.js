import { Routes, Route, Link} from "react-router-dom";
import { GithubUserList } from "../../../useeffect/exercise4/src/githubUserList";
import { ClickCounter } from "./clickCounter";
import { ShowGithubUser } from "./showGithubUser";
import {Welcome} from "./welcome";




export function App({name,username}) {
    return(
        <div>
        
          <Link to="/"> Welcome </Link>
          <Link to="/counter">Counter</Link>
          <Link to ="/:username">Username</Link>
          <Routes>
          <Route path="/" element={<Welcome name={name}/>}></Route>
            <Route path="/counter" element={<ClickCounter/>}/>
            <Route path="/users" element={<GithubUserList/>}>
               <Route path="/:username" element={<ShowGithubUser/>}/>
            </Route>
            <Route path="*" elememt={
                <div>
                  <p>Not Found</p>
                  <Link to="/">Go to Home Page</Link>
                </div>}/>                      
          </Routes>
        </div>
    )
}