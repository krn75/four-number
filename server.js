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

//Access
app.use("/*",function (req,res,next) {
    headers.setHeaders(res);
    next();
});


// // set the home page route
// app.get('/', function(req, res) {
//     res.end('index');
// });

//Router
app.get("/",function (req,res) {
    res.end(JSON.stringify(getCoords()));
});

function getCoords() {
    var x0=100;
    var y0=100;

    var d=10;
    var res = {};

    res.x=x0+rand(d);
    res.y=y0+rand(d);

    return res;
};

function rand(x) {
    return x * (2*Math.random()-1);
};