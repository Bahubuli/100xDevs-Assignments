const { Router } = require("express");
const userRouter = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db/index")
// User Routes
const express = require("express");
const app = express();

userRouter.post('/signup',async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.create({username,password})
    res.send({message: 'User created successfully'});
});

userRouter.get('/courses', async(req, res) => {
   const courses = await Course.find({})
   res.send({courses:courses})
});

userRouter.post('/courses/:courseId', userMiddleware,async (req, res) => {
   const id = req.params.courseId;
   console.log(id)
   const course = await Course.findOne({_id:id})
   const {username,password} = req.headers;
   const user = await User.findOne({username});

   user.courses.push(course);
   await user.save();
   res.send({ message: 'Course purchased successfully' })
});

userRouter.get('/purchasedCourses', userMiddleware, async (req, res) =>
 {
    const {username,password} = req.headers;
    const user = await User.findOne({username})
    console.log(user)
    res.send({"purchasedCourses":user.courses})
});

module.exports = userRouter
