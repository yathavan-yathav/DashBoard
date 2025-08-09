const express = require("express");
const router = express.Router();
const Components = require("../models/components");

// GET: fetch components (returns single doc; creates default if none)
router.get("/", async (req, res) => {
  try {
    let doc = await Components.findOne({});
    if (!doc) {
      doc = await Components.create({});
    }
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST: replace/update components (idempotent)
router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    // Try update existing doc (first doc), or create new
    let doc = await Components.findOne({});
    if (!doc) {
      doc = await Components.create(payload);
    } else {
      Object.assign(doc, payload, { updatedAt: Date.now() });
      await doc.save();
    }
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
