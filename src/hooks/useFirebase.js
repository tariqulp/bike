import initializeFirebase from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser)
                // save data to the server
                saveUser(email, name, 'POST');
                // send name to the firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`https://peaceful-castle-44201.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://peaceful-castle-44201.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }

    return {
        user,
        isLoading,
        setIsLoading,
        authError,
        admin,
        registerUser,
        loginUser,
        logOut
    }






}

export default useFirebase;