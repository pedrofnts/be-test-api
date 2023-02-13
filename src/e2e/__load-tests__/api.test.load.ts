import autocannon from "autocannon";
import express from "express";
import userRoute from "../../users/routes/user.routes";
import productRoute from "../../products/routes/product.routes";
import quoteRoutes from "../../quotes/routes/quote.routes";
import loadTestLogger from "../../utils/log4js";

async function loadTest() {
  const app = express();
  app.use(express.json());
  app.use("/users", userRoute);
  app.use("/products", productRoute);
  app.use("/quotes", quoteRoutes);

  app.listen(3003, () => console.log("Server is running on port 3003"));

  try {
    const instance = await autocannon({
      url: "http://localhost:3003/quotes/1",
      connections: 10,
      duration: 10,
    });

    loadTestLogger.info(
      `The average latency is ${instance.latency.average} ms.`
    );
    loadTestLogger.info(
      `The average requests per second is ${instance.requests.average} rps.`
    );
    loadTestLogger.info(`The total number of errors is ${instance.errors}`);
  } catch (error) {
    loadTestLogger.error(error);
  } finally {
    async function sleep(ms: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    await sleep(11000);

    loadTestLogger.debug("Server is closing on port 3003");
    process.exit(0);
  }
}

loadTest();
