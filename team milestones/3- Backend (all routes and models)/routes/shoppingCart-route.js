const express = require('express');

const router = express.Router();

const ShoppingCartModel = require('../models/ShoppingCartModel.js');

router.get(
    '/cartitems', 
    function(req, res) {
        ShoppingCartModel.find().then(cartItems => {   
        res.status(200).json(cartItems)
    }
    ).catch(err => {
        res.status(400).send(`Recieving products failed. Error details: ${err.message}`);
    });
})


router.delete("/:product_id", function(req, res) {
    const formData = {
        'productName' : req.body.productName,
        'productDescription' : req.body.productDescription,
        'productPrice' : req.body.productPrice,
        'productQuantity' : req.body.productQuantity,
        'productImage' : req.body.productImage
    }
    ShoppingCartModel.findByIdAndDelete(req.params.product_id,formData)
    .then(formData => {
            res.status(200).json(`Product updated! Updated product details: ${formData}`);
            })
    .catch(err => {
        res.status(404).send(`Product not found. Error details: ${err.message}`);
    });
})
router.post(
    '/cartadd',
    function(req, res){
        const formData = {
            'productName' : req.body.productName,
            'productDescription' : req.body.productDescription,
            'productPrice' : req.body.productPrice,
            'productQuantity' : req.body.productQuantity,
            'productImage' : req.body.productImage,
            
        }

        // Check if email is unique
        ShoppingCartModel
        .findOne( {productName : formData['productName']} )
        .then(
            async function (dbDocument) {

                // If avatar file is included...
                if( Object.values(req.files).length > 0 ) {

                    const files = Object.values(req.files);
                    
                    // upload to Cloudinary
                    await cloudinary.uploader.upload(
                        files[0].path,
                        (cloudinaryErr, cloudinaryResult) => {
                            if(cloudinaryErr) {
                                console.log(cloudinaryErr);
                                res.json(
                                    {
                                        status: "not ok",
                                        message: "Error occured during image upload"
                                    }
                                )
                            } else {
                                // Include the image url in formData
                                formData.avatar = cloudinaryResult.url;
                                console.log('formData.avatar', formData.avatar)
                            }
                        }
                    )
                };

                // If email is unique...
                if(dbDocument) {
                                    ShoppingCartModel
                                    .create(formData)
                                    // If successful...
                                    .then(
                                        function(createdDocument) {
                                            // Express sends this...
                                           res.json({
                                               status: "ok",
                                               createdDocument
                                            });
                                        }
                                    )
                                    // If problem occurs, the catch the problem...
                                    .catch(
                                        function(dbError) {
                                            // For the developer
                                            console.log('An error occured during .create()', dbError);

                                            // For the client (frontend app)
                                            res.status(503).json(
                                                {
                                                    "status": "not ok",
                                                    "message": "Something went wrong with db"
                                                }
                                            )
                                        }
                                    )
                }
            }
        )
        .catch(
            function(dbError) {

                // For the developer
                console.log(
                    'An error occured', dbError
                );

                // For the client (frontend app)
                res.status(503).json(
                    {
                        "status": "not ok",
                        "message": "Something went wrong with db"
                    }
                )
            }

)
        }
)

    module.exports = router;