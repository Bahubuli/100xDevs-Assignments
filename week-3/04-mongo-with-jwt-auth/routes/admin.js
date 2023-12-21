const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const adminRouter = Router();
const jwt = require("jsonwebtoken")
const express = require("express");
const app = express();
// Admin Routes
adminRouter.post('/signup', async (req, res) => {

    const {username,password} = req.body;
    const admin = await Admin.create({username,password})
    res.send({ message: 'Admin created successfully' })

});
adminRouter.post('/signin', async (req, res) => {
    const {username,password} = req.body;
    const admin = await Admin.findOne({username})
    if(admin && admin.password===password)
    {
         const token = jwt.sign({username:username},"secret")
         res.send({ token: token })
    }
    else
        res.status(401).send("")

});

adminRouter.post('/courses', adminMiddleware, async(req, res) => {
    const {title,description,price,imageLink} = req.body;
    const course = await Course.create({title,description,price,imageLink})
    res.send({message: 'Course created successfully', courseId: course._id})
});

adminRouter.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({})
    res.send({courses:courses})
});

module.exports = adminRouter;
