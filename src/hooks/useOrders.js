import { useEffect, useState } from "react"

const useOrders=()=>{
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('https://arcane-meadow-17287.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[orders])
    return orders;
}
export default useOrders;