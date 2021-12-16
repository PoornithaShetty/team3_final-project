import { useEffect, useState } from 'react';
import heart from './heart.svg';
import candleholder from './candle-holders.png';
import clock1 from './clock1.png';
import product1 from './product1.png';
import romanvases from './romanvases.png'



function HomeDecorPage(){

const [products, setProducts] = useState({
        productNameField: '',
        productDescriptionField: '',
        productPriceField: '',
        productStockField: '',
        productSizeField: '',
        productImageField: ''
})
       
    //    formData.append('productName', productNameField.value);
    //    formData.append('productDescription', productDescriptionField.value);
    //    formData.append('productPrice', productPriceField.value);
    //    formData.append('productStock', productStockField.value);
    //    formData.append('productSize', productSizeField.value);
   useEffect(() =>{
       fetch(
            `${process.env.REACT_APP_BACKEND}/product/productlist`,
            {
                method: 'GET',
            }
        )
        .then(
           (backendResponse) => {
               if (backendResponse === "ok") {
                   return backendResponse.json
               }})
            .then (jsonRes => setProducts(jsonRes))
           }
       )
       // 2.2 If the submission is successful, set state to "unsucessful"
       return(
        <div className=" px-4" id="homedecor-bg">
            <h2 className="pb-2 py-2 text-bold border-bottom">Home Decor</h2>

            <div className="row  row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-2">
            {
                // (productState === "successful") &&
                (!products.length==0) &&
                (products).map(product =>
            <div className="col">
            <div className="card">
                <div className="d-flex flex-column h-50 text-shadow-1">
                        {/* {
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
                    </li> */}
                    <img src={product.productImageField} className="card-img-top" alt="..." width="80" height="250"/>
                    <div className="card-body">
                    <p className="card-text"></p>
                    <p className="card-text">{product.productNameField}</p>
                    <p className="card-text">{product.productDescriptionField}</p>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-3">
                        <small>Price:{product.productPriceField}</small>
                    </li>
                        if(product.productStockField&gt0)
                    <li className="d-flex align-items-center">
                        <small>Instock</small>
                    </li>
                    else   
                    <li className="d-flex align-items-center">
                        <small> Out of Stock</small>
                    </li>
                    </ul>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                    </div>
                    </div>
            </div>
            </div>
            )
            }
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
