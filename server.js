const express = require('express');
const app = express();
var request = require('request');

app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
})


app.get('/test', function(req, res) {
    request('http://api.openweathermap.org/data/2.5/group?id=935317,2988507,2995469,2972315&units=metric&APPID=3f3b2b086f571ffc6c014ae4539511a6 ', function(error, response, data) {
        var json = JSON.parse(data);
        console.log(json)
        res.json(json)
    });
});


app.listen(3013, function(){
    console.log('ok')
})