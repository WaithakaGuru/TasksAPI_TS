import {getSingleTask, getTasks,  updateTask, deleteTask, createTask } from "../controllers/controllers.exports";
import { Router } from "express";
const router = Router()

router.get("/", (_req, res)=>{res.send("Welcome to the Home Page")});
router.get("/tasks", getTasks);
router.get("/tasks/:id", getSingleTask);
router.post("/tasks", createTask)
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
export default router