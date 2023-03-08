import { useMemo } from "react";



export function FilteredList({users}) {
    const adults = useMemo(() => {
        return users.filter((users) => users.age > 18)
    }, [users]);
    console.log(adults);

    return(
        <div>
            <h1>Filtered List</h1>
            <ul>
                {adults.map(user => <li>Name: {user.name}</li>)}
            </ul>
        </div>
    )

}