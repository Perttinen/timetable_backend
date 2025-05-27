import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const testSchema = new mongoose.Schema({
  testString: String,
});

export default mongoose.model("Test", testSchema);
