import express from "express";
import { quoteController } from "../factories/quote.factory";

const quoteRoutes = express.Router();

quoteRoutes.post("/:id", quoteController.createQuote.bind(quoteController));

export default quoteRoutes;
