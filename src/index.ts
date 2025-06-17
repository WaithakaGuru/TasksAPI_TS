import { app, config} from "./middlewares/TasksUtils.js";
import router from "./routers/tasks.router.js";
config();

const port = process.env.PORT || 4330;

app.use("/", router);
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});