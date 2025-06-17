import { Request, Response } from "express";
import { role } from "../middlewares/TasksUtils.js";

export async function updateTask(req: Request, res: Response){
    const id = req.params.id;
    const {title, taskInfo} = req.body
    try{
        const updatedTask = await role.tasks.update({
            data: {id, title, taskInfo},
            where:{id}
        })
        if(updatedTask) res.send(`Task id: ${id}`);
        else res.status(400).json({message: `Failed: Create to update task with id: ${id} !! :(`});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error !! :("});
    }
}