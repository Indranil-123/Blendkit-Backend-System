import express from 'express';
const attRouter = express.Router();
var attendCrtl = require('../controllers/attController')



attRouter.post('/markAttend',attendCrtl.markAttendence),
attRouter.get('/getAttend',attendCrtl.getAttendance)


export default attRouter;

