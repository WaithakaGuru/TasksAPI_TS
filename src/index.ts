import { app, config} from "./middlewares/TasksUtils.js";
import router from "./routers/tasks.router.js";
config();

const port = process.env.PORT || process.env.SERVER_PORT_NUMBER;

app.use("/", router);
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});