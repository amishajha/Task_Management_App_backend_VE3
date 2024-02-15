import { response } from 'express';

import tasks from '../model/task.js';


export const addtask = async (request, response) => {

    try {
        const newTask = await tasks.create({
            data: request.body.data,
            createdAt: Date.now()
        })

        await newTask.save();
        return response.status(200).json(newTask)

    } catch (error) {

        return response.status(500).json(error.message);

    }


}



export const gettask = async (request, response) => {

    try {
        const task = await tasks.find({}).sort({ 'createdAt': -1 })

        return response.status(200).json(task);


    } catch (error) {

        return response.status(500).json(error.message);

    }


}

export const toggletaskdone = async (request, response) => {

    try {
        const taskref = await tasks.findById(request.params.id);
        const task = await tasks.findOneAndUpdate(

            { _id: request.params.id },
            {done: !taskref.done }



        )
        await task.save();

        return response.status(200).json(task);


    } catch (error) {

        return response.status(500).json(error.message);

    }


}

export const updatetask = async (request, response) => {

    try {

       await tasks.findOneAndUpdate(

            { _id: request.params.id },
            {
                data: request.body.data
            }




            
        )

        //we are fetching the updated object and sending the response to the frontend
        const task = await tasks.findById(request.params.id);

        return response.status(200).json(task);


    } catch (error) {

        return response.status(500).json(error.message);

    }


}

export const deletetask = async (request, response) => {

    try {

     const task =  await tasks.findByIdAndDelete(request.params.id )

        //we are fetching the updated object and sending the response to the frontend
       

        return response.status(200).json(task);


    } catch (error) {

        return response.status(500).json(error.message);

    }


}