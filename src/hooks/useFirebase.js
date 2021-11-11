import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";


initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth()

    // create user with email and password
    const createUser = (email, password, name, history) => {
        setIsLoading(true)
        console.log('console log from firebase', name)

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // const newUser = { ...result.user}
                // const displayName=name
                // newUser[displayName]=displayName;
                const newUser = { email, displayName: name }
                setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                    })
                    .catch((error) => {
                        setError(error)
                    })
                history.push('/')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    //   sign in with email and password
    const signIn = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // sign in with google
    const googleSignIn = (location, history) => {
        const googleProvider = new GoogleAuthProvider()
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                const redirect = location?.state?.from || '/'
                history.push(redirect)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                setIsLoading(false)
            }
            else {
                setUser({})
            }
        })

        return () => unsubscribe;
    }, [auth])

    // sign out
    const logout = (history) => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                history.push('/')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        signIn,
        createUser,
        logout,
        googleSignIn,
        isLoading
    }

}

export default useFirebase;