module.exports = function (app, service) {
	var usermodel = service.useModel('user')
	app.get('/Admin/Users', function(req, res) {
		
		
		usermodel.User.find({}, function (err, users) {
			if (err) {
				console.log(err);
			}
			if (users == null){
				console.log('Users object is null')
			}
					
			res.render('Admin/user', {title: 'User Administration', users: JSON.stringify(users)})
		});
	});
	
}