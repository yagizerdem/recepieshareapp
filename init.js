const Database = require('better-sqlite3');
let db;
const fs = require('fs')

const seedData = require('./seedData.js');
const path = require('path');

function getFiles (){
    const filenames = fs.readdirSync(__dirname); 
    return filenames
}
const list = getFiles()
if(!list.includes('meals.db')){
    db = new Database('meals.db', { verbose: null })
    createTable()
    insertData()
    console.log(`database initialized`)
}else {
    console.log(`database has already crated`)
}

function createTable(){
    db.prepare(`
    CREATE TABLE IF NOT EXISTS meals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        summary TEXT NOT NULL,
        instructions TEXT NOT NULL,
        creator TEXT NOT NULL,
        creator_email TEXT NOT NULL
     )
 `).run();
}

function insertData(){
    const stm =  db.prepare(`
    INSERT INTO meals VALUES (
       null,
       @slug,
       @title,
       @image,
       @summary,
       @instructions,
       @creator,
       @creator_email
    )
 `);
    for(var obj of seedData)stm.run(obj)
}
