import express from "express";
import Form from "../models/Form.js";

const router = express.Router();

// Create new form entry
router.post("/", async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all form entries
router.get("/", async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
