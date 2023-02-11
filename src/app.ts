import express from "express";
import userRoute from "./users/routes/user.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoute);

app.listen(3000, () => console.log("Server is running on port 3000"));
