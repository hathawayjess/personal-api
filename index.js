var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var app = express();

app.use(bodyParser.json());

app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbyType);
app.get('/skillz', middleware.generateId, mainCtrl.getSkillz)


app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.put('/hobbies', mainCtrl.addHobby);
app.put('/occupations', mainCtrl.addOccupation);



app.listen(8000);
