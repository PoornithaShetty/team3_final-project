import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import trash from './trash.svg';
import React, { useContext } from 'react';
import {UserContext} from './UserContext';


function UserCart(props){
    useEffect(() =>{
        fetchItems();
    }, []);
    
    const userId = props.match.params.userId
    const { firstName, lastName, email, avatar, updateUser } = useContext(UserContext);
      
    const [userdetails, setUserdetails] = useState([]);
 
     const fetchUsers =async () => {
       const userdata = await fetch(`${process.env.REACT_APP_BACKEND}/user/get`,
       {
           method: 'GET',
       }
        );
   const userdetails = await userdata.json();
   setUserdetails(userdetails);
   };

    const [items, setItems] = useState([]);
 
     const fetchItems =async () => {
       const data = await fetch(`${process.env.REACT_APP_BACKEND}/product/cartitems`,
       {
           method: 'GET',
       }
        );
   const items = await data.json();
   setItems(items);
   };
       // 2.2 If the submission is successful, set state to "unsucessful"
       return(

        <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Shopping cart</h2>
        { items.map (item => (
            item.userEmail == email &&
        <div className="row g-4 py-4 row-cols-1 row-cols-lg-1 ">
          <div className="border border-3 border-secondary">
          <div className="col d-flex position-relative ">
                         <ul className="me-auto position-absolute top-40 end-0">
                            <img className=" circle border border-white" type="button" src={trash} alt="delete" width="32" height="32" />
                         
                        </ul> 
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3 py-4">
              <img src={item.avatar} width={250} height={250} alt="Product Image"/>
            </div>
            <div className="py-4">
              <h2>{item.productName}</h2>
              <p>{item.productDescription}</p>
              <p>{item.productPrice}</p>
            </div>
          </div>
        </div>
        </div>
        ))}
        <div className="col d-flex position-relative ">
        <div className='position-absolute top-40 end-0'>
        <a href="#" className="btn btn-color text-white">
                Buy Now
              </a>
        </div>
        </div>

      </div>
        )
}
export default UserCart;
