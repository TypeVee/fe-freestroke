import { StyleSheet, Text, View, TextInput, ScrollView, Platform, Button, TouchableOpacity } from 'react-native';
import * as SQLite from "expo-sqlite";
import {useEffect, useState} from 'react'
const {db, fetch, saveLocation } = require('../../localStorage/database')

export default function MyAccount() {
  db.transaction((tx)=>{ //Creates database and puts some testdata in
    tx.executeSql(
        "create table if not exists testLocations (name text, latitude float, longitude float, rating float(1, 1))"
    )
    tx.executeSql(
        `insert into testLocations (name, latitude, longitude, rating) 
        values ("Muddy Waters", 51.50131296461438, -0.14186528277796737, 0.5)`
    )
}, (err)=>console.log(err), (res)=>console.log("Database up with data"))
  
 
  function checkDB () { //Need to deal with async/promises for getting this data
    fetch('testLocations').then((res)=>{console.log(res)})
  }
  
    return (
      <View>
        <Text>SQLite Below</Text>
        <Text></Text>
        <>
          <ScrollView>
            <Button onPress={checkDB} title="Check Database"/>
          </ScrollView>
        </>
      </View>
    );
  }

  