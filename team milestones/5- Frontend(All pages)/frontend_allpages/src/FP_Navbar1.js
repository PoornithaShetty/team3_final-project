import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function FP_Navbar1()
{
    return(
    <nav className="bg-light border-bottom" >
     <div className=" d-flex flex-wrap" id="nav-bg" >
     <ul className="nav me-auto" >
     <li className="nav-item">
                    <a href="#" className="nav-link link-dark px-5">Home</a>
                </li>
         <li className="nav-item"><a href="#" className="nav-link link-dark px-5">Features</a></li>
         <li className="nav-item"><a href="#" className="nav-link link-dark px-5">Pricing</a></li>
         <li className="nav-item"><a href="#" className="nav-link link-dark px-5">FAQs</a></li>
         <li className="nav-item"><a href="#" className="nav-link link-dark px-5">About</a></li>
     </ul>
     </div>
 </nav>
    )
}
export default FP_Navbar1;