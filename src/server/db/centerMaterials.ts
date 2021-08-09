import { Query } from "./index";

const all = async (id: string) => Query(`
SELECT * FROM centerMaterials`);

const one = (id: string) => Query(`
SELECT * FROM centerMaterials WHERE materials.id = ?;
`,[id]);

const getCenter = ( id: string) => Query (`
 select recycleCenters.name, recycleCenters.addr, recycleCenters.hours, recycleCenters.countyid 
from recycleCenters
join centermaterials on recycleCenters.id = centerid
where centerMaterials.materialsid = ?
`, [id])


export default {
  all,
  one,
  getCenter
};
