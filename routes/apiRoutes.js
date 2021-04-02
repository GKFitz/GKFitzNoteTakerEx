const router = require("express").Router();
const store = require("../db/db.json");
var path = require("path");
const fs= require("fs");
const { v4: uuidv4 } = require('uuid');


//API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//this saves notes and joins it to the db.json file
router.get("/notes", (req, res) => {
    res.status(200).json(store);
    
});
// API POST Requests
//   Below code handles when a user submits a form and thus submits data to the server.
//   In each of the below cases, when a user submits form data (a JSON object)
//   ...the JSON is pushed to the appropriate JavaScript array
//   (ex. User writes a note... this data is then sent to the server...
//   Then saves the data to db

// create new note- takes in a json
router.post("/notes", (req, res) => {
    const notes= JSON.parse(fs.readFileSync ("./db/db.json"));
    // console.log(notes.length)
    const newNote= {
        title:req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
   // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
});

// router.delete("api/notes/:id",(req, res) => {

    
// });

module.exports = router;