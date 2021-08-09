import * as express from "express";
import DB from "../db";

const router = express.Router();

router.get("/:id?", async (req, res) => {
  const id = req.params.id;
  //get one material
  if (id) {
    try {
      let centerMaterials = await DB.centerMaterials.one(id);
      res.json(centerMaterials);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    //get all materials
    try {
      let centerMaterials = await DB.centerMaterials.all(id);
      res.json(centerMaterials);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
});

export default router;
