import { Response, Request } from "express";
import { role } from "../middlewares/TasksUtils";

export async function getSingleTask(req: Request, res: Response){
    const id = req.params.id;
    try{
        const task = await role.tasks.findUnique({
            where:{id}
        })
        if(task) res.status(200).json(task);
        else res.status(404).json({message: "Empty: No such Record Found!!"})
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal Server Error !! :("});
    }
}