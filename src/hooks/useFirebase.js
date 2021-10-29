import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut, GoogleAuthProvider, getAuth, signInWithPopup, OAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import AuthEmaJohn from "../FireBase/Initialize";
import { useHistory } from "react-router-dom";
AuthEmaJohn()
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const history = useHistory();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const yahooProvider = new OAuthProvider('yahoo.com');
    // Sine Google Function
    const sineInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
        // .then((result) =>{
        //     setUser(result.user)
        // })
        // .catch((error) =>{
        //     console.log(error.message)
        //     setError(error.message)
        // })
    }
    // Sine in Yahoo 
    const sineInWithYahoo = () => {
        signInWithPopup(auth, yahooProvider)
        .then((result) =>{
            const credential = OAuthProvider.credentialFromResult(result);
            console.log('Yahoo User Ing: ', credential)
            setUser(credential)
        } )
        .catch((error) =>{
            setError(error)
        })
    }

    // Create User With Email

    // const newUserCreate = () =>{
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((result) =>{
            
    //     })
    // } 

    // Use Effect Use for Current user information
    useEffect(() => {
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
            }
        })
    },[])

    // Logout Function

    const logOut = () =>{
        signOut(auth).then(() => {
            setUser({})
            console.log('Logout Successfull')
          }).catch((error) => {
            console.log(error)
        });
    }



    console.log('Error: ',error)
    // Return Items
    return {user, sineInWithGoogle, error, sineInWithYahoo, logOut}
}
export default useFirebase;