const express = require('express'); // Import the express library
const bodyParser = require('body-parser'); // Import the body-parser library to parse request bodies
const date = require(__dirname + '/date.js'); // Import the date.js module

const app = express(); // Create an instance of the express application

const listItems = []; // Initialize an array to store list items
const workItems = []; // Initialize an array to store work items

app.set('view engine', 'ejs'); // Set the view engine to EJS

app.use(bodyParser.urlencoded({extended: true})); // Use body-parser middleware to parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from the "public" directory

app.get("/", function(req, res) { // Define a route for the root URL
  const day = date.getDate(); // Get the current date using the date.js module

  // Render the "list" view with the current date and list items
  res.render("list", {
    listTitle: day,
    listItems: listItems
  });
});

app.get("/work", function(req, res){ // Define a route for the "/work" URL
  // Render the "list" view with the title "Work List" and work items
  res.render("list", {
    listTitle: "Work List",
    listItems: workItems
  });
});

app.post("/", function(req, res){ // Define a route to handle POST requests
  if(req.body.listSubmit === "Work"){ // Check if the submitted form is for work items
    workItems.push(req.body.newTodo); // Add the new work item to the workItems array
    res.redirect("/work"); // Redirect to the "/work" route
  }else{
    listItems.push(req.body.newTodo); // Add the new list item to the listItems array
    res.redirect("/"); // Redirect to the root route
  }
});

app.listen(3000, function() { // Start the server on port 3000
  console.log("Server running on port 3000.");
});
