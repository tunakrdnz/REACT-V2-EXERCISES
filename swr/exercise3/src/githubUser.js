import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {
    const{data,error,onRefresh} = useGithubUser({username})
    return(
        <div>
            {error && <h2>An error has occured!</h2>}
            {data && <h1>Username: {data.name} </h1>}
            <button onClick={onRefresh}>Refresh</button>
        </div>
    )
}