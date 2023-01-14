import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import { login, logout, selectUser } from "./features/userSlice";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { auth, provider } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed in
        // console.log(user);
        dispatch(
          login({
            uid: user.uid,
            photo: user.photoURL,
            name: user.displayName,
            email: user.email,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
