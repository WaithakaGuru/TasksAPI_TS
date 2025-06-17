import { Request, Response } from "express";
import {role} from '../middlewares/TasksUtils.js'

export async function createTask(req: Request, res: Response){
    try{
        const {title, taskInfo} = req.body
        if(!title || !taskInfo) res.status(400).json({message: "Valid Task title and description are required"});
        else {
            const newTask = await role.tasks.create({
                data: {title, taskInfo }
            })
            if(newTask)res.send("Adding a new Task");
            else res.status(400).json({message: "Failed: Create a new Task !! :("});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error !! :("});
    }
}