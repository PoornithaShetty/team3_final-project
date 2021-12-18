const mongoose=require('mongoose');

//Create the schema
const SellerSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        phone:{
            type: String,
            required: false
        },
        avatar: {
            type: String,
            required: false
        }
    }
)

//Create the model
 const SellerModel = mongoose.model('seller', SellerSchema);

//Export the model
  module.exports = SellerModel;
