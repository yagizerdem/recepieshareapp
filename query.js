import sql from 'better-sqlite3';
const db = sql("meals.db")

function getAllMeals() {
  let list = db.prepare(`SELECT * FROM meals`).all();
  return list;
}

module.exports = {getAllMeals}
