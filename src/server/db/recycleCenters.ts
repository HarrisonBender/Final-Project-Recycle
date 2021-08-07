import { Query } from "./index";

const all = () => Query(`
SELECT * FROM recycleCenters
`);

const one = (id: string) => Query(`
SELECT * FROM recycleCenters WHERE recycleCenters.id = ?
`, [id]);

export default {
  all,
  one,
};
