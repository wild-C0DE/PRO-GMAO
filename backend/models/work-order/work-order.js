const mongoose = require("mongoose");
//*********Schema******** */
const Schema = mongoose.Schema;
const Work = new Schema({
  // numberWorkOrder: { 
  //   type: Number, unique: true, auto-inc 
  // },
  date: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
  nameOfTheIntervention: {
    type: String,
    required: true,
  },
  typeOfIntervention: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
  supplierName: {
    type: String,
    required: true,
  },
  machine: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
  agent: {
    type: String,
    required: true,
  },
  depertment: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  equipmentUsed: {
    type: String,
    required: true,
  },
});
// Model
 const WorkOrder = mongoose.model("WorkOrder", Work);
module.exports = WorkOrder;
