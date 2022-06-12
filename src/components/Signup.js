import React, {useRef} from 'react'
import { Form,Button, Card } from 'react-bootstrap'
import {Link} from "react-router-dom"

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
  
  return (

    <>

        <Card style={{ backgroundColor: "#fe7bb0",backgroundImage: "linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%)", paddingTop:"10px",  paddingBottom:"10px" }}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{fontSize:"20px"}}> Sign Up for <span style={{fontWeight:"900"}}>Some Motivation</span></h2>
          
          <Form >
            <Form.Group id="email" style={{marginTop:"10px"}}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password"   style={{marginTop:"10px"}}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm"   style={{marginTop:"10px"}}>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100"  type="submit" style={{backgroundColor: "#feae96", backgroundImage: "linear-gradient(315deg, #feae96 0%, #fe0944 74%)", marginTop:"20px"}}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2" style={{color:"black", fontWeight:"600"}}>
        Already have an account? <Link to="/login" style={{color:"black", fontWeight:"800", textDecoration:"none"}}>Log In</Link>
      </div>
    </>
  )
}
