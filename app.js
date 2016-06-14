//documentation changes all the time so this can change!!!
//always check online!
//setting up express
var express = require('express'); 
var exphbs = require('express-handlebars');

var app = express();

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
	res.render('contact');
});

app.listen(3000, function () {  
	console.log('Inspiration app listening on port 3000!'); 
});