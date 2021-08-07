// import * as express from "express";
// import DB from "../db";

// const router = express.Router();

// router.get("/:id?", async (req, res) => {
//   const id = req.params.id;
//   if (id) {
//     try {
//       let Users = await DB.Users.one(id);
//       res.json(Users);
//     } catch (e) {
//       console.log(e);
//       res.sendStatus(500);
//     }
//   } else {
//     try {
//       let Users = await DB.Users.all();
//       res.json(Users);
//     } catch (e) {
//       console.log(e);
//       res.sendStatus(500);
//     }
//   }
// });

// export default router;
