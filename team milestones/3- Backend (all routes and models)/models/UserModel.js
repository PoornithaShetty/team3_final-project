const mongoose=require('mongoose');

//Create the schema
const UserSchema = new mongoose.Schema(
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
        },
        cartitems:{
            type: Object,
            required : false,
            productName:{
                type: String,
                required: true
            },
            productDescription:{
                type: String,
                required: true
            },
            productPrice:{
                type: String,
                required: true
            },
            productavatar: {
                type: String,
                required: false
            }

        }
        
    }
)

//Create the model
 const UserModel = mongoose.model('users', UserSchema);

//Export the model
  module.exports = UserModel;
