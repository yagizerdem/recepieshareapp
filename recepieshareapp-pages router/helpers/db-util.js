const sql = require("better-sqlite3");
const db = sql("meals.db");
function getAllRecepie() {
  let data = db.prepare(`SELECT * FROM Recipes;`).all();
  return data;
}
function getById(id) {
  let data = db.prepare(`SELECT * FROM Recipes WHERE id = ${id}`).get();
  return data;
}
function newRecord(data) {
  const insert = db.prepare(
    "INSERT INTO Recipes (title, slug ,image ,summary ,instructions ,creator,creator_email) VALUES (@title, @slug ,@image ,@summary ,@instructions ,@creator,@creator_email)"
  );
  insert.run(data);
}
module.exports = { getAllRecepie, getById, newRecord };
