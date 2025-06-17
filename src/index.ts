import { config } from "./middlewares/TasksUtils";
import router from "./routers/tasks.router";
config();

router.use("/tasks");