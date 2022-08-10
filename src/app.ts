import router from "./routes";
import e from "express";

// Create Express server
const app: e.Application = e();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(e.json())

app.use(router)

export default app;
