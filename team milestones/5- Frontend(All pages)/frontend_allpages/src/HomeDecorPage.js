import { useState } from 'react';
import heart from './heart.svg';
import candleholder from './candle-holders.png';
import clock1 from './clock1.png';
import product1 from './product1.png';
import romanvases from './romanvases.png'



function HomeDecorPage(){

const [formState, setFormState] = useState("initial");

let productNameField;
let productDescriptionField;
let productPriceField;
let productStockField;
let productSizeField;
let productImageField;

const formData = new FormData();

const [errorsState, setErrorsState] = useState([]);

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

function homedecor()
{
       setFormState("loading");
       setErrorsState([]);
      
       
    //    formData.append('productName', productNameField.value);
    //    formData.append('productDescription', productDescriptionField.value);
    //    formData.append('productPrice', productPriceField.value);
    //    formData.append('productStock', productStockField.value);
    //    formData.append('productSize', productSizeField.value);

       fetch(
           `${process.env.REACT_APP_BACKEND}/product/productlist`,
           {
               method: 'GET',
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
        <div className=" px-4" id="homedecor-bg">
            <h2 className="pb-2 py-2 text-bold border-bottom">Home Decor</h2>

            <div className="row  row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-2">
            <div className="col">
            <div className="card">
                <div className="d-flex flex-column h-50 text-shadow-1">
                        {
                            formState === "successful" &&
                        <div
                        className="alert alert-success user-success">
                        Item added to wishlist successfully!
                        </div>
                        }

                     <li className="me-auto position-absolute top-0 end-0">
                     {
                        formState !=="successful" &&
                        <img type="button" onClick={homedecor} src={heart} alt="wishlist" width="32" height="32" className=" circle border border-white"/>
                     }
                    </li>
                    

                    <img ref={
                        function(theInputElement) {
                            productImageField = theInputElement;
                        }
                    } src={productImageField} className="card-img-top" alt="..." width="80" height="250"/>
                    <div className="card-body">
                    <p className="card-text"></p>
                    <p ref={
                        function(theInputElement) {
                            productNameField = theInputElement;
                        }
                    } className="card-text">{productNameField}</p>
                    <p ref={
                        function(theInputElement) {
                            productDescriptionField = theInputElement;
                        }
                    } className="card-text">{productDescriptionField}</p>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li ref={
                        function(theInputElement) {
                            productPriceField = theInputElement;
                        }
                    } className="d-flex align-items-center me-3">
                        <small>Price:{productPriceField}</small>
                    </li>
                    <li ref={
                        function(theInputElement) {
                            productStockField = theInputElement;
                        }
                    } className="d-flex align-items-center">
                        <small>{productStockField}</small>
                    </li>

                    </ul>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
            </div>
            </div>

            {/* <div className="col">
            <div className="card">
                <div className="d-flex flex-column h-100 text-shadow-1">
                     <li className="me-auto position-absolute top-0 end-0">
                        <img type="button" src={heart} alt="Bootstrap" width="32" height="32" className=" circle border border-white"/>
                    </li>
                    <img src={clock1} className="card-img-top" alt="..." width="80" height="250"/>
                    <div className="card-body">
                    <p className="card-text">Candle holder</p>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-3">
                        <small>Price:</small>
                    </li>
                    <li className="d-flex align-items-center">
                        <small>5d</small>
                    </li>

                    </ul>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
            </div>
            </div>

            <div className="col">
            <div className="card">
                <div className="d-flex flex-column h-100 text-shadow-1">
                     <li className="me-auto position-absolute top-0 end-0">
                        <img type="button" src={heart} alt="Bootstrap" width="32" height="32" className=" circle border border-white"/>
                    </li>
                    <img src={candleholder} className="card-img-top" alt="..." width="80" height="250"/>
                    <div className="card-body">
                    <p className="card-text">Candle holder</p>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-3">
                        <small>Price:</small>
                    </li>
                    <li className="d-flex align-items-center">
                        <small>5d</small>
                    </li>

                    </ul>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
            </div>
            </div>

            <div className="col">
            <div className="card">
                <div className="d-flex flex-column h-100 text-shadow-1">
                     <li className="me-auto position-absolute top-0 end-0">
                        <img type="button" src={heart} alt="Bootstrap" width="32" height="32" className=" circle border border-white"/>
                    </li>
                    <img src={romanvases} className="card-img-top" alt="..." width="80" height="250"/>
                    <div className="card-body">
                    <p className="card-text">Candle holder</p>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-3">
                        <small>Price:</small>
                    </li>
                    <li className="d-flex align-items-center">
                        <small>5d</small>
                    </li>

                    </ul>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
            </div>

            </div>
            <div className="col">
            <div className="card">
                <div className="d-flex flex-column h-100 text-shadow-1">
                     <li className="me-auto position-absolute top-0 end-0">
                        <img type="button" src={heart} alt="Bootstrap" width="32" height="32" className=" circle border border-white"/>
                    </li>
                    <img src={candleholder} className="card-img-top" alt="..." width="80" height="250"/>
                    <div className="card-body">
                    <p className="card-text">Candle holder</p>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-3">
                        <small>Price:</small>
                    </li>
                    <li className="d-flex align-items-center">
                        <small>5d</small>
                    </li>

                    </ul>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
            </div>
            </div> */}

            
        </div>
        </div>
    )
}
export default HomeDecorPage;
