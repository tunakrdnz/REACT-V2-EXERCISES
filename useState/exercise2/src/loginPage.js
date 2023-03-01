import {useState} from "react"

export function LoginPage() {
    const[data, setData] = useState({
        username:  '',
        password: '',
        remember: false,
    })

    function handleInputChange(event) {
        const{name,type,value,checked} = event.target
        setData((data) => {
            return {
                ...data,
                [name]: type==='checkbox' ? checked: value,
            }
        })
    }
    return (
        <form>
            <input value={data.username} onChange={handleInputChange} name="username"></input>
            <input value={data.password} onChange={handleInputChange}  type="password" name="password"></input>
            <input checked={data.remember} onChange={handleInputChange}  type="checkbox" name="remember"></input>
        </form>
    )
}