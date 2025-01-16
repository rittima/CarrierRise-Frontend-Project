const express = require("express");
const router = express.Router();
const Consultant = require("../models/Consultant");
const fetchuser = require('../middleware/Fetchuser');
const { body, validationResult } = require("express-validator");

//ROUTER 1 :get all the consultants details : GET. Login required
router.get('/getConsultant', fetchuser, async (req, res) => {
    try {
        const consultants = await Consultant.find({user: req.user.id});
        res.json(consultants)
    } catch (error) { 
        console.error(error.message);
        res.status(500).send("Internal error !")
    }
});



//ROUTER 2 :add consultants details : POST. login required
    router.post("/addConsultant", fetchuser, [
        body("name", "Enter a valid name").isLength({ min: 5 }),
        body("email", "Enter a valid email").isEmail(),
        body("role", "Enter a valid role").isLength({ min: 2 }),
        body("company", "Enter a valid company name").isLength({ min: 5 }),
    ], async (req, res) => {
        try {
            const { name, email, role, company } = req.body;
            
            // If there are validation errors, return bad request
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(400).json({ error: error.array() });
            }
            
            // Check if the consultant already exists for the current user
            const existingConsultant = await Consultant.findOne({ user: req.user.id });
            if (existingConsultant) {
                return res.status(400).json({ error: "Consultant details have already been added." });
            }

            // If not exists, create a new Consultant
            const consultant = new Consultant({
                name,
                email,
                role,
                company,
                user: req.user.id // assuming req.user.id is the logged-in user/user
            });
            
            const savedConsultant = await consultant.save();
            res.json(savedConsultant);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    });

   

  //ROUTER 3 : Update consultants details : PUT. login required
router.put("/updateconsultants/:id",fetchuser,
    async (req, res) => {
        const {id} = req.params;
        const {name,email,role,company}=req.body;
        try {
            //create new consultants
            const newConsultant ={};
            if (name) { newConsultant.name = name; };
            if (email) { newConsultant.email = email; };
            if (role) { newConsultant.role = role; };
            if (company) { newConsultant.company = company; };

            // Validate input
            if (!name || !email || !company || !role) {
            return res.status(400).json({ message: "All fields are required." });
            }

            //find the consultant to be updated & update it
            let consultant = await Consultant.findById(id);
            if (!consultant) {
                return res.status(404).json({error:"Consultant not found"})
            }
            if (consultant.user.toString() !== req.user.id) {
                return res.status(404).json({ error: "You are not authorized to update this consultant" })
            }
            consultant=await Consultant.findByIdAndUpdate(req.params.id,{$set:newConsultant},{new:true})
            res.json({consultant});
        } catch (error) {
            console.error("Error updating consultant:",error.message);
            res.status(500).j({ message: "Internal server error", error: error.message })    
        }        
    })
    
    //ROUTER 4 : Delete existing consultants details : DELETE. login required
    router.delete("/delete/:id",fetchuser,
    async (req, res) => {
        try {
            //find the consultant to be delete & delete it
            let consultant = await Consultant.findById(req.params.id);
            if (!consultant) {
                return res.status(404).send("not found")
            }
            //Allow delete only if user own it 
            if (consultant.user.toString() !== req.user.id) {
                return res.status(404).send("not allowed")
            }
            consultant=await Consultant.findByIdAndDelete(req.params.id)
            res.json({"Success": "Succesfully deleted , " ,"consultant id" :consultant.id});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal error !")
        }        
    })

  
module.exports = router;
