import express, {Application} from "express";
import router from "./routes";

// Create Express server
const app: Application = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json())

app.use(router)

export default app;
