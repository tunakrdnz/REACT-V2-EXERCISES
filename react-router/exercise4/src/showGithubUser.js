import  {useParams}  from "react-router-dom";
import { GithubUser } from "./githubUser";

export function ShowGithubUser() {
    const {username="tunakrdnz"}= useParams()
    return(
        <GithubUser username={username}/>
    )
}
