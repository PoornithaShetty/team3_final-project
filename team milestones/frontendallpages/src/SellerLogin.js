import { useState } from "react";

function SellerLogin() {
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
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>Email address
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>Password
                  </div>
                  <div className="checkbox mb-3">
                      <input type="checkbox" value="remember-me"/> Remember me
                  </div>
                  <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                  <hr className="my-4"/>
                  <small className="text-light">By clicking Sign up, you agree to the terms of use.</small>
                </form>
              </div>
            </div>
          </div>
          </div>
    )
    
}

export default SellerLogin;