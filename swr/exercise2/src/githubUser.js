import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {
    const{data,error} = useGithubUser({username})
    return(
        <div>
            {error && <h2>An error has occured!</h2>}
            {data && <h1>Username: {data.name} </h1>}
        </div>
    )
}