import {useEffect, useState} from 'react'

export function useUserInfo() {
    const[data, setData] = useState('')

    useEffect(() => 
    console.log(data),
    [data]
    )

    const handleOnChange = (event) => {
        const {name, value} = event.target
        setData(data => {
            return{
                ...data,
                [name]: value
            }
        })
    }

    return {
        username: data.username,
        password: data.password,
        handleOnChange
    }
}