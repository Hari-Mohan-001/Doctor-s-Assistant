import { createContext, useEffect, useState } from "react";

interface UserContextType {
    user: any;
    saveUser: (userData: any) => void;
    logoutUser: () => void;
  }

  const defaultUserContext: UserContextType = {
    user: null,
    saveUser: () => {},
    logoutUser: () => {},
  };

  export const UserContext = createContext<UserContextType>(defaultUserContext)

  export const UserContextProvider = ({children }:any)=>{

    const[ user, setUser] = useState(null)

    useEffect(()=>{
        console.log('frst')
        const storedUser = localStorage.getItem("user")
        if(storedUser){
            console.log('secnd')
            setUser(JSON.parse(storedUser))
        }
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
        <UserContext.Provider value={{saveUser, logoutUser,user }}>
            {children}
        </UserContext.Provider>
    )

  }