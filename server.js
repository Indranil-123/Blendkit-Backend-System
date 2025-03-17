const express = require('express');
var bodyParser = require('body-parser');
// var UserCrtl = require('./controllers/UserController.js')
// var cookieParser = require('cookie-parser')
// const {restrictToLoggedIn} = require('./middleware/auth.js');
// require('./models/config.js')
import cors from 'cors'
var authRouter = require('./routes/authRoute')


const app = express();
app.use(bodyParser.json())
app.use(cookieParser())


app.get('/',function (req,res){
    res.send("Home Page");
})


// api endpoints
app.use("/api/auth", authRouter)
app.use("/api/hms", adminRouter)
app.use("/api/attendance", doctorRouter)




app.listen(3000,() =>{
    console.log("App is running on : https://localhost:3000/");
})