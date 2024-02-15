import express from 'express';

const route = express.Router();
import {addtask,gettask,toggletaskdone,updatetask,deletetask} from '../controller/task-controller.js'


route.post('/tasks',addtask)
route.get('/tasks',gettask)
route.get('/tasks/:id',toggletaskdone)
route.put('/tasks/:id',updatetask)
route.delete('/tasks/:id',deletetask)


export default route;