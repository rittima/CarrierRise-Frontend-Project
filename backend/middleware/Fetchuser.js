const jwt = require('jsonwebtoken');
const JWT_SECRET = 'XRb6$s9';

const fetchuser =(req,res,next)=>{
    //get the user from the jwt token & id to request
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({error:"Please authenticate using a valid token !"});
    }
    try {
        //verify the token
        const data = jwt.verify(token,JWT_SECRET);
        
        // Ensure the token has the user's ID
        if (!data.user || !data.user.id) {
            return res.status(400).json({ error: "Invalid token!" });
        }
  
        // Attach the user data to the request object
        req.user = data.user;
        next();
        
    } catch (error) {
        res.status(401).send({error:"Please authenticate using a valid token !"});
    }
}

module.exports = fetchuser;