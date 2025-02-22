const mongoose = require('mongoose');


const shiftSchema = mongoose.Schema(
  {
    Date: { type: String, required: true },
    StartingHour: { type: Number, required: true },
    EndingHour: { type: Number, required: true },
    Employees: [{ type: String }]
  },
  { versionKey: false }
);

const ShiftS = mongoose.model('shift', shiftSchema, 'shifts');

module.exports = ShiftS;
