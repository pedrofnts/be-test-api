import express from "express";
import userRoute from "./users/routes/user.routes";
import productRoute from "./products/routes/product.routes";
import quoteRoute from "./quotes/routes/quote.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/quotes", quoteRoute);

app.listen(3000, () => console.log("Server is running on port 3000"));
