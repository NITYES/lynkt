const mongoose=require('mongoose');
const {schema}=mongoose.Schema;

const categorySchema=new schema({
    name:String,
    slug:{
        type:String,
        index:true
    },
    parentId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Category"
    }
})

