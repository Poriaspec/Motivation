import React, { useState } from "react";
import SignIn from "./Login";
import Signup from "./Signup";
import { signInWithGoogle } from "../firebase";
import GoogleButton from "react-google-button";


const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <SignIn /> : <Signup />}
      <p onClick={toggleIndex} className="newUser" style={{textAlign:"center"}} >
        {!index ? "New user? Click here " : "Already have an account? Log In"}
        <p style={{textAlign:"center", color:"black"}}>or</p>
      <GoogleButton
            className="g-btn"
            type="dark"
            onClick={signInWithGoogle}
          />
      </p>
    </div>
  );
};

export default Auth;