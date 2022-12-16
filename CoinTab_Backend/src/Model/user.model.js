const mongoose=require("mongoose");

// User schema
const UserSchema = new mongoose.Schema(
    {
      first: { type: String, required: true },
      last: { type: String, required: true },
      email: { type: String, required: true },
      address:{type:String,required:true},
      balance:{type:Number,required:true}
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  // User Model
   const User = mongoose.model("User", UserSchema);

  module.exports= User;