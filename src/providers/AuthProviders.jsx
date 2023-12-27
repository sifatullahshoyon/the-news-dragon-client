import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [loading , setLoading] = useState(true);
  const [user , setUser] = useState(null);

  const createUser = (email , password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth , email , password);
  };

  const signIn = (email , password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth , email , password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth , (loggedUser) => {
        console.log('logged in user inside auth state observer' , loggedUser);
        setUser(loggedUser);
        setLoading(false);
      });

      return () => {
        unSubscriber();
      };

  } , []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
