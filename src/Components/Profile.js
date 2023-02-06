import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
import React from "react";


export default function Profile() {
  const auth=useAuth();
  const navigate= useNavigate();

  const handlelogout=()=>{
    auth.logout()
    navigate('/')
  }
  return (
    <div>
        <h1>welcome{auth.user}</h1>
        <button onClick={handlelogout}>logout</button>
      
    </div>
  )
}
