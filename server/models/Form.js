import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("Form", formSchema);
