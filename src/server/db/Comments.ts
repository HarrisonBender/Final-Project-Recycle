import { Query } from "./index";

const all = () => Query("SELECT * FROM Comments");
const one = (id: string) =>
  Query(`SELECT * FROM Comments WHERE Comments.id = ?`, [id]);



export default {
  all,
  one,
};
