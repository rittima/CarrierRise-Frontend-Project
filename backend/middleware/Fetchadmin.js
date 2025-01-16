const jwt = require('jsonwebtoken');
const JWT_SECRET = 'XRb6$s9';

const fetchadmin =(req,res,next)=>{
    //get the admin from the jwt token & id to request
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({error:"Please authenticate using a valid token !"});
    }
    try {
        //verify the token
        const data = jwt.verify(token,JWT_SECRET);
        
        // Ensure the token has the admin's ID
        if (!data.admin || !data.admin.id) {
            return res.status(400).json({ error: "Invalid token!" });
        }
  
        // Attach the admin data to the request object
        req.admin = data.admin;
        next();
        
    } catch (error) {
        res.status(401).send({error:"Please authenticate using a valid token !"});
    }
}

module.exports = fetchadmin;