import {useState} from 'react'

export function useGithubUser() {
    const[data, setData] = useState("");

    async function fetchGithubUser(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json()
            setData(json)
        }
        catch(error) {
            setData(null)
        }
    }
    return {
        data,
        setData,
        fetchGithubUser
    }
}