
import {useState, createContext, useContext } from "react";
 

const AuthContext= createContext(null)
export const Authprovider =({children}) =>{
    const [user,setUser]=useState(null)

    const login = (user)=>{
        console.log("-"+user)
        setUser(user)
    }

    const logout =()=>{
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth=() =>{
    return useContext(AuthContext)
}