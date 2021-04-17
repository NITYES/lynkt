const mongoose=require('mongoose');
const {schema}=mongoose.Schema;
const bcrypt=require('bcrypt');

const userSchema=new schema({
    name:{
        type:String,
        max:50
    },
    password:{
        type:String
    }
    
})

userSchema.pre("save", async function (next){

    if (!this.isModified("password")) {
        return next();
      }
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  });

module.exports=mongoose.model('User',userSchema);