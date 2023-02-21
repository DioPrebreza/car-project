import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/config";

const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {};
  return (
    <div>
      <h3>Signup</h3>
      <input
        type="email"
        placeholder="Email.."
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      />

      <button onClick={register}>Signup</button>

      <h3>Login</h3>
      <input
        type="email"
        placeholder="Email.."
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />

      <button>Login</button>

      <h3>User logged in:</h3>
      {/* {user.email} */}
    </div>
  );
};

export default Login;
