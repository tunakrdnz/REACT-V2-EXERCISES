import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {
    const{data} = useGithubUser({username})
    return(
        <div>
            {data && <h1>Username: {data.name || data.login}</h1>}
        </div>
    )
}