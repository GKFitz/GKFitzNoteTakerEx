const router = require("express").Router();
const path = require("path");



// HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content


//calls for the notes input page
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//calls if there was no call to anything else it goes to the home page
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;