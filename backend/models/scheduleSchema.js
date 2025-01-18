const mongoose = require('mongoose');
const { Schema } = mongoose;

// const scheduleSchema = new Schema({
//     Id: Number,
//     StartTime: Date,
//     EndTime: Date,
//     Subject: String,
//   });

const scheduleSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  Id: {
    type: Number,
    required: true,
  },
  StartTime: {
    type: Date,
    required: true,
  },
  EndTime: {
    type: Date,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },
  IsAllDay: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Schedule = mongoose.model('schedule', scheduleSchema);

module.exports = Schedule;
