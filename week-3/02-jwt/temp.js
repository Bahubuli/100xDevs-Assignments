const {z} = require("zod");
const jwt = require("jsonwebtoken")

const userSchema = z.object({
    username:z.string().email(),
    password:z.string().min(6)
})

function signJwt(username, password) {
    try {
      const validateUser = userSchema.parse({username,password});
      const token = jwt.sign({username,password},"secret")
      return token
    } catch (error) {
        return null
    }
 }

console.log(signJwt("jitendra@gmail.com","123456"))
