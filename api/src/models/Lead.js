const mongoose = require("mongoose");
const validator = require("validator");

const LeadSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      require: true,
    },
    province: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    telephone: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    instagram: {
      type: String,
      require: true,
    },
    level: {
      type: String,
      enum: ["-","0", "1", "2", "incidencia"],
      required: true,
    },
    status: {
      type: String,
      enum: ["Sin contactar", "Rechazado", "Sin Contactar", "No Responde"],
      require: true,
    },
    statusoptions: {
      type: String,
      require: true,
    },
    statusoption: {
      type: String,
      require: true,
    },
    checked: {
      type: Boolean,
      require: true,
      default: false,
    },
    view: {
      type: Boolean,
      require: true,
      default: false,
    },
    deleted: {
      type: Boolean,
      require: true,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

LeadSchema.pre("find", function () {
  this.where({ deleted: false });
});

const Lead = new mongoose.model("lead", LeadSchema);

module.exports = Lead;
