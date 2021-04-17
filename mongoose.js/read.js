const Product=require('./product');

module.exports.getProduct=()=>{
   return Product.findById({"productDetail.color":"red"}).exec((error,data)=>{
        if(error) throw error;
        return data;
    });
}