const mongoose = require('mongoose');


const shiftSchema = mongoose.Schema(
  {
    Date: Date,
    StartingHour: Int,
    EndingHour: Int,
  },
  { versionKey: false }
);

const ShiftS = mongoose.model('shift', shiftSchema, 'shifts');

module.exports = ShiftS;
