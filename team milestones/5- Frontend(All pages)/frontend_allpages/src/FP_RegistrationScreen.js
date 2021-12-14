import { useState } from "react";

function FP_RegistrationScreen(){

    const [formState,setFormState] = useState("initial"); 

    function registerUser(){
        
    }
    return(
        <div id="registration-bg" className="py-5">
        <div className="container border border-5 border-secondary" style={{"margin-top": "0em", "max-width": "35em"}}>
            
            <h1>Sign Up</h1>
            <br/>

            <label>Enter your firstname *</label>
            <input className="field form-control" name="firstName" type="text" />

            <label>Enter your lastname *</label>
            <input className="field form-control" name="lastName" type="text" />

            <label>Enter your email *</label>
            <input className="field form-control" name="email" type="text" />

            <label>Enter a password *</label>
            <input className="field form-control" name="password" autocomplete="off" type="password" />

            <label>Enter your phone (optional)</label>
            <input className="field form-control" name="phone" type="text" />

            <br/><br/>

            <label>Upload your profile picture</label>
            <input className="field form-control" id="photo" name="file" type="file" multiple="multiple"/>

            <br/><br/>

            <label>Do you agree to terms &amp; conditions? *</label>
            <input className="checkbox" name="termsConditions" type="checkbox" /> Yes

            <br/><br/>

            <div style={{"display": "none"}}
            className="alert alert-danger user-errors">
            </div>

            {
                formState === "successful" &&
            <div
            className="alert alert-success user-success">
            You have registered successfully!
            </div>
            }

            <br/>

            {
                formState !=="successful" &&
            <button 
            className="btn btn-primary"
            onClick={registerUser}
            style={{"padding": "10px", "font-size": "16px"}}>
                Register
            </button>
            }
        </div>
        </div>
    )
}

export default FP_RegistrationScreen;