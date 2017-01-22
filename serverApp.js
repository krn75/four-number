var http = require("http");
var headers = require("./headers");
var express = require("express"); //npm install express
var app = express();

http.createServer(app);
//console.log("Server started  on port 80").listen(80);


// app.get('/', function (req, res) {
//     res.send('Hello World')
// })


//Access
app.use("/*",function (req,res,next) {
    headers.setHeaders(res);
    next();
});

//Router
app.get("/test",function (req,res) {
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


