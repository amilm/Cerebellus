module.exports = function (app, service) {
 
	
	app.get('/', function(req, res){
		res.render('index', {title: 'Cerebellus Automation'})
	});

	var usermodel = service.useModel('user')
	app.get('/login', function(req, res) {
		
		
		usermodel.User.find({}, function (err, users) {
			if (err) {
				console.log(err);
			}
			if (users == null){
				console.log('Users object is null')
			}
			/*console.log(users.length)
			users.forEach(function(user){
				console.log('Username: ' + user.username);
			});	*/	
			
			res.render('login', {title: 'Sign In', users: users})
		});
	});
}