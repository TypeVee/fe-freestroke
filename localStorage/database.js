import * as SQLite from "expo-sqlite";

function openDatabase() {
    const db = SQLite.openDatabase("db.db");
    return db;
  }
const db = openDatabase();

async function createLocationTable(database="savedLocations", name, latitude, longitude, rating){
    return new Promise ((resolve, reject) =>{
        db.transaction(
            (tx) => {
                tx.executeSql(`create table if not exists ${database} (name text, latitude float, longitude float, rating float(1, 1))`, [],()=>{resolve()},(_, error) => {
                    reject(error)
                } )},    
                );
            },
        )}

async function saveLocation(database="savedLocations", name, latitude, longitude, rating){
    return new Promise ((resolve, reject) =>{
        db.transaction(
            (tx) => {
                tx.executeSql(`insert into ${database} (name, latitude, longitude, rating) 
                                values ("${name}", ${latitude}, ${longitude}, ${rating})`, [],(_, { rows }) =>{
                        const data = JSON.stringify(rows)
                        resolve(data)
                    },
                    (_, error) => {
                        reject(error)
                    });
            },
        )}
    )
}
async function fetch(database = "savedLocations") {
    return new Promise((resolve, reject) => {
        db.transaction(
        (tx) => {
            tx.executeSql(`select * from ${database}`,[],(_, { rows }) => {
                const data = JSON.stringify(rows)
                resolve(data)
            },
            (_, error) => {
                reject(error)
            })
        })
    })
    }


module.exports = {db, fetch, saveLocation, createLocationTable }

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