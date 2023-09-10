


import Friends from './Friends'
import './users.css'
import { useEffect, useState } from "react"

export default function Users (){
        const [users , setUsers] = useState([])

        useEffect( () => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
        }, [])


    return(
        <div className='box'>
            <h3>Users : {users.length}</h3>
            {
                users.map(friend => <Friends friend={friend}></Friends>)
            }
        </div>
    )
}