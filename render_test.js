let express = require('express')
let app = express();
let express = require('express');
let firebase = require('firebase')
var firebaseConfig = {
    apiKey: "AIzaSyDxCLJkEfGrDxup6-ROtrYbC_m7ocgqllE",
    authDomain: "nodejs-class-practice.firebaseapp.com",
    databaseURL: "https://nodejs-class-practice.firebaseio.com",
    projectId: "nodejs-class-practice",
    storageBucket: "nodejs-class-practice.appspot.com",
    messagingSenderId: "1015240617673",
    appId: "1:1015240617673:web:a1c2928cbe704d4baa2718",
    measurementId: "G-KHL0Y789PP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let app = express();
app.set('view engine', 'ejs');
app.get('/', async(req, res) => {
    let data = await db.collection("classA").get();
    let userArr = [];
    data.docs.forEach((doc)=>{
        userArr.push(doc.data().name);
    })
    res.render("default", {
        users= userArr,
        // users: ["Alice", "Bob", "Fisheep", "Fiona"],
         title: "This is root page!"
    })
})
app.listen(3000, () => {
    console.log("render_test server is running at http://127.0.0.1:3000")
})