const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel.js');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET

router.post( '/register',
    function(req, res) {

        const formData = {
            'firstName': req.body.firstName,
            'lastName': req.body.lastName,
            'email': req.body.email adress,
            'password': req.body.password,
            
        }
        UserModel
        .findOne( { email: formData['email']} )
        .then(
            function (dbDocument) {

                if(!dbDocument) {
           
                    bcryptjs.genSalt(

                        function(bcryptError, theSalt) {
                            bcryptjs.hash( 
                                formData.password,                  
                                theSalt,                            
                                function(hashError, theHash) {   
                             formData['password'] = theHash;
                                    UserModel
                                    .create(formData)
                                   .then(
                                        function(createdDocument) {
                                           res.json(createdDocument);
                                        }
                                         )
                         
                                    .catch(
                                        function(dbError) {
                                            console.log('An error occured during .create()', dbError);
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
                        }
                    )

                }

                else { 
                    // reject the request
                    res.status(403).json(
                        {
                            "status": "not ok",
                            "message": "Account already exists"
                        }
                    )
                }
            }
        )
        .catch(
            function(dbError) {

                console.log(
                    'An error occured', dbError
                );

                
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





module.exports = router;
 

            
