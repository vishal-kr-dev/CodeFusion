import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  users: [{ type: mongoose.Schema.Types.String, ref: "Users" }],
  content: {type: String}
});

const RoomModel = mongoose.model("Room", RoomSchema);
export default RoomModel;
