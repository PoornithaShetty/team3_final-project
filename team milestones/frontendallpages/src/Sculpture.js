import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heart from './heart.svg';



function Sculpture(){

   useEffect(() =>{
       fetchItems();
   }, []);
     
    const pathname = window.location.pathname

     const category = pathname.split(`/`)
    
     const productCategory = category.at(1)
     
    const [items, setItems] = useState([]);
 
     const fetchItems =async () => {
       const data = await fetch(`${process.env.REACT_APP_BACKEND}/product/${productCategory}/productlist`,
       {
           method: 'GET',
       }
        );
   const items = await data.json();
   setItems(items);
   };
       // 2.2 If the submission is successful, set state to "unsucessful"
       return(
        <div className=" px-4" id="paintings-bg">
             { items.map (item => (
                
                     item.productCategory == "Sculpture" &&
                
            <><h2 className="pb-2 py-2 text-bold border-bottom">Sculpture</h2><div className="row  row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-2">
                             <div className="col">
                                 <div className="card">
                                     <div className="d-flex flex-column h-50 text-shadow-1">
                                         <img src={item.productImage} className="card-img-top" alt="..." width="80" height="250" />
                                         <div className="card-body">
                                             <p className="card-text"></p>
                                             <p className="card-text">{item.productName}</p>
                                             <ul className="d-flex list-unstyled mt-auto">
                                                 <li className="d-flex align-items-center me-3">
                                                     <small>Price:{item.productPrice}</small>
                                                 </li>
                                             </ul>
                                             <Link to={`/${item._id}`} className="btn btn-color text-white">View Details</Link>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             </div></>
                             )
                             )
             }
                    </div>
    )
}
export default Sculpture;
