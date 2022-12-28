import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {}
})

function AuthContextProvider({children}){
    const [authToken, setAuthToken] = useState()
    
    useEffect(() => {
        async function getToken(){
           const storedToken = await AsyncStorage.getItem('token')           
           if(storedToken){
            setAuthToken(storedToken)
           }
           
        }  
        getToken()      
    }, [authToken])

    async function authenticate(token){        
        setAuthToken(token)        
        const storage = await AsyncStorage.setItem('token', token)       
    }

    async function logout(){              
        await AsyncStorage.removeItem('token')
        setAuthToken(null)
    }

    const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider