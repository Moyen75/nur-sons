import { useEffect, useState } from 'react'
const useUsers = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        fetch('https://arcane-meadow-17287.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return users;
}
export default useUsers;