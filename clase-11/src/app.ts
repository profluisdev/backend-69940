import express from "express";
import router from "./routes/index.routes";
import { connectMongoDB } from "./config/mongo.config";
import { errorHandle } from "./errors/errHandle";

connectMongoDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use(errorHandle);
app.listen(8080, () => {
  console.log("Server in port 8080");
});
