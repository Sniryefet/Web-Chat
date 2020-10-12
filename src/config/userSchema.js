import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);
export default User;
