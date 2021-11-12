import { useEffect, useState } from "react"
import useAuth from "./useAuth"
import useUsers from "./useUsers"

const useUser=()=>{
    const{user}=useAuth()
    const users=useUsers()
    const [currentUser,setCurrentUser]=useState({})
    useEffect(()=>{
        const current = users?.find(us=>us.email===user.email)
        setCurrentUser(current)
    },[user.email ,users])
    return currentUser;
}
export default useUser;