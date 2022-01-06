import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function FP_Navbar1()
{
    return(
    <nav className="container border-bottom border-top" >
     <div className=" d-flex flex-wrap" id="nav-bg" >
     <ul className="nav me-auto" >
     <li className="nav-item">
                    <a href="/sculpture" className="nav-link link-secondary px-2">Sculptures |</a>
                </li>
         <li className="nav-item"><a href="/glassart" className="nav-link link-secondary px-2">Glass Art |</a></li>
         <li className="nav-item"><a href="/paintings" className="nav-link link-secondary px-2">Painting |</a></li>
         <li className="nav-item"><a href="/prints" className="nav-link link-secondary px-2">Prints |</a></li>
         <li className="nav-item"><a href="/mixedmediaandcollage" className="nav-link link-secondary px-2">Mixed Media and Collage |</a></li>
         <li className="nav-item"><a href="dollsandminiatures" className="nav-link link-secondary px-2">Dolls and Miniatures </a></li>
     </ul>
     </div>
 </nav>
    )
}
export default FP_Navbar1;