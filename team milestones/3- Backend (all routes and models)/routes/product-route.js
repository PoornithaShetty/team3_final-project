const express = require('express');

const router = express.Router();

const ProductModel = require('../models/ProductModel.js');

router.get(
    '/productlist', 
    function(req, res) {
        ProductModel.find().then(products => {
        res.status(200).json(products);
    }).catch(err => {
        res.status(400).send(`Recieving products failed. Error details: ${err.message}`);
    });
})

router.post(
    '/productadd',
    function(req, res){
        const formData = {
            'productName' : req.body.productName,
            'productDescription' : req.body.productDescription,
            'productPrice' : req.body.productPrice,
            'productStock' : req.body.productStock,
            'productImage' : req.body.productImage
        }
        // ProductModel
        // .create(formData)
        // //if successfull
        // .then(
        //     function(){
        //         //Express sends this...
        //         res.send("Product added successfully.");
        //     }
        // )
        // //If Problem occurs,
        // .catch(
        //     function(dbError)
        //     {
        //         console.log("An error occured during .create()", dbError);
        //     }
        // )
        let product = new ProductModel(req.body);
    product.save().then(product => {
        res.status(200).json({"product": `Product added successfully. Created product details: ${product}`});
    }).catch(err => {
        res.status(400).send(`Adding new product failed. Error details: ${err.message}`);
    });
    }

)

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