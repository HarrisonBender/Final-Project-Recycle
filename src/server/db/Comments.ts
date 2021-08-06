import { Query } from "./index";

const all = async () => await Query(`
SELECT Comments.content, Users.name
FROM Comments
JOIN Users ON Comments.userid = Users.id;
`);


const one = async (id: string) => await Query(`
SELECT Comments.content, Users.name 
FROM Comments
JOIN Users ON Comments.userid = Users.id
WHERE Comments.id = ?;
`,[id]);


const post = (userid: string, content: string) => Query(`
INSERT INTO Comments (userid, content) values (?, ?)
`,[userid, content]);


export default {
  all,
  one,
  post
};
