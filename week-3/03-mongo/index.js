const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT =3000
app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});

// MONGO_URL=mongodb+srv://bahubali:1234@atlas.e5ndzzh.mongodb.net/Ecom-API?retryWrites=true&w=majority
