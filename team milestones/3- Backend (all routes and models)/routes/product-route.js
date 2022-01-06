const express = require('express');

const router = express.Router();
const cloudinary = require('cloudinary').v2;
const ProductModel = require('../models/ProductModel.js');
const ShoppingCartModel = require('../models/ShoppingCartModel.js');

router.get(
    '/:productCategory/productlist', 
    function(req, res) {
        ProductModel.find().then(products => {
        res.status(200).json(products);
    }).catch(err => {
        res.status(400).send(`Recieving products failed. Error details: ${err.message}`);
    });
})

router.get(
    '/productlist', 
    function(req, res) {
        ProductModel.find().then(products => {
        res.status(200).json(products);
    }).catch(err => {
        res.status(400).send(`Recieving products failed. Error details: ${err.message}`);
    });
})

router.get(
    '/cartitems', 
    function(req, res) {
        ShoppingCartModel.find().then(products => {
        res.status(200).json(products);
    }).catch(err => {
        res.status(400).send(`Recieving products failed. Error details: ${err.message}`);
    });
})

router.get(
    '/:product_id', 
    function(req, res) {
        ProductModel.findById(req.params.product_id).then(products => {
        res.status(200).json(products);
    }).catch(err => {
        res.status(400).send(`Recieving products failed. Error details: ${err.message}`);
    });
})

router.post( '/productadd',
    function(req, res) {

        // Client (browser, postman) POSTs this...
        const formData = {
            'productName': req.body.productName,
            'productDescription': req.body.productDescription,
            'productPrice': req.body.productPrice,
            'productStock': req.body.productStock,
            'productCategory': req.body.productCategory,
        }

        // Check if email is unique
        ProductModel
        .findOne()
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
                                    ProductModel
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
);


router.post( '/cartadd',
    function(req, res) {

        // Client (browser, postman) POSTs this...
        const formData = {
            'productName': req.body.productName,
            'productDescription': req.body.productDescription,
            'productPrice': req.body.productPrice,
            'productStock': req.body.productStock,
            'productCategory': req.body.productCategory,
            'productQuantity' : req.body.productQuantity,
            'userEmail' : req.body.userEmail,
        }

        // Check if email is unique
        ShoppingCartModel
        .findOne()
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
);

router.post("/:product_id", function(req, res) {
    const formData = {
        'productName' : req.body.productName,
        'productDescription' : req.body.productDescription,
        'productPrice' : req.body.productPrice,
        'productStock' : req.body.productStock,
        'productImage' : req.body.productImage
    }
    ProductModel.findByIdAndUpdate(req.params.product_id,formData,{new: true})
    .then(formData => {
            res.status(200).json(`Product updated! Updated product details: ${formData}`);
            })
    .catch(err => {
        res.status(404).send(`Product not found. Error details: ${err.message}`);
    });
})


router.post(
    "/:product_id", 
    function(req, res) {
    const formData = {
        'productName' : req.body.productName,
        'productDescription' : req.body.productDescription,
        'productPrice' : req.body.productPrice,
        'productStock' : req.body.productStock,
        'productImage' : req.body.productImage
    }
    ProductModel.findByIdAndUpdate(req.params.product_id,formData,{new: true})
    .then(formData => {
            res.status(200).json(`Product updated! Updated product details: ${formData}`);
            })
    .catch(err => {
        res.status(404).send(`Product not found. Error details: ${err.message}`);
    });
})

router.delete("/:product_id", function(req, res) {
    const formData = {
        'productName' : req.body.productName,
        'productDescription' : req.body.productDescription,
        'productPrice' : req.body.productPrice,
        'productStock' : req.body.productStock,
        'productImage' : req.body.productImage
    }
    ProductModel.findByIdAndDelete(req.params.product_id,formData)
    .then(formData => {
            res.status(200).json(`Product updated! Updated product details: ${formData}`);
            })
    .catch(err => {
        res.status(404).send(`Product not found. Error details: ${err.message}`);
    });
})

    module.exports = router;