import { useEffect,useState } from "react";
import {useGithubUser} from './useGithubUser'

export function GithubUserList () {
    const [name, setName] = useState([]);
    const {data, fetchGithubUser} = useGithubUser(name);
    const [list, setList] = useState([]);

    const handleGetUserData = (event) => {
           event.preventDefault() 
           fetchGithubUser(name)
           setList([
            ...list, 
            name//data.name || data.login,
           ])
           
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {
        console.log(`Username list is  ${list}`)
    }, [list])
    

    console.log(list)



    return (
        <div>
            <input value={name} onChange={handleChange}/>
            <button onClick={handleGetUserData}>User Infromation</button>
            {list.map((e,index) => <li key={e + index}>Username: {e}</li>)}
        </div>
    )
}
//something is wrong and I am hoping that you will explain me .