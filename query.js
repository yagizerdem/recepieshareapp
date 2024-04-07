import sql from 'better-sqlite3';
const db = sql("meals.db")

function getAllMeals() {
  let list = db.prepare(`SELECT * FROM meals`).all();
  return list;
}

  function getById(id){
    let item = db.prepare(`SELECT * FROM meals WHERE id = (?);`).get(id)
    return item
  }
  function insertMeal(meal){
    db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
  }

module.exports = {getAllMeals , getById , insertMeal}
