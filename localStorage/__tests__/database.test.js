jest.useFakeTimers()
const {db, fetch, saveLocation } = require('../database')


describe('SQLite functions', () =>{
    console.log(db.transaction)
    db.transaction((tx)=>{
        tx.executeSql(
            "create table if not exists testLocations (name text, latitude float, longitude float, rating float(1, 1))"
        )
        console.log("How")
        tx.executeSql(
            "insert into testLocations (name, latitude, longitude, rating) values (?)", ["Muddy Waters", 51.50131296461438, -0.14186528277796737, 0.5]
        )
    })

    test('Fetch returns an array of items from the passed database name', () =>{
        // expect(Array.isArray(fetch('testLocations'))).toBe(true)
        expect(fetch('testLocations')).toEqual(["Muddy Waters", 51.50131296461438, -0.14186528277796737, 0.5])
        
    })
})