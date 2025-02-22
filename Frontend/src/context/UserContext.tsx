import { createContext, useEffect, useState } from "react";

interface UserContextType {
    user: any;
    saveUser: (userData: any) => void;
    logoutUser: () => void;
    loading:boolean
  }

  const defaultUserContext: UserContextType = {
    user: null,
    saveUser: () => {},
    logoutUser: () => {},
    loading:true
  };

  export const UserContext = createContext<UserContextType>(defaultUserContext)

  export const UserContextProvider = ({children }:any)=>{

    const[ user, setUser] = useState(null)
    const [loading , setLoading] = useState(true); // Track loading state

    useEffect(()=>{
        console.log('first')
        const storedUser = localStorage.getItem("user")
        if(storedUser){
            setUser(JSON.parse(storedUser))
        }
        setLoading(false); // Mark loading as complete
    },[])

    const saveUser = (userData:any)=>{
        setUser(userData)
        localStorage.setItem('user',JSON.stringify(userData))
    }

    const logoutUser = ()=>{
        setUser(null)
        localStorage.removeItem('user')
    }

    return(
        <UserContext.Provider value={{saveUser,loading, logoutUser,user }}>
            {!loading && children}
        </UserContext.Provider>
    )

  }