import express from "express";
import photoControler from "./controler";

const photoRouter = new express.Router();

photoRouter.get("/", photoControler.get);
photoRouter.get("/:id", photoControler.getById);
photoRouter.post("/", photoControler.post);

export default photoRouter;