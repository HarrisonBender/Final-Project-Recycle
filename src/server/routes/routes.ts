import * as express from "express";
import DB from "../db";
import commentsRouter from "./comments";
import recycleCentersRouter from "./recycleCenters";

const router = express.Router();

router.use("/comments", commentsRouter);

router.use("/recycleCenters", recycleCentersRouter);


export default router;
