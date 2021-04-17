const mongoose=require('mongoose');
const {schema}=mongoose.Schema;
const {ObjectId}=mongoose.SchemaTypes


const productDetailSchema=new schema({
    description:String,
    color:string,
    price:Number,
})

const productSchema=new schema({

   name:{
       type:String,
       text:true
   },
   slug:{
       type:String,
       index:true,
       text:true
   },
   images:[{imageUrl:String}],
   category:{
       type:String,
       text:true
   },
   subCategory:{
       type:String,
       text:true
   },
   productDetail:productDetailSchema,
   quantity:Number,
   sold:{
       type:Number,
    default:0
},
    ratings:[{star:Number,userId:{type:ObjectId,ref:"User"}}]

},{timeStamps:true})


module.exports=mongoose.model('Product',productSchema)