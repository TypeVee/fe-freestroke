import * as SQLite from "expo-sqlite";

function openDatabase() {
    const db = SQLite.openDatabase("db.db");
    return db;
  }
const db = openDatabase();

const saveLocation = (locationObject, database="savedLocations") => {
    db.transaction(
      (tx) => {
        tx.executeSql(`insert into ${database} (${(Object.keys(locationObject).join(', '))}) values (?)`, [locationObject.join(', ')]);
        tx.executeSql(`select * from ${database}`, [], (_, { rows }) =>
        JSON.stringify(rows)
        );
      },
      null,
      forceUpdate
    );}
const fetch = (database) =>{ //Async problems here
    db.transaction(
        (tx) => {
            tx.executeSql(`select * from ${database}`, [], (_, { rows }) =>
            {return JSON.stringify(rows)} //
            )
        }
    ), (err)=>console.log(err)
}

module.exports = {db, fetch, saveLocation}

/* Local databases
savedLocations --- User's saved locations
    |Name|Longitude|Latitude|Rating|
userData(?)
    |???|
*/

/* Other useful information

---Creating/checking for a table---
db.transaction((tx)=>{
        tx.executeSql(
            "create table if not exists testLocations (name text, latitude float, longitude float, rating float(1, 1))"
        )
        }

---Example of inserting testData---
db.transaction((tx)=>{
        tx.executeSql(
        `insert into testLocations (name, latitude, longitude, rating) 
        values ("Muddy Waters", 51.50131296461438, -0.14186528277796737, 0.5)`
        )
        }
*/