import * as express from "express";
import DB from "../db";
import commentsRouter from "./comments";
import recycleCentersRouter from "./recycleCenters";
import materialsRouter from "./materials"

const router = express.Router();

router.use("/comments", commentsRouter);

router.use("/recycleCenters", recycleCentersRouter);

router.use("/materials", materialsRouter);


export default router;
