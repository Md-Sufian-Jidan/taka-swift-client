import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

     // sign in user with email and password
     const signInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };
    // log out
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth)
    };

     // observe the user
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const property = { isLoading, user, createUser, signInUser, logOut}
    return (
        <AuthContext.Provider value={property}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;