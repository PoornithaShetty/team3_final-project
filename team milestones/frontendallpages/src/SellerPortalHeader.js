import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SellerPortalHeader(props)
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
 <div className="px-2 py-1 text-white" id="SellerPortalheader-bg-color">
 <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
     </a>
     <h2>mahala محلة</h2>  
 <div className="text-end me-auto position-absolute top-0 end-0">
     
     <Link to="/" className="btn px-3 text-white">Home</Link>

     <Link to="/seller/register" className="btn px-3 text-white">Seller Register</Link>

     </div> 
 </div>
 </div>
</header>
    )
}
export default SellerPortalHeader;
