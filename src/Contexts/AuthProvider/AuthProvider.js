import React, { createContext, useEffect, useState } from 'react';
import app from '../../Config/Firebase/firebase.config';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, OAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleProvider = new GoogleAuthProvider()
    const yahooProvider = new OAuthProvider('yahoo.com')
    const facebookProvider = new FacebookAuthProvider()

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const yahooSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, yahooProvider)
    }

    const facebookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserNameAndPhoto = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const userInfo = {
        user,
        loading,
        googleSignIn,
        yahooSignIn,
        facebookSignIn,
        createUser,
        loginUser,
        updateUserNameAndPhoto,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;