import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cart from './cart.png'

function FP_Header1(props)
{
    const [state, setState] = useState({})

    useEffect(
        function() {
            setState(
                {
                    // Use spread syntax to copy a new blank object
                    ...{}, 
                    // Overwrite with new key-value pair, where the key 
                    // is the current path
                    [props.path]: 'active'
                }
            )
        },
        [props.path]
    )

    return(
 <header className="p-0" style={{"padding":"0px"}}>
 <div className="px-2 py-1 text-white" id="FP_header1-bg-color">
 <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
     </a>
     <h2>mahala محلة</h2>  

     <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

         <nav className="navbar navbar-expand-xxl navbar-dark" aria-label="Seventh navbar example"/>
             <div className="container-fluid"/>
     <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenus">
         <span className="navbar-toggler-icon"></span>
     </button>

     <div className="offcanvas offcanvas-start text-dark navbar-light bg-light" id="offcanvasMenus" style={{"width": "300px"}}>
         <div className="border-bottom" id="header-navbar-bg"> 
         <h2 className='text-dark'>mahala محلة</h2> 
             <h5 className="text-dark py-1"> Hello, Sign in</h5> 
             <button type="button" className="btn-close float-end text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>

         <ul className="navbar-nav p-2" id="header-navbar-bg">
            <li className="nav-item px-2">
            <Link to="/" className={`nav-link ${state['/']}`}>Home</Link>
             </li>
            <h6 className="nav-item px-2">All Categories</h6>
             <li className="nav-item px-4">
             <Link to="/homedecorpage" className={`nav-link ${state['/homedecorpage']}`}>HomeDecor</Link>
             </li><li className="nav-item px-4">
             <Link to="/paintings" className={`nav-link ${state['/paintings']}`}>Paintings</Link>
             </li>
             <li className="nav-item">
                 <a href="/aboutus" className="nav-link px-4">About Us</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Our Blog</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Our Services</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Templates</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Docs</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Our Projects</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Examples</a>
             </li>
             <li className="nav-item">
                 <a href="#" className="nav-link px-4">Discussions</a>
             </li>
         </ul>
     </div>
     </ul>

     <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
     <input type="search" className="form-control form-control-light" placeholder="Search..." aria-label="Search"/>
     </form>

 <div className="text-end">
     
     <Link to="/register" className="btn px-3">
     <button type="button" className="btn btn-primary">Sign Up</button>
     </Link>
     <Link to="/seller/sellerlogin" className="btn px-3 text-white">Seller Portal</Link>
     <Link to="/cart" className="px-3">
     <img src={cart} alt="Cart"/>
     </Link>

     </div> 
 </div>
 </div>
</header>
    )
}
export default FP_Header1;
