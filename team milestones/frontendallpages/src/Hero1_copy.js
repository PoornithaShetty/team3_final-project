import { Link } from 'react-router-dom';
import { useState } from "react";
import hero from './hero.png'

function Hero1() {
    return(
        <div id="hero1-bg-dark">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row g-rg-5 py-5">
              <div className="col-rg-7 text-end text-rg-start">
                <h1 className="display-4 fw-bold lh-1 mb-3" style={{"color":"white"}}>Shop local</h1>
                <p className="col-rg-10 fs-4" style={{"color":"white"}}>Curabitur sollicitudin ultrices risus. Quisque vel sapien a massa aliquam porta. Etiam aliquet elit metus, vitae fermentum mauris efficitur eu. Sed quis lobortis lorem.</p>
                <Link to="/register" className="btn">
                <button type="button" className="btn btn-color btn-lg text-light ps-5 pe-5">Sign up</button>
                </Link>
              </div>
            </div>
          </div>
          </div>
    )
    
}

export default Hero1;