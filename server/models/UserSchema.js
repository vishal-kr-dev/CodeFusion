import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roomId: {type: String, unique: true}
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
