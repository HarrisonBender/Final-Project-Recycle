import * as express from "express";
import DB from "../db";
import commentsRouter from "./comments";
import recycleCentersRouter from "./recycleCenters";
import materialsRouter from "./materials"
import contactformRouter from "./contactform";

const router = express.Router();

router.use("/comments", commentsRouter);

router.use("/recycleCenters", recycleCentersRouter);

router.use("/materials", materialsRouter);

router.use("/contactform", contactformRouter);


export default router;
