import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from "../Login/Firebase/firebase.init"

initializeAuthentication();
const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isloading, setIsLoading] = useState(true);
    const auth = getAuth();

    // Google sign In
    const signInUsingGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user);
        })
        .finally(()=>setIsLoading(false))
    }
    //observe user state change
    useEffect(()=>{
      const unsubscirbe = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            } else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscirbe;
    },[])

    // Logotu section
    const logOut= () =>{
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsLoading(false))
    }

    const handleSignUp = e =>{
        e.preventDefault();
        console.log(email, password);
        if(password.length<6){
            setError('Password Must be 6 Character');
            return;
        }
       isLoggedIn? signIn(email, password) : signUp(email, password)
    }

    const signIn = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            setError('');
        })
        .catch(error=>{
            setError(error.message);
        })
    }

     const signUp = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            setError('');
        })
        .catch(error=>{
            setError(error.message);
        })
     }

    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e=>{
        setPassword(e.target.value);
    }

    const toggleLogin = e =>{
        setIsLoggedIn(e.target.checked);
    }

    return {
        user, signInUsingGoogle, logOut, handleSignUp, handleEmail, handlePassword, error, toggleLogin,  isLoggedIn, isloading
    }
}

export default useFirebase;