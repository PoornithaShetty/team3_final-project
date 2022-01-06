import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heart from './heart.svg';
import suncatcher from './suncatcher.png';
import wallart1 from './wallart1.png';
import pullover from './pullover.png';
import sculpture1 from './sculpture1.png'


function Features2(){
    useEffect(() =>{
        fetchItems();
    }, []);
      
     const pathname = window.location.pathname
 
      const category = pathname.split(`/`)
     
      const productCategory = category.at(1)
      
     const [items, setItems] = useState([]);
  
      const fetchItems =async () => {
        const data = await fetch(`${process.env.REACT_APP_BACKEND}/product/productlist`,
        {
            method: 'GET',
        }
         );
    const items = await data.json();
    setItems(items);
    };
       return(
        <div className=" container px-4">
            <h2 className="pb-2 py-2 text-bold text-center Header_color">Crowd Favorites</h2>
            <p className='text-center Header_color'> Curabitur sollicitudin ultrices risus, ut ornare ante ullamcorper sed. Quisque vel sapien a massa aliquam porta.Sed quis lobortis lorem.</p>

            <div className="row  row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-2">
            { items.map (item => (
                item.productRating == 5 &&
                <div className="col">
                <div className="card">
                <div className="d-flex flex-column h-50 text-shadow-1">
                    <img src={item.avatar} className="card-img-top" alt="..." width="80" height="250"/>
                    <div className="card-body">
                    <p className="card-text"></p>
                    <p className="card-text">{item.productName}</p>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-3">
                        <small>Price:{item.productPrice}</small>
                    </li>
                    </ul>
                    <Link to={`/homedecor/${item._id}`} className="btn btn-primary">View Details</Link>
                    </div>
                    </div>
                </div>
                </div>
                ) 
            )
            }   
 </div>
        </div>
    )
}
export default Features2;
