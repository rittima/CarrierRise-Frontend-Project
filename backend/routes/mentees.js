const express = require("express");
const router = express.Router();
const Mentees = require("../models/Mentees");
const Consultant = require("../models/Consultant");
const fetchuser = require('../middleware/Fetchuser');
const { body, validationResult } = require("express-validator");

//ROUTER 1 :get the mentees details : GET. Login required
router.get('/get', fetchuser, async (req, res) => {
    try {
        const mentees = await Mentees.find({user: req.user.id});
        res.json(mentees)
    } catch (error) { 
        console.error(error.message);
        res.status(500).send("Internal error !")
    }
});

//ROUTER 1 :get all the consultants details : GET. Login required
router.get('/getConsultant', fetchuser, async (req, res) => {
    try {
        const consultants = await Consultant.find();
        res.json(consultants)
    } catch (error) { 
        console.error(error.message);
        res.status(500).send("Internal error !")
    }
});

//ROUTER 2 :add consultants details : POST. login required
router.post("/add", fetchuser, [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("branch", "Enter a valid batch").isLength({ min: 2 }),
    body("colleage", "Enter a valid colleage name").isLength({ min:1}),
], async (req, res) => {
    try {
        const { name, email, branch, colleage } = req.body;
        
        // If there are validation errors, return bad request
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }
        
        // Check if the consultant already exists for the current user
        const existingMentees = await Mentees.findOne({ user: req.user.id });
        if (existingMentees) {
            return res.status(400).json({ error: "Mentees details have already been added." });
        }

        // If not exists, create a new Consultant
        const mentees = new Mentees({
            name,
            email,
            branch,
            colleage,
            user: req.user.id // assuming req.user.id is the logged-in user/user
        });
        
        const savedMentees = await mentees.save();
        res.json(savedMentees);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;