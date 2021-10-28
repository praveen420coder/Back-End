import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
      },
      username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
      },
      hash_password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ["user", "admin", "super-admin"],
        default: "user",
      },
      contactNumber: { type: String },
      pofilePicture: { type: String },
    },
    { timestamps: true }
  );


userSchema.virtual('password')
.set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
  });
  
userSchema.methods = {
    authenticate: async function (password) {
      return await bcrypt.compareSync(password, this.hash_password);
    },
  };
  


const User = mongoose.model('User', userSchema);

export default User;