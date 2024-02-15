import mongoose from "mongoose";

const Taskschema = new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const tasks = mongoose.model('task',Taskschema);
export default tasks;