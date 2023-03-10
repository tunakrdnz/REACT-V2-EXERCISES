import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser({username}) {
    const{data,error} = useSWR((username !== null) ? `https://api.github.com/users/${username}` : null, fetcher);
    //I could not manage to writing the error logic so help me please!
    return{
        data,
        error
    }
}