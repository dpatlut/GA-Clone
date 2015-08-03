var express = require('express');
var app = express();
var ejs = require('ejs');
var fs = require('fs');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

app.use(urlencodedBodyParser);

app.use(methodOverride('_method'));

app.set('view_engine', 'ejs');

function getWineData(){
	var data = fs.readFileSync('data.json', 'utf8');
	var parsedData = JSON.parse(data);
	return parsedData
}

function saveWine(wineData){
	var updatedData = JSON.stringify(wineData);
		fs.writeFile('data.json', updatedData, function(err){
			console.log('data updated');
		});
}

app.get('/', function(req, res){
	res.redirect('/wines');
});

app.get('/wines', function(req, res){
	var wines = getWineData().wines;
	res.render('index.ejs', {wines: wines})
});

app.get('/wines/new', function(req, res){
	res.render('new.ejs');
});

app.get('/wines/:id', function(req, res){
	var wines = getWineData().wines
	var wine = wines[req.params.id]
	res.render('show.ejs', {wine: wine})
});

app.post('/wines', function(req,res){
	var wineData = getWineData();
	var id = wineData.counter + 1
	var newWine = {
		id: id,
		wineName: req.body.wineName,
		type: req.body.type
	}
	wineData.wines[id] = newWine;
	wineData.counter = id;
	saveWine(wineData);
	res.redirect('/wines')
});

app.get('/wines/:id/edit', function(req, res){
	var wines = getWineData().wines;
	var thisWine = wines[req.params.id];
	res.render('edit.ejs', {wine: thisWine})
});

app.put('/wines/:id', function(req,res){
	//get all the data from the JSON file
	//choose the right wine by it's id
	//update each attribute
	//save wine to the json file
	//redirect to the page where that particular wine lives
});



app.listen(3000, function(){
	console.log('Listening on port 3000!')
});

