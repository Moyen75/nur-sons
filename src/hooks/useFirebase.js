import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";


initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)


    const auth = getAuth()

    // create user with email and password
    const createUser = (email, password, name, history) => {
        setIsLoading(true)


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                addToDb(email, name, "POST")
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
    const signIn = (email, password,location,history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const redirect = location?.state?.from || '/'
                history.push(redirect)
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
                const user = result.user
                setUser(user)
                const redirect = location?.state?.from || '/'
                history.push(redirect)
                addToDb(user.email, user.displayName, "PUT")
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


    // add user info to database
    const addToDb = (email, displayName, method) => {
        const userInfo = { email, displayName }
        fetch('https://arcane-meadow-17287.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    // get admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data.admin))
    }, [user])

    return {
        user,
        error,
        signIn,
        createUser,
        logout,
        googleSignIn,
        isLoading,
        isAdmin
    }

}

export default useFirebase;