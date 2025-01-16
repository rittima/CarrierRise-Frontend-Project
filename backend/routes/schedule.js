const express = require('express');
const Schedule = require('../models/Schedule'); 
const router = express.Router();

// Get tasks for a user
router.get('/schedule/:userId', async (req, res) => {
  try {
    const schedule = await Schedule.findOne({ userId: req.params.userId });
    res.json(schedule || { tasks: [] });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add or update tasks
router.post('/schedule', async (req, res) => {
  const { userId, tasks } = req.body;

  try {
    let schedule = await Schedule.findOne({ userId });
    if (schedule) {
      schedule.tasks = tasks;
      await schedule.save();
    } else {
      schedule = new Schedule({ userId, tasks });
      await schedule.save();
    }
    res.json(schedule);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
