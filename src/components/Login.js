import React, { useRef } from "react";
import { useUserContext } from "../contexts/UserContext";


const Login = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  
  const { signInUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };



  return (
    <>
    <div className="form">
      <h2> Login For <span>Some Motivation</span> </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
      </form>
    </div>
   
    </>
  );
};


export default Login;