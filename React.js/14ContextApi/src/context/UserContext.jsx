import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const value = {
        user,
        setUser
    }
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);