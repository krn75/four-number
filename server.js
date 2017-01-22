var express = require('express');
var app = express();

// app.listen(process.env.PORT || 3000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

// set the port of our application
//process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


// set the home page route
app.get('/', function(req, res) {
    res.end('index');
});

