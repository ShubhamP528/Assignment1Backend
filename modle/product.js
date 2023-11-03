const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    desc:{
        type:String
    }
})

const product=mongoose.model('Product',productSchema);

module.exports=product; 