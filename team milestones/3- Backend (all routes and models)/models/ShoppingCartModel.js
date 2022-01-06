const mongoose=require('mongoose');

//Create the schema
const ShoppingCartSchema = new mongoose.Schema(
    {
        productName:{
            type: String,
            required: true
        },
        userEmail:{
            type:String,
            required: true
        },
        productDescription:{
            type: String,
            required: true
        },
        productPrice:{
            type:String,
            required: true
        },
        productCategory:{
            type:String,
            required: false
        },
        productQuantity:{
            type: String,
            required: false
        },
        productAvatar:{
            type:String,
            required:false
        }
    
        }
)

//Create the model
 const ShoppingCartModel = mongoose.model('carts', ShoppingCartSchema);
 
//Export the model
  module.exports = ShoppingCartModel;
