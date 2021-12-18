import { useState } from "react";

function Seller_AddHomeDecorProduct(){

     // formState: (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsuccessful
    const [formState,setFormState] = useState("initial"); 

            let productNameField;
            let productDescriptionField;
            let productPriceField;
            let productStockField;
            let productCategoryField;
            let checkBox;
            let avatarInput;

        // FormData is a constructor for creating an object
        // that works like an HTML form element
        const formData = new FormData();

        // errorsState is for tracking the validation errors
        const [errorsState, setErrorsState] = useState([]);

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


    function createProduct(){
        const errors = [];
        
        // 1. Validate all of the required fields
        if( productNameField.value.length === 0 ) {
            errors.push("Please enter your product name");
        }
        if( productDescriptionField.value.length === 0 ) {
            errors.push("Please enter your Product Description");
        }
        if( productPriceField.value.length === 0 ) {
            errors.push("Please enter product price");
        }
        if( productStockField.value.length === 0 ) {
            errors.push("Please enter product stock value");
        }
        if( checkBox.checked === false ) {
            errors.push("Please accept the terms & conditions");
        }

        // 1.1 If there are errors, set the state to "validationFailed"
        if(errors.length > 0) {
            setFormState("validationFailed");
            setErrorsState(errors);
        }

        // 1.2 If there are no errors, set the state to "loading"
        else {
            setFormState("loading");
            setErrorsState([]);
           
            
            formData.append('productName', productNameField.value);
            formData.append('productDescription', productDescriptionField.value);
            formData.append('productPrice', productPriceField.value);
            formData.append('productStock', productStockField.value);
            formData.append('productCategory', productCategoryField.value);

            fetch(
                `${process.env.REACT_APP_BACKEND}/product/homedecorproductadd`,
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
    }
    return(
        <div id="sellerproductadd-bg" className="py-5">
        <div className="container border border-5 border-secondary" style={{"margin-top": "0em", "max-width": "35em"}}>
            
            <h1>Add Product</h1>
            <br/>

            <label>Enter Product Name *</label>
            <input ref={
                function(theInputElement) {
                    productNameField = theInputElement;
                }
            }className="field form-control" name="productName" type="text" />

            <label>Enter Product Description *</label>
            <input ref={
                function(thisInputField) {
                    productDescriptionField = thisInputField;
                }
            } className="field form-control" name="productDescription" type="text" />

            <label>Enter Product Price *</label>
            <input ref={
                function(thisInputField) {
                    productPriceField = thisInputField
                }
            }className="field form-control" name="productPrice" type="text" />

            <label>Enter Product stock *</label>
            <input ref={
                function(thisInputField) {
                    productStockField = thisInputField
                }
            }className="field form-control" name="productStock"  type="text" />

            {/* <label>Enter Product Category </label>
            <input ref={
                function(thisInputField) {
                    productCategoryField = thisInputField
                }
            }className="field form-control" name="productCategory" type="text" /> */}
            <br/>
            <div className="input-group">
            <select ref={
                function(thisInputField) {
                    productCategoryField = thisInputField
                }
            } className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>Choose Category</option>
                <option value="1">Home Decor</option>
                <option value="2">Painting</option>
            </select>
            </div>
            <br/><br/>

            <label>Upload product Image</label>
            <input ref={(element)=>{ avatarInput = element}} 
            onChange={attachFile} className="field form-control" id="photo" name="file" type="file" multiple="multiple"/>

            <br/><br/>

            <label>Do you agree to terms &amp; conditions? *</label>
            <input ref={
                function(thisCheckbox) {
                    checkBox = thisCheckbox;
                }
            }className="checkbox" name="termsConditions" type="checkbox" /> Yes

            <br/><br/>

            
            {
                formState !== "loading" &&
                <div>
                    <button 
                    onClick={createProduct}
                    className="btn btn-primary"
                    style={{"padding": "10px", "font-size": "16px"}}>
                        Add Product
                    </button><br/><br/>
                </div>
            }

            {
                formState === "validationFailed" &&
                <div className="alert alert-danger">

                    <ul>
                        {
                            errorsState.map(
                                (error) => {
                                    return <li>{error}</li>
                                }
                            )
                        }
                    </ul>

                </div>
            }

{
                formState === "successful" &&
                <div className="alert alert-success">Your product has been added successfully</div>
            }

            {
                formState === "unsuccessful" &&
                <div className="alert alert-danger">An error occured. Please try again.</div>
            }

            {
                formState === "loading" &&
                <p>Loading...</p>
            }
        </div>
        </div>
    )
}

export default Seller_AddHomeDecorProduct;