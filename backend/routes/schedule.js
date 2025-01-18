const express = require("express");
const router = express.Router();
const Schedule = require("../models/scheduleSchema");
const fetchuser = require('../middleware/Fetchuser');
const { body, validationResult } = require("express-validator");


// Add schedules
router.post(
    "/add",
    fetchuser,
    [
      body("Id", "Enter a valid Id").isNumeric(),
      body("StartTime", "Enter a valid StartTime").isISO8601().toDate(),
      body("EndTime", "Enter a valid EndTime").isISO8601().toDate(),
      body("Subject", "Subject is required").isString().notEmpty(),
    ],
    async (req, res) => {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const { Id, StartTime, EndTime, Subject } = req.body;
  
        // Create a new Schedule event
        const event = new Schedule({
          Id,
          StartTime,
          EndTime,
          Subject,
          user: req.user.id, // Assuming fetchuser adds `user` to `req`
        });
  
        // Save the event to the database
        const savedEvent = await event.save();
        res.json(savedEvent);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
      }
    }
  );

  //ROUTER 1 :get all the consultants details : GET. Login required
    router.get('/get', fetchuser, async (req, res) => {
        try {
            const event = await Schedule.find({user: req.user.id});
            res.json(event)
        } catch (error) { 
            console.error(error.message);
            res.status(500).send("Internal error !")
        }
    });


module.exports = router;
