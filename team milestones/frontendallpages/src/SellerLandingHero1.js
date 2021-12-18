import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
// Connect to the context (i.e, global state)
import {UserContext} from './UserContext';
import React, { useContext } from 'react';

function SellerLandingHero1(){

    const { firstName, lastName, email, avatar, updateUser } = useContext(UserContext);

    function logout() {
        updateUser(
            {
                ...{}
            }
        )
        localStorage.clear()
    }

    if (!localStorage.getItem('jsonwebtoken')) {
        return (<Redirect to="seller/sellerlogin" />)
    }
    else {
        return(
            <div id="sellerlh1">
            <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
          <div>
                <div className="container border border-5 border-secondary py-5" style={{maxWidth: 600 }}>
                    <h1>My Profile</h1>
                    <br></br>
                    <div>
                        <ul>
                            
                              <h3>FirstName :   {firstName} </h3>
                              <br></br>
                              <h5>LastName :   {lastName}</h5>
                              <br></br>
                              <h5>Email :   {firstName} </h5>
                              <br></br>
                            <h5>avatar :   {avatar}</h5>
                            <br></br>
                            <button onClick={logout} className="btn btn-danger">Update Profile</button>
                        </ul>
                    </div>
                    
                </div>  
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">It's time to shine</h1>
            <p className="col-lg-10 fs-4" style={{"color":"white"}}>Curabitur sollicitudin ultrices risus, ut ornare ante ullamcorper sed. Quisque vel sapien a massa aliquam porta. Etiam aliquet elit metus, vitae fermentum mauris efficitur eu. Sed quis lobortis lorem.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="/seller/productadd" className="btn">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add product</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
        }
}

export default SellerLandingHero1;