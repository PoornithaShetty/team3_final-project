import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
// Connect to the context (i.e, global state)
import { UserContext } from './UserContext';



// RegEx (Regular Expressions)
const validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const validatePassword = (password) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
  return re.test(password);
}

function Login() {
   // "initial", "sending", "successful", "unsuccessful"
   const [state, setState] = useState("initial");
   const { updateUser } = useContext(UserContext);
   
   // Declare undefined variables for later assignment (ref props)
   let emailField;
   let passwordField;

   // To instantiate a FormData object
   const formData = new FormData();

   const login = () => {

       const errors = [];

       // 1. Validate the fields
       if(emailField.value.length === 0) {
           errors.push("Please enter a valid email address");
       }
       if(passwordField.value.length === 0) {
           errors.push("Please enter a valid password");
       }

       // 1.1 If there are errors, set the state to "validation error"
       if(errors.length > 0) {
           setState("validation error");
       }
       // 1.2 If there are no errors, set the state to "sending"
       else {
           setState("sending");

           formData.append('email', emailField.value);
           formData.append('password', passwordField.value);

           fetch(`${process.env.REACT_APP_BACKEND}/user/login`, {
               method: 'POST',
               // headers: {"Content-Type": "application/json"},
               body: formData
           })
           // 2.1 If the submission is successful, set the state "successful"
           .then((backendResponse)=> backendResponse.json())
           .then((theJson)=>{
               console.log(theJson, theJson.message);

               updateUser(
                   {
                       jsonwebtoken: theJson.message.jsonwebtoken,
                       firstName: theJson.message.firstName,
                       lastName: theJson.message.lastName,
                       email: theJson.message.email,
                       avatar: theJson.message.avatar
                   }
               )
               setState("successful");
           })
           // 2.2 If the submission is unsuccessful, set the state "unsuccessful"
           .catch((error)=>{
               console.log(error);
               setState("unsuccessful");
           });
       }
   }

   if ( state === "successful" ) {
       return (
           <Redirect to="/landing"/>
       )
   } else {
    return(
        <div id="login-bg-dark" className='py-5'>
            <div className="container border border-5 border-secondary rounded-3" style={{"margin-top": "0em", "max-width": "30em"}}>
            
                <form className="p-4 p-md-5 text-dark">
                <h2 className="text-dark">Sign in to your account</h2>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input ref={ (elem)=>emailField = elem } type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input ref={ (elem)=>passwordField = elem } type="password" className="form-control" id="password" aria-describedby="password" />
                </div>
                <div className="checkbox mb-3">
                      <input type="checkbox" value="remember-me"/> Remember me
                  </div>
                {
                    state !== "sending" && state !== "successful" &&
                    <button 
                    onClick={login}
                    className="btn btn-primary mb-3" type="button">Submit</button>
                }

                { 
                    state === "validation error" &&
                    <div className="alert alert-danger" role="alert">
                        Incorrect email or password.
                    </div>
                }

                {
                    state === "unsuccessful" &&
                    <div className="alert alert-danger" role="alert">
                        Internal error. Please try again later.
                    </div>
                }

                {
                    state === "sending" &&
                    <p>Loading...</p>
                }
                  <hr className="my-4"/>
                  <small className="text-light">By clicking Sign up, you agree to the terms of use.</small>
                </form>
              </div>
              </div>
    )
    
}
}
export default Login;