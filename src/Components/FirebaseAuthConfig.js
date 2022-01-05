// import React, { useState, useContext, useEffect } from "react";
// import { userAuthContext } from "../Context/context";

// import {
//   getAuth,
//   signOut,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

// import { auth } from "../Context/firebaseConfig";

// export const UserAuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // function signup(email, password) {
//   //   return createUserWithEmailAndPassword(auth, email, password);
//   // }
//   // console.log("this is signup function :", signup);

//   // const login = (email, password) => {
//   //   return signInWithEmailAndPassword(auth, email, password);
//   // };
//   // console.log("this is signup function :", login);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("Current User is :", currentUser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <userAuthContext.Provider value={{ auth, email, password, login }}>
//       {children}
//     </userAuthContext.Provider>
//   );
// };

// export const useUserAuth = () => {
//   return useContext(userAuthContext);
// };
// console.log("this is userAuthContext: ", userAuthContext);
