import { Link } from 'react-router-dom';
import { useState, useEffect, useContext} from 'react';
import {UserContext} from './UserContext';
import Graycart from './Graycart.png';
import heart from './heart.svg';
import profileimage from './profileimage.png'
import power from './power.svg'

function FP_Header(props)
{
    const { firstName, lastName, email, avatar, updateUser } = useContext(UserContext);
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
 <header className="p-0 container" style={{"padding":"0px"}}>
 <div className="px-2 py-1" id="FP_Header-bg-color">
 <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
     </a>
     <h2 className='Header_color'>MAHALA محلة</h2> 
     <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 ms-4 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-3 link-secondary">Home</a></li>
          <li><a href="/aboutus" class="nav-link px-3 link-secondary">About us</a></li>
          <li><a href="#" class="nav-link px-3 link-secondary">Shop</a></li>
          <li><a href="#" class="nav-link px-3 link-secondary">Blog</a></li>
        </ul>

     <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
     <input type="search" className="form-control form-control-light" placeholder="Search..." aria-label="Search"/>
     </form>
     {
         (!(localStorage.jsonwebtoken)) && 
                <div>
                <Link to="/login" className="btn px-2">
                <button type="button" className="btn btn-outline me-2 text-secondary">Login</button>
                </Link>
                <Link to="/register" className="btn px-2">
                <button type="button" className="btn btn-color text-light">Sign up</button>
                </Link>
            </div>

    }
    {   
        ((localStorage.jsonwebtoken)) && 
        <div className="text-end">
        <Link to="/productadd" className="btn px-2">
        <button type="button" className="btn btn-outline me-2 text-secondary">Add Product</button>
        </Link> 
        <Link to="/loggedout" className="px-2">
        <img type="button" src ={power} width={30}/>
        </Link> 
        </div>  
       
            
    }
    <div className="text-end">
     <Link to="/cart" className="px-2">
     <img src={profileimage} width={30} alt="wishlist"/>
     </Link>
     <Link to="/cart" className="px-2">
     <img src={heart} width={25} alt="wishlist"/>
     </Link>
     <Link to="/cart" className="px-2">
     <img src={Graycart} width={30} alt="Cart"/>
     </Link>
     </div>
     </div> 
 </div>    
</header>
    )
}
export default FP_Header;
