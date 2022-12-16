const mongoose=require("mongoose");

// User schema
const UserSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },

    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  // User Model
   const User = mongoose.model("User", UserSchema);

  module.exports= User;