const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  label: { type: String, default: "" },
  url: { type: String, default: "" }
}, { _id: false });

const ComponentsSchema = new mongoose.Schema({
  header: {
    title: { type: String, default: "My Website" },
    image: { type: String, default: "" }
  },
  navbar: {
    type: [LinkSchema],
    default: [
      { label: "Home", url: "#" },
      { label: "About", url: "#" },
      { label: "Contact", url: "#" }
    ]
  },
  footer: {
    email: { type: String, default: "example@mail.com" },
    phone: { type: String, default: "+94 000 000 000" },
    address: { type: String, default: "Colombo, Sri Lanka" }
  },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Components", ComponentsSchema);
