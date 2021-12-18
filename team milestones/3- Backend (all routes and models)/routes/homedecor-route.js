const express = require('express');

const router = express.Router();

const HomeDecorModel = require('../models/HomeDecorModel.js');
const cloudinary = require('cloudinary').v2;

router.get(
    '/homedecorproductlist', 
    function(req, res) {
        HomeDecorModel.find().then(products => {
        res.status(200).json(products);
    }).catch(err => {
        res.status(400).send(`Recieving products failed. Error details: ${err.message}`);
    });
})

router.post(
    '/homedecorproductadd',
    function(req, res){
        const formData = {
            'productName' : req.body.productName,
            'productDescription' : req.body.productDescription,
            'productPrice' : req.body.productPrice,
            'productStock' : req.body.productStock,
            'productCategory' : req.body.productCategory,
        }
        async function add () {
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
                       }
                   }
               )
           };
        }
        HomeDecorModel
        .create(formData)
        //if successfull
        .then(
            function(createdDocument) {
                // Express sends this...
               res.json({
                   status: "ok",
                   createdDocument
                });
            }
        )
        //If Problem occurs,
        .catch(
            function(dbError)
            {
                console.log("An error occured during .create()", dbError);
            }
        )
    //     let product = new HomeDecorModel(req.body);
    // product.save().then(product => {
    //     res.status(200).json({"product": `Product added successfully. Created product details: ${product}`});
    // })
    // .catch(err => {
    //     res.status(400).send(`Adding new product failed. Error details: ${err.message}`);
    // });
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
    HomeDecorModel.findByIdAndUpdate(req.params.product_id,formData,{new: true})
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
    HomeDecorModel.findByIdAndUpdate(req.params.product_id,formData,{new: true})
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
    HomeDecorModel.findByIdAndDelete(req.params.product_id,formData)
    .then(formData => {
            res.status(200).json(`Product updated! Updated product details: ${formData}`);
            })
    .catch(err => {
        res.status(404).send(`Product not found. Error details: ${err.message}`);
    });
})

    module.exports = router;