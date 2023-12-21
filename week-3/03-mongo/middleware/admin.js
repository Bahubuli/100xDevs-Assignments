// Middleware for handling auth
const { Admin, Course } = require("../db");
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {username,password} = req.headers;
    console.log(username,password)
    const admin = await Admin.findOne({username});
    console.log(admin)
    if(admin && admin.password===password)
    next();
    else
    res.status(401).send("")
}

module.exports = adminMiddleware;
