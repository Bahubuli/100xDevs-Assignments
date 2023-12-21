const jwt = require("jsonwebtoken")
const { Admin, Course,User } = require("../db");
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer "))
        res.status(401).send("");

    const token = authHeader.split(" ")[1];

    try {
         const decoded = jwt.verify(token,"secret")
         const {username} = decoded;
         const user = await User.findOne({username});
         if(!user)   res.status(401).send("");

         req.user = user.username
         next();
    } catch (error) {
        res.status(401).send("");
    }
}

module.exports = userMiddleware;
