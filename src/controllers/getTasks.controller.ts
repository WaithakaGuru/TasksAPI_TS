import { Response, Request } from "express";
import { role } from "../middlewares/TasksUtils";

export async function getTasks(_req: Request, res: Response){
    try{
        const tasks = await role.tasks.findMany();
        if(tasks && tasks.length > 0) res.status(200).json(tasks);
        else res.status(404).json({message: "Empty: No Records Found!!"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error !! :("});
    }
}