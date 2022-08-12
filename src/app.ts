import router from "./routes";
import e from "express";
import cors from "cors";

// Create Express server
const app: e.Application = e();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(e.json())

// CORS is disable for demo purposes
const options: cors.CorsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(options))

app.use(router)

export default app;
