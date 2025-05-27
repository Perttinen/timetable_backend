import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const userSchema = new mongoose.Schema({
  active: {
    default: true,
    type: Boolean,
  },
  password: {
    required: true,
    type: String,
  },
  userlevel: [
    {
      default: "User",
      type: String,
    },
  ],
  username: {
    required: true,
    type: String,
  },
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = String(returnedObject._id);
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.model("User", userSchema);
