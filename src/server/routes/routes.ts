import * as express from "express";
import DB from "../db";
import commentsRouter from "./comments";
import recycleCentersRouter from "./recycleCenters";
// import usersRouter from './users';

const router = express.Router();

router.use("/comments", commentsRouter);

router.use("/recycleCenters", recycleCentersRouter);

// router.use("/users", usersRouter);

export default router;
