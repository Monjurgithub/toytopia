import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config"
export const AuthContext = createContext(null)
const auth = getAuth(app)



const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true);
    const googleprovider = new GoogleAuthProvider();

    const createUser =(email, password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }
    const singInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>
    {
        setLoading(true)
        return signOut(auth)
    }
    const google = () => {
        return signInWithPopup(auth, googleprovider);
    }
    
    useEffect (()=>
    {
          const unsubscribe = onAuthStateChanged(auth, currentUser=>
            {
                setUser(currentUser)
                setLoading(false)
            });
            return ()=> {return unsubscribe();}

    }, [])




    const authinfo = {
        user,
        createUser,
        singInUser,
        logOut,
        loading,
        google
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;