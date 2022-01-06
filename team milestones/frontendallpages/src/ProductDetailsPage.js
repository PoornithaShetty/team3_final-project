import { useEffect, useState, useParams} from 'react';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import {UserContext} from './UserContext';


function ProductDetailsPage(props){
     useEffect(() =>{
       fetchItems();
   }, []);

   useEffect(() =>{
    fetchUsers();
}, []);
    const productId = props.match.params.productId
    
    const { firstName, lastName, email, avatar, updateUser } = useContext(UserContext);

    const [items, setItems] = useState([]);
 
     const fetchItems =async () => {
       const data = await fetch(`${process.env.REACT_APP_BACKEND}/product/${productId}`,
       {
           method: 'GET',
       }
        );
   const items = await data.json();
   setItems(items);
   };

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

        const [formState,setFormState] = useState("initial"); 

   const formData = new FormData();


    // attachFile() will append to formData the avatar file
       const attachFile = (evt) => {
    // Create an array from the file attachments
        const files = Array.from(evt.target.files);

    // For each attachment, append the file to formData
    files.forEach(
        (fileAttachment, index) => {
            formData.append(index, fileAttachment);
        }
    );
 }
 function addProduct(){
      
      formData.append('productName',items.productName);
      formData.append('productDescription',items.productDescription);
      formData.append('productPrice',items.productPrice);
      formData.append('userEmail',localStorage.email);
      formData.append('productavatar',items.avatar);
      //formData.append('productStock', productStockField.value);
      //formData.append('productCategory', productCategoryField.value);

      fetch(
          `${process.env.REACT_APP_BACKEND}/product/cartadd`,
          {
              method: 'POST',
              body: formData
          }
      )
      // The .json() method will convert a 'stringified' object to a JavaScript object
      .then(
          (backendResponseJson) => backendResponseJson.json()
      )
       // 2.1 If the submission is successful, set state to "successful"
      .then(
          (backendResponse) => {
              console.log(backendResponse.status);
              if (backendResponse.status === "ok") {
                  setFormState("successful");
              } else {
                  setFormState("unsuccessful");
              }
          }
      )
      // 2.2 If the submission is successful, set state to "unsucessful"
      .catch(
          (err) => {
              console.log(err);
              setFormState("unsuccessful");
          }
      );
}
   

    return(
          <div id="productdetails">  
          <div className="container py-5">
          <div className="card mb-3 border border-3 border-secondary" style={{"max-width": "540px;"}}>
          <div className="row g-0">
            <div className="col-md-4 py-2 px-2">
              <img src={items.avatar} className="img-fluid rounded-start" alt="..." width={400} height={300}/>
            </div>
            <div className="col">
              <div className="card-body">
                <h2 className="card-title">{items.productName}</h2>
                <p className="card-text">{items.productDescription}</p>
                <h5 className="card-text">Price : {items.productPrice}</h5>
                <div className="input-group mb-2">
            <select className="select_container" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>Choose Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            </div>
                {items.productStock > 0 && 
                <div>
                  <p className="card-text"><small className="text-muted">InStock</small></p>
                  { userdetails.map (userdetail => (
                      userdetail.email == email &&
                 <Link to={`/usercart/${userdetail._id}`} onClick={addProduct} className="btn btn-color text-white">Add To Cart</Link>
                  ))}
                 </div>
                }
                <ul className="nav col-5 col-lg-auto me-lg-auto py-4">
                  <li><p className="px-2">Fast Delivery</p></li>
                  <li><p className=" px-5" >Cash on Delivery</p></li>
                 </ul>
                 <h5> Shipping Info:</h5>
                 <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>

              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    )
}
export default ProductDetailsPage;