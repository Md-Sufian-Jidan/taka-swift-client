import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // after creating a user by email and password update it's name and photo url
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
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
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // get the token and set in the local storage
            if (currentUser) {
                const userEmail = { email: currentUser?.email };
                axiosPublic.post('/jwt', userEmail)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setIsLoading(false);
                        }

                    })
            }
            else {
                // console.log('current user ', currentUser);
                localStorage.removeItem('access-token');
                setIsLoading(false);
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic]);

    const property = { isLoading, user, setUser, createUser, updateUserProfile, signInUser, logOut }
    return (
        <AuthContext.Provider value={property}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;