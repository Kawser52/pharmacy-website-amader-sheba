import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from "../Login/Firebase/firebase.init"

initializeAuthentication();
const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user);
        })
    }
    //observe user state change
    useEffect(()=>{
      const unsubscirbe = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            } else{
                setUser({})
            }
        });
        return () => unsubscirbe;
    },[])
    const logOut= () =>{
        signOut(auth)
        .then(()=>{})
    }

    const handleSignUp = e =>{
        e.preventDefault();
        console.log(email, password);
        if(password.length<6){
            setError('Password Must be 6 Character');
            return;
        }
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
        console.log(e.target.checked);
    }

    return {
        user, signInUsingGoogle, logOut, handleSignUp, handleEmail, handlePassword, error, toggleLogin
    }
}

export default useFirebase;