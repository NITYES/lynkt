const mongoose=require('mongoose');
const {schema}=mongoose.Schema;
const {ObjectId}=mongoose.SchemaTypes


const productDetailSchema=new schema({
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
     description:String,
   images:[{imageUrl:String}],
   category:{
       type:String,
   },
   subCategory:{
       type:String,
      
   },
   productDetail:productDetailSchema,
   quantity:Number,
   sold:{
       type:Number,
    default:0
},
    ratings:[{star:Number,userId:{type:ObjectId,ref:"User"}}]

},{timeStamps:true})

productSchema.index({
  name: 'text',
  description: 'text',
}, {
  weights: {
    name: 5,
    description: 1,
  },
});

module.exports=mongoose.model('Product',productSchema)
