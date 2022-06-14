import React, { useRef }from 'react'
import { useUserContext } from "../contexts/UserContext";

const ForgotPassword=()=> {

    const emailRef = useRef();
  
  const { forgotPassword } = useUserContext();
    
    const forgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if (email)
          forgotPassword(email).then(() => {
            emailRef.current.value = "";
          });
      };

  return (
    <>
     <div className="form">
      <form>
        <input placeholder="Email" type="email" ref={emailRef} />
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
    </div>
    </>
  )
}

export default ForgotPassword