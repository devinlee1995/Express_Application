//documentation changes all the time so this can change!!!
//always check online!
//setting up express
var express = require('express'); 
var exphbs = require('express-handlebars');
var bodyp = require('body-parser');

var app = express();

app.use(bodyp.urlencoded({ extend: true }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/CSS'));

//a route and we are sending a response 
app.get('/', function (req, res) {   
	//res.send('Welcome to Inspiration!'); 
	res.render('home');
});

//another route and we are sending a response 
//from the browser, we go localhost:3000/about and it 
//displays 'About Inspiration'
app.get('/about', function (req, res) {   
	//res.send('About Inspiration'); 
	res.render('about');
}); 

app.get('/cupcakes', function (req, res) {   
	//res.send('Inspirational quotes inspire'); 
	res.render('cupcakes');
});

app.get('/contact', function (req, res) {   
	//res.send('Inspirational quotes inspire'); 
	res.render('contact',{username: ""});
});

/*app.get('/login', function (req, res) {   
	var username = req.query.username;
	var password = req.query.password;
	console.log(req.query.username);
	console.log(req.query.password);
	res.render('home', {username: username});
});*/

app.post('/login', function (req, res) {   
	console.log("hello! This is from the post request");
	console.log("username: " +req.body.username);
	var username = req.body.username;
	if (username != 'bob') {
		username = "YOU ARE AN IMPOSTER!";
	}
	res.render('contact', {username: username});
});

app.use(function (req, res, next) {
	res.status(404);
	res.send('404');
});

app.listen(3000, function () {  
	console.log('Cutie Cakes app listening on port 3000!'); 
});