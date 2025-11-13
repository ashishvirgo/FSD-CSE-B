import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate=useNavigate();
    useEffect(()=>{
    const y=confirm("r u sure want to logout");
    if(y)
        navigate("/login");
    },[])
  return (
    <div>
      <h1>Logout Successfully</h1>

    </div>
  )
}

export default Logout
