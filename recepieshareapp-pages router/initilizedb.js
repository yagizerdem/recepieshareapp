const Database = require("better-sqlite3");
const fs = require("fs");
const db_name = `meals`;
const allRecepies = require("./seedData.js");
function init() {
  const flag = fs.existsSync(db_name.concat(".db"));
  if (flag) return; // db already exist

  const db = new Database(`${process.cwd()}\\${db_name.concat(".db")}`, {
    verbose: console.log,
  });
  console.log(`Database created successfully ... `);

  db.prepare(
    `
  CREATE TABLE Recipes (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
);

  `
  ).run();

  const insert = db.prepare(
    "INSERT INTO Recipes (title, slug ,image ,summary ,instructions ,creator,creator_email) VALUES (@title, @slug ,@image ,@summary ,@instructions ,@creator,@creator_email)"
  );
  const insertMany = db.transaction((items) => {
    for (const item of items) insert.run(item);
  });
  insertMany(allRecepies);
  console.log(`Data inserted successfully ... `);
}
module.exports = { init };
