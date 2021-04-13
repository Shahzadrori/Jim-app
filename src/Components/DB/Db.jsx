import { openDB } from "idb";
export async function Database(regis) {
  const db1 = await openDB("db-data", 1, {
    upgrade(db) {
      db.createObjectStore("store1", {
        keyPath: "id",
      });
    },
  });
  console.log(regis)
  await db1
    .put("store1", { id: Number(regis.id), value: regis })
    .then((result) => {
      console.log("success!", result);
    })
    .catch((err) => {
      console.error("error: ", err);
    });
  db1.close();
}