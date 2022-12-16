const mongoose=require("mongoose");

// User schema

const UserSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      cover: { type: String, required: true },
      userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
      artistId:[{type:mongoose.Schema.Types.ObjectId,ref:"Artist"}],
      rating:{type:String}
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  // User Model
  
  const User = mongoose.model("User", UserSchema);

  module.exports= User;