const mongoose = require('mongoose');
const {Schema} = mongoose;

const Schedule = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tasks: [
        {
        title: String,
        startTime: Date,
        endTime: Date,
        description: String,
        },
    ],
  });
   
  const ScheduleSchema = mongoose.model('schedule',Schedule);

  module.exports = ScheduleSchema;