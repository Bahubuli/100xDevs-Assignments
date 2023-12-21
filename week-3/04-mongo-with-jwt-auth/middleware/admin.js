// Middleware for handling auth
const jwt = require("jsonwebtoken")
const { Admin, Course } = require("../db");
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer "))
        res.status(401).send("");

    let token = authHeader.split(" ")[1];

    try {
         const decoded = jwt.verify(token,"secret")
         const {username} = decoded;
         const admin = await Admin.findOne({username});
         if(!admin)   res.status(401).send("");

         req.user = admin
         next();
    } catch (error) {
        console.log(error)
        res.status(401).send("");
    }

}

module.exports = adminMiddleware;
