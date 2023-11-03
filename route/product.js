const express=require('express');
const router=express.Router();
const Product=require('../modle/product');



router.get('/products' ,  async(req,res)=>{
    const product= await Product.find({});
    res.send(product)
})



module.exports=router;