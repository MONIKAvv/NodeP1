const express = require("express");
const connectDB = require('./config/db')
const {logReqRes} = require('./middlewares')
const userRouter = require('./routes/user')
// middleware

const app = express()
const PORT = 8000;
// middleware build in middleware
app.use(express.urlencoded({extended: false})) 
// req, res, next 
connectDB();

app.use(logReqRes('log.txt'));

// routes
app.use("/api/users", userRouter)

app.listen(PORT, () => {
  console.log(`Server Connected Successfully! at ${PORT}`);
})