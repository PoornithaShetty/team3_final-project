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

function SellerLogin() {
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

           fetch(`${process.env.REACT_APP_BACKEND}/seller/sellerlogin`, {
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
           <Redirect to="/sellerlanding" />
       )
   } else {
    return(
        <div id="hero1-bg-dark">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
              <div className="col-lg-7 text-center text-lg-start">
                <h1 className="display-4 fw-bold lh-1 mb-3" style={{"color":"white"}}>Shop local</h1>
                <p className="col-lg-10 fs-4" style={{"color":"white"}}>Curabitur sollicitudin ultrices risus, ut ornare ante ullamcorper sed. Quisque vel sapien a massa aliquam porta. Etiam aliquet elit metus, vitae fermentum mauris efficitur eu. Sed quis lobortis lorem.</p>
              </div>
              <div className="col-md-10 mx-auto col-lg-5">
                <form className="p-4 p-md-5 border border-3 rounded-3 text-white">
                <h2 className="text-light"> Seller Login</h2>
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
          </div>
          </div>
    )
    
}
}
export default SellerLogin;