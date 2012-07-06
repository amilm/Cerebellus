module.exports = function (app, service) {
	
	app.get('/', function(req, res){
		res.render('index', {title: 'Cerebellus Automation'})
	});

	app.get('/login', function(req, res){
		res.render('login', {title: 'Log In'})
	});
}