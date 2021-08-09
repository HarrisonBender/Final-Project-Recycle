import { Query } from "../index";

const all = () => Query("SELECT * FROM Comments");
const one = (id: string) =>
  Query(
    `SELECT Comments.content, Users.name 
FROM Comments
JOIN Users ON Comments.userid = Users.id
WHERE Comments.userid = ?`,
    [id]
  );



export default {
  all,
  one,
};
