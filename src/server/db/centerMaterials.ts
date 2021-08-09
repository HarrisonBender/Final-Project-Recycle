import { Query } from "./index";

const all = async (id: string) => Query(`
SELECT * FROM centerMaterials`);

const one = (id: string) => Query(`
SELECT * FROM centerMaterials WHERE materials.id = ?;
`,[id]);

export default {
  all,
  one,
};
