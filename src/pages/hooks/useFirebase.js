import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from "../Login/Firebase/firebase.init"

initializeAuthentication();
const useFirebase = ()=>{
    const [user, setUser] = useState({});
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

    return {
        user, signInUsingGoogle, logOut
    }
}

export default useFirebase;