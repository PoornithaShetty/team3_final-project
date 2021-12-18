const mongoose=require('mongoose');

//Create the schema
const PaintingSchema = new mongoose.Schema(
    {
        productName:{
            type: String,
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
        productStock:{
            type: String,
            required: true
        },
        productCategory:{
            type: String,
            required: true
        },
        productImage:{
            type:String,
            required:false
        }
    
        }
)

//Create the model
 const PaintingModel = mongoose.model('paintings', PaintingSchema);

//Export the model
  module.exports = PaintingModel;
