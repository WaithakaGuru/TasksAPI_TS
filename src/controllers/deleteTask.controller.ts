import { Response, Request } from "express";
import { role } from "../middlewares/TasksUtils.js";

export async function deleteTask(req: Request, res: Response){
    const id = req.params.id;
    try{
        const deleted = await role.tasks.delete({
            where:{id}
        })
        if(deleted) res.status(201).json({message: `Successfully deleted: Task with id ${id}`});
        else res.status(400).json({message: `Error deleting task id: '${id}'`})
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error !! :("});
    }
}