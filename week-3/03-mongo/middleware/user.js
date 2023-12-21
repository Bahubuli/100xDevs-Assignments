
const { Admin, Course,User } = require("../db");
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const {username,password} = req.headers;
    console.log(username,password)
    const user = await User.findOne({username});
    req.user = user
    if(user && user.password===password)
    next();
    else
    res.status(401).send("");
}

module.exports = userMiddleware;
