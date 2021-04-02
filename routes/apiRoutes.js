const router = require("express").Router();

// API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User writes a note... this data is then sent to the server...
  // Then saves the data to db

// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

router.get("api/notes", function (req, res) {
    return res.json(db);
});

// create new note- takes in a json
router.post("api/notes", function (req, res) {
   // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newNote = req.body;

  console.log(newNote);

  // We then add the json the user sent to the character array
  characters.push(newNote);

  // We then display the JSON to the users
  res.json(newNote);
});

// router.delete("api/notes/:id", function (req, res) {
    
// });

module.exports = router;