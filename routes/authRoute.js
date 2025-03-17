import express from 'express';
const userRouter = express.Router();
var authCrtl = require('../controllers/authController')
const {restrictToLoggedIn} = require('../middleware/auth')

userRouter.get('/register',authCrtl.UserRegister);
userRouter.post('/login',authCrtl.UserLogin);
userRouter.get('/dashboard',restrictToLoggedIn,authCrtl.Dashboard);



export default userRouter;