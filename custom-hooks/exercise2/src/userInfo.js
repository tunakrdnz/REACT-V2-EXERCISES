import { useUserInfo } from "./useUserInfo"

export function UserInfo() {
    const{username, password, handleOnChange} = useUserInfo()
    
    return(
        <form>
            <input name='username' value={username} onChange={handleOnChange}/>
            <input name='password' type='password' value={password} onChange={handleOnChange}/>
        </form>
    )
}
//something is wrong in here but I could not find it so would you please tell me what it is !