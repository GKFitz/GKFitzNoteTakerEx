const path = require("path");
const express = require("express")

// HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

//calls for the notes input page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//calls if there was no call to anything else it goes to the home page
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});