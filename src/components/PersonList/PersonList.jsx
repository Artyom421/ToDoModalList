import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export const PersonList = () => {


    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => setState(res.data))
    },[])
    
    return (
    <div>
        <h1>Persons List</h1>
        <table border="15">
            <thead>
                <tr>
                    <th>N</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>

)
}